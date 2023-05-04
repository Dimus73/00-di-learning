from typing import Any, Dict
from django.shortcuts          import render
from django.views.generic      import CreateView, UpdateView
from django.urls               import reverse_lazy
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from utils                     import *
from accounts.forms            import *
from django.contrib.auth.views import LoginView


# Create your views here.

class RegisterUser(DataMixin, CreateView):
    form_class = RegisterUserForm
    template_name = 'accounts/registry.html'
    success_url = reverse_lazy('homepage_path')

    def get_context_data(self, *,object_list=None, **kwargs: Any) -> Dict[str, Any]:
        context = super().get_context_data(**kwargs)
        c_def = self.get_user_context(title = "Register user")
        context = dict(list(context.items()) + list(c_def.items()))
        return context

class LoginUser(DataMixin,LoginView):
    form_class=AuthenticationForm
    template_name = 'accounts/login.html'
    
    def get_context_data(self, *,object_list=None, **kwargs: Any) -> Dict[str, Any]:
        context = super().get_context_data(**kwargs)
        c_def = self.get_user_context(title = "User log in")
        context = dict(list(context.items()) + list(c_def.items()))
        return context

class Profile(DataMixin,UpdateView):
    pass