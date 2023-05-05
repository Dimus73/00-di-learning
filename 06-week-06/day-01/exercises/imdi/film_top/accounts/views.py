from typing import Any, Dict
from django.shortcuts          import render
from django.views.generic      import CreateView, UpdateView
from django.urls               import reverse_lazy
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from utils                     import *
from accounts.forms            import *
from django.contrib.auth.views import LoginView
from .models                   import UserProfile     
from django.contrib.auth       import logout, login
from django.shortcuts          import render, redirect


# Create your views here.

class RegisterUser(DataMixin, CreateView):
    form_class    = RegisterUserForm
    template_name = 'accounts/registry.html'
    success_url   = reverse_lazy('homepage_path')

    def get_context_data(self, *,object_list=None, **kwargs: Any) -> Dict[str, Any]:
        context = super().get_context_data(**kwargs)
        c_def   = self.get_user_context(title = "Register user")
        context = dict(list(context.items()) + list(c_def.items()))
        return context

class LoginUser(DataMixin,LoginView):
    form_class    = AuthenticationForm
    template_name = 'accounts/login.html'
    success_url   = reverse_lazy('homepage_path')
    
    def get_context_data(self, *,object_list=None, **kwargs: Any) -> Dict[str, Any]:
        context = super().get_context_data(**kwargs)
        c_def   = self.get_user_context(title = "User log in")
        context = dict(list(context.items()) + list(c_def.items()))
        return context

    def get_success_url(self):
        return reverse_lazy('homepage_path')


class UserProfile(DataMixin,UpdateView):
    print("Мы здесь")
    model         = UserProfile
    fields        = ['user', 'age', 'addres']
    context_object_name = 'post'
    template_name = 'accounts/userprofile.html'
    success_url   = reverse_lazy('homepage_path')

    def get_context_data(self, *,object_list=None, **kwargs: Any) -> Dict[str, Any]:
        context = super().get_context_data(**kwargs)
        c_def   = self.get_user_context(title = "User profile")
        context = dict(list(context.items()) + list(c_def.items()))
        return context


def logout_user (request):
    logout(request)
    return redirect('homepage_path')