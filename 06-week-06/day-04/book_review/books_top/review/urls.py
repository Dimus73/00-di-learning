"""
URL configuration for books project.

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
from django.urls import path, include
from .views import RegisterUser, LoginUser, logout_user, searche_books, BookList, ViewComments

urlpatterns = [
    # path('home/',     BookList.as_view(),       name = 'homepage_path'),
    path('home/',             searche_books,              name = 'homepage_path'),
    path('register/',         RegisterUser.as_view(),     name = 'register_path'),
    path('login/',            LoginUser.as_view(),        name = 'login_path'),
    path('logout/',           logout_user,                name = 'logout_path'),
    path('comments/<int:pk>',  ViewComments.as_view(),    name = 'comments_path'),
]
