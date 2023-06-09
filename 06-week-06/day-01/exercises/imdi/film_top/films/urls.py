"""
URL configuration for filmproject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls    import path, include
from .              import views
from films.views    import HomePageView, EditDirector, DeleteDirector, DeleteFilm
# from films.views    import HomePageView, EditDirector, EditFilm

urlpatterns = [
    path('homepage/',                HomePageView.as_view(),   name='homepage_path'),
    path('adddirector/',             views.add_director,       name='add_director_path'),
    path('editDirector/<int:pk>/',   EditDirector.as_view(),   name='edit_director_path'),
    # path('editFilm/<int:pk>/',       EditFilm.as_view(),      name='edit_film_path'),
    path('deleteDirector/<int:pk>/', DeleteDirector.as_view(), name='delete_director_path'),
    path('addfilm/',                 views.add_film,           name='add_film_path'),
    path('editFilm/<int:pk>/',       views.edit_film,          name='edit_film_path'),
    path('deleteFilm/<int:pk>/',     DeleteFilm.as_view(),     name='delete_film_path'),
    path('fullfilminfo/<int:pk>/',   views.view_film_detail,   name='full_film_info_path'),
]
