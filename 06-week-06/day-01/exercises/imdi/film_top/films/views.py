from django.shortcuts import render
from .models import *
from .forms import AddFilmForm, AddDirectorForm
from django.shortcuts import render, redirect, get_object_or_404

menu = [{'title': "Home", 'url_name': 'homepage_path'},
        {'title': "Add film", 'url_name': 'add_film_path'},
        {'title': "Add Director", 'url_name': 'add_director_path'},
        # {'title': "Favorites", 'url_name': 'favorites_path'}
        ]



# Create your views here.
def homepage (request):
    title = "Homepage"
    context={'menu': menu, 'title':title,}
    return render(request, 'films/homepage.html', context)

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
            f.save()
            return redirect('homepage_path')
    f=AddDirectorForm()
    title = "Add Director"
    context={'menu': menu, 'title':title, 'form':f}
    return render(request, 'director/addDirector.html', context)
