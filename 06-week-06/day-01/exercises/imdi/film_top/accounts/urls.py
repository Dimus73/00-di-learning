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
from django.contrib    import admin
from django.urls       import path, include
from .                 import views
from accounts.views    import RegisterUser, LoginUser, UserProfile

urlpatterns = [
    path('registration/',            RegisterUser.as_view(), name='register_path'),
    path('login/',                   LoginUser.as_view(),    name='login_path'),
    path('userprofile/<int:pk>',     UserProfile.as_view(),  name='user_profile_path'),
    path('logout/',                  views.logout_user,      name='logout_path'),
    # path('editFilm/<int:pk>/',     EditFilm.as_view(),     name='edit_film_path'),
]
