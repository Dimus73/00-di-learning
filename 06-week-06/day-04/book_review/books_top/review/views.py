from typing import Any, Dict

from django.db.models.query import QuerySet
# from pygments.token import Comment
from .models import *
from django.shortcuts import render, redirect
from django.views.generic import DetailView, ListView, CreateView
from utils import *
from .forms import RegisterUserForm
from django.urls import reverse_lazy
from django.contrib.auth.views import LoginView
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import logout, login


# Create your views here.

class BookList(DataMixin, ListView):
    # model = Book
    # fields = ['title', 'author', 'published_date', 'description', 'page_count', 'thumbnail_url', 'avr_rating']
    # template_name = 'review/homepage.html'

    # def get_context_data(self, *,object_list=None, **kwargs: Any) -> Dict[str, Any]:
    #     context = super().get_context_data(**kwargs)
    #     c_def   = self.get_user_context(title = "Books")
    #     context = dict(list(context.items()) + list(c_def.items()))
    #     return context
    pass


def searche_books(request):
    if request.method == 'POST':
        print("******** Post request\n", request.POST)
        search_book = request.POST.get('book_title', False)
        print(search_book)
        search_author = request.POST.get('author_name', False)
        print(search_author)
        book_list = Book.objects.all()
        book_list = book_list.filter(
            author__icontains=search_author) if search_author else book_list
        book_list = book_list.filter(
            title__icontains=search_book) if search_book else book_list
    else:
        book_list = Book.objects.all()
    title = "Library"
    context = {'menu': menu, 'title': title, 'book_list': book_list}
    return render(request, 'review/homepage.html', context)


class ViewComments(DataMixin, ListView):
    model = BookReview
    fields = '__all__'
    template_name = 'review/comments.html'
    
    def get_queryset(self) -> QuerySet[Any]:
        q = super().get_queryset()
        pk = self.kwargs.get('pk')
        q = q.filter(book=pk)
        return q

    def get_context_data(self, *, object_list=None, **kwargs: Any) -> Dict[str, Any]:
        context = super().get_context_data(**kwargs)
        c_def = self.get_user_context(title="Register user")
        context = dict(list(context.items()) + list(c_def.items()))
        return context



# ************** USER
class RegisterUser (DataMixin, CreateView):

    form_class = RegisterUserForm
    template_name = 'ac_registeruser.html'
    success_url = reverse_lazy('homepage_path')

    def get_context_data(self, *, object_list=None, **kwargs: Any) -> Dict[str, Any]:
        context = super().get_context_data(**kwargs)
        c_def = self.get_user_context(title="Register user")
        context = dict(list(context.items()) + list(c_def.items()))
        return context


class LoginUser(DataMixin, LoginView):
    form_class = AuthenticationForm
    template_name = 'review/ac_login.html'
    success_url = reverse_lazy('homepage_path')

    def get_context_data(self, *, object_list=None, **kwargs: Any) -> Dict[str, Any]:
        context = super().get_context_data(**kwargs)
        c_def = self.get_user_context(title="User log in")
        context = dict(list(context.items()) + list(c_def.items()))
        return context

    def get_success_url(self):
        return reverse_lazy('homepage_path')


def logout_user(request):
    logout(request)
    return redirect('homepage_path')
