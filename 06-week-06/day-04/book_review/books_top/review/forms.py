from django                     import forms
from django.contrib.auth.forms  import UserCreationForm
from django.contrib.auth.models import User
from django.core.exceptions     import ValidationError
# from pygments.token             import Comment
from .models                    import *

class RegisterUserForm(UserCreationForm):
    username = forms.CharField(label='Логин', widget=forms.TextInput(attrs={'class': 'form-input'}))
    email = forms.EmailField(label='Email', widget=forms.EmailInput(attrs={'class': 'form-input'}))
    password1 = forms.CharField(label='Пароль', widget=forms.PasswordInput(attrs={'class': 'form-input'}))
    password2 = forms.CharField(label='Повтор пароля', widget=forms.PasswordInput(attrs={'class': 'form-input'}))

    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2')

class AddCommentForm(forms.ModelForm):
    class Meta:
        model = BookReview
        fields = ['rating', 'text']
    