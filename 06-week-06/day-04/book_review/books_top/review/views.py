from typing                    import Any, Dict
from .models                   import *
from django.shortcuts          import render, redirect
from django.views.generic      import ListView, CreateView
from utils                     import *
from .forms                    import RegisterUserForm
from django.urls               import reverse_lazy
from django.contrib.auth.views import LoginView
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth       import logout, login


# Create your views here.

class BookList(DataMixin,ListView):
    model = Book
    fields = ['title', 'author', 'published_date', 'description', 'page_count', 'thumbnail_url', 'avr_rating']
    template_name = 'review/homepage.html'

    def get_context_data(self, *,object_list=None, **kwargs: Any) -> Dict[str, Any]:
        context = super().get_context_data(**kwargs)
        c_def   = self.get_user_context(title = "Books")
        context = dict(list(context.items()) + list(c_def.items()))
        return context


#************** USER
class RegisterUser (DataMixin, CreateView):

    form_class    = RegisterUserForm
    template_name = 'ac_registeruser.html'
    success_url   = reverse_lazy('homepage_path')

    def get_context_data(self, *,object_list=None, **kwargs: Any) -> Dict[str, Any]:
        context = super().get_context_data(**kwargs)
        c_def   = self.get_user_context(title = "Register user")
        context = dict(list(context.items()) + list(c_def.items()))
        return context
    
class LoginUser(DataMixin, LoginView):
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

def logout_user (request):
    logout(request)
    return redirect('homepage_path')
