from django import forms
from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from .models import UserData

class NewCreationUserForm(UserCreationForm):
    class Meta:
        model = UserData
        fields = ['username', 'name_f_l', 'gender', 'birth_date' ]
        
class NewChangeUserForm(UserChangeForm):
    class Meta:
        model = UserData
        fields = ['username', 'name_f_l', 'gender', 'birth_date' ]
      