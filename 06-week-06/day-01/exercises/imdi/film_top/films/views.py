from django.shortcuts      import render
from .models               import *
from .forms                import AddFilmForm, AddDirectorForm
from django.shortcuts      import render, redirect, get_object_or_404
from django.views.generic  import ListView, UpdateView
from django.urls           import reverse_lazy
from django                import forms

menu = [{'title': "Home", 'url_name': 'homepage_path'},
        {'title': "Add film", 'url_name': 'add_film_path'},
        {'title': "Add Director", 'url_name': 'add_director_path'},
        # {'title': "Favorites", 'url_name': 'favorites_path'}
        ]



# Create your views here.
class HomePageView(ListView):
    model=Film
    fialds='__all__'
    title = "Homepage"
    template_name = 'films/homepage.html'
    extra_context = {'menu': menu, 'title':title}

class EditDirector(UpdateView):
    model = Director
    fields = ['first_name', 'last_name']
    template_name = 'director/editDirector.html'
    context_object_name = 'post'
    title = "Edit director"
    extra_context = {'menu': menu, 'title':title}
    success_url = reverse_lazy('homepage_path')

class EditFilm(UpdateView):
    model = Film
    fields = ['title', 'release_dat', 'created_in_country', 'available_in_countries', 'category', 'director']
    template_name = 'film/editFilm.html'
    context_object_name = 'post'
    title = "Edit film"
    extra_context = {'menu': menu, 'title':title}
    success_url = reverse_lazy('homepage_path')



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
