from typing import Any, Dict
from django.shortcuts      import render
from .models               import *
from .forms                import AddFilmForm, AddDirectorForm
from django.shortcuts      import render, redirect, get_object_or_404
from django.views.generic  import ListView, UpdateView
from django.urls           import reverse_lazy
from django                import forms
from utils                 import *




# Create your views here.
class HomePageView(DataMixin, ListView):
    model=Film
    fialds='__all__'
    template_name = 'films/homepage.html'

    def get_context_data(self, *,object_list=None, **kwargs: Any) -> Dict[str, Any]:
        context = super().get_context_data(**kwargs)
        c_def = self.get_user_context(title = "Homepage")
        context = dict(list(context.items()) + list(c_def.items()))
        print(context)
        print('*************', self.request.user, self.request.user.groups.all(),self.request.user.is_superuser)
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

class EditFilm(DataMixin, UpdateView):
    model = Film
    fields = ['title', 'release_date', 'created_in_country', 'available_in_countries', 'category', 'director']
    template_name = 'film/editFilm.html'
    context_object_name = 'post'
    success_url = reverse_lazy('homepage_path')

    def get_context_data(self, *,object_list=None, **kwargs: Any) -> Dict[str, Any]:
        context = super().get_context_data(**kwargs)
        c_def = self.get_user_context(title = "Edit film")
        context = dict(list(context.items()) + list(c_def.items()))
        return context



def add_film (request):
    if request.method == 'POST':
        print (request.POST)
        f=AddFilmForm(request.POST)
        if f.is_valid():
            f.save()
            return redirect('homepage_path')
    f=AddFilmForm()
    title = "Add Film"
    context={'menu': menu, 'title':title, 'form':f}
    return render(request, 'film/addFilm.html', context)


def add_director (request):
    if request.method == 'POST':
        print (request.POST)
        f=AddDirectorForm(request.POST)
        if f.is_valid():
            
            first_name = f.changed_data['first_name']
            last_name = f.changed_data['last_name']
            films = f.changed_data['films']

            new_director = Director(first_name = first_name, last_name = last_name)
            new_director.save()
            new_director.films.add(*films)

            f.save()
            return redirect('homepage_path')
    f=AddDirectorForm()
    title = "Add Director"
    context={'menu': menu, 'title':title, 'form':f}
    return render(request, 'director/addDirector.html', context)
