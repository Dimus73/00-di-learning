from django import forms
from .models import *

class AddGifForm(forms.Form):
    uploader_name = forms.CharField(max_length=50)
    title = forms.CharField(max_length=50)
    url = forms.URLField()
    categories=forms.ModelChoiceField(queryset=Category.objects.all())
