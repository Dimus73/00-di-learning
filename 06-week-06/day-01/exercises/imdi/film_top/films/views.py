from typing import Any, Dict
from django.shortcuts      import render
from .models               import *
from .forms                import AddFilmForm, AddDirectorForm, AddPosterForm, AddCommentFom
# from .forms                import AddFilmForm, AddDirectorForm, AddPosterForm, MyEditFilm
from django.shortcuts      import render, redirect, get_object_or_404
from django.views.generic  import ListView, UpdateView, DeleteView
from django.urls           import reverse_lazy
from django                import forms
from utils                 import *
from django.contrib        import messages
from django.contrib.messages.views import SuccessMessageMixin


# Create your views here.
class HomePageView(DataMixin, ListView):
    model=Film
    fialds='__all__'
    template_name = 'films/homepage.html'

    def get_context_data(self, *,object_list=None, **kwargs: Any) -> Dict[str, Any]:
        context = super().get_context_data(**kwargs)
        c_def = self.get_user_context(title = "Homepage")
        context = dict(list(context.items()) + list(c_def.items()))
        # print(context)
        # print('*************', self.request.user, self.request.user.groups.all(),self.request.user.is_superuser)
        return context


class EditDirector(DataMixin, UpdateView):
    model = Director
    fields = ['first_name', 'last_name']
    template_name = 'director/editDirector.html'
    context_object_name = 'post'
    success_url = reverse_lazy('homepage_path')

    def get_context_data(self, *,object_list=None, **kwargs: Any) -> Dict[str, Any]:
        context = super().get_context_data(**kwargs)
        c_def = self.get_user_context(title = "Edit director")
        context = dict(list(context.items()) + list(c_def.items()))
        return context

class DeleteDirector(DataMixin, SuccessMessageMixin, DeleteView):
    model = Director
    fields = '__all__'
    template_name = 'director/deleteDirector.html'
    context_object_name = 'post'
    success_url = reverse_lazy('homepage_path')
    success_message = "The director was successfully removed"
    def get_context_data(self, *,object_list=None, **kwargs: Any) -> Dict[str, Any]:
        context = super().get_context_data(**kwargs)
        c_def = self.get_user_context(title = "Are you sure you want to remove the director:")
        context = dict(list(context.items()) + list(c_def.items()))
        return context
    
    # def delete(self, request, *args, **kwargs):
    #     print("Формируем сообщение для пользователя")
    #     messages.success(request, 'The director was successfully removed')
    #     return super().delete(request, *args, **kwargs)


def add_director (request):
    if request.method == 'POST':
        print (request.POST)
        f=AddDirectorForm(request.POST)
        if f.is_valid():
            first_name = request.POST['first_name']
            last_name = request.POST['last_name']
            # films = request.POST['films']
            # first_name = f.changed_data['first_name']
            # last_name = f.changed_data['last_name']
            films = f.cleaned_data['films']
            print (first_name, last_name, films)

            new_director = Director(first_name = first_name, last_name = last_name)
            new_director.save()
            new_director.films.add(*films)

            f.save()
            return redirect('homepage_path')
    f=AddDirectorForm()
    title = "Add Director"
    context={'menu': menu, 'title':title, 'form':f}
    return render(request, 'director/addDirector.html', context)


# ************************************************Показать Ece

# class EditFilm(DataMixin, UpdateView):
#     model = Film
#     # fields = ['title', 'release_date', 'created_in_country', 'available_in_countries', 'category', 'director']
#     form_class = MyEditFilm
#     template_name = 'film/editFilm.html'
#     context_object_name = 'post'
#     success_url = reverse_lazy('homepage_path')

#     def get_context_data(self, *,object_list=None, **kwargs: Any) -> Dict[str, Any]:
#         context = super().get_context_data(**kwargs)
#         c_def = self.get_user_context(title = "Edit film")
#         context = dict(list(context.items()) + list(c_def.items()))
#         # print (f"Это контекст для формы редактирования {context}")
#         return context

def edit_film (request, pk):
    title = 'Edit Film Page'
    context={'menu': menu, 'title':title}
    if request.method == 'POST':
        print(request.POST)
        f=Film.objects.get(pk=pk)
        f_form = AddFilmForm(request.POST, instance=f)
        try:
            p_form = AddPosterForm(request.POST, request.FILES,instance=f.movie)
            print("нашли постер")
        except Film.movie.RelatedObjectDoesNotExist:
            p_form = AddPosterForm(request.POST, request.FILES)
            print("НЕЕ нашли постер")

        if f_form.is_valid() and p_form.is_valid():
            film = f_form.save()
            poster = p_form.save(commit=False)
            poster.film_id=film
            poster.save()
            print(f"Перед сохранением {poster.film_id}, {poster.pk}, {poster.imagefield}")
            return redirect('homepage_path')
        else:
            context['forms'] = {'f_form':f_form, 'p_form':p_form }
    else:
        f=Film.objects.get(pk=pk)
        f_form = AddFilmForm(instance=f)
        try:
            p_form = AddPosterForm(instance=f.movie)
        except Film.movie.RelatedObjectDoesNotExist:
            p_form = AddPosterForm()

        context['forms'] = {'f_form':f_form, 'p_form':p_form}
        context['film'] = f
    return render (request, 'film/editFilm.html', context)


def add_film (request):
    if request.method == 'POST':
        print (request.POST)
        form_f=AddFilmForm(request.POST, request.FILES)
        form_p = AddPosterForm(request.POST, request.FILES)
        if form_f.is_valid() and form_p.is_valid():
            f = form_f.save()
            p = form_p.save(commit=False)
            p.film_id = f
            p.save()
            return redirect('homepage_path')
        else:
            forms = {'form_f':form_f, 'form_p':form_p}
    else:
        form_f = AddFilmForm()
        form_p = AddPosterForm()
        forms = {'form_f':form_f, 'form_p':form_p}
    title = "Add Film"
    context={'menu': menu, 'title':title, 'forms':forms}
    return render(request, 'film/addFilm.html', context)

class DeleteFilm (DataMixin, SuccessMessageMixin, DeleteView):
    model = Film
    fields = '__all__'
    template_name = 'director/deleteDirector.html'
    context_object_name = 'post'
    success_url = reverse_lazy('homepage_path')
    success_message = "The film was successfully removed"
    def get_context_data(self, *,object_list=None, **kwargs: Any) -> Dict[str, Any]:
        context = super().get_context_data(**kwargs)
        c_def = self.get_user_context(title = "Are you sure you want to remove the film:")
        context = dict(list(context.items()) + list(c_def.items()))
        return context

def view_film_detail(request, pk):
    title = 'Full Film Info Page'
    context={'menu': menu, 'title':title}
    if request.method == 'POST':
        print(request.POST)
        comm_f = AddCommentFom (request.POST)
        if comm_f.is_valid():
            c = comm_f.save(commit=False)
            c.user=request.user
            c.film = Film.objects.get (pk=pk)
            c.save()
            return redirect('homepage_path')
    else:
        film = Film.objects.get (pk=pk)
        film_info = [film]
        context ['film_info'] = film_info
        comm = AddCommentFom()
        film_forms ={'comm':comm}
        context ['film_forms'] = film_forms
        comment_list = RatingCommentnt.objects.filter(film=pk) 
        print ("Комментарии", comment_list)
        context ['comment_list'] = comment_list

    return render (request, 'film/filmFullInfo.html', context)
    





