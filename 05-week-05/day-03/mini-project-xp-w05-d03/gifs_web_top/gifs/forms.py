from django import forms
from .models import *


class AddGifForm(forms.Form):
		# def __init__(self, *args, **kwargs):
		# 	super().__init__(*args, **kwargs)
		# 	self.fields['cat'].empty_label = "Категория не выбрана"

		# class Meta:
		# 		model = Gif 
				# fields = '__all__'
				# fields = ['title', 'url', 'uploader_name']
		# 		widgets = {
		# 				'title': forms.TextInput(attrs={'class': 'form-input'}),
		# 				'content': forms.Textarea(attrs={'cols': 60, 'rows': 10}),
		# 		}
        
    uploader_name = forms.CharField(max_length=50, label='Name')
    title = forms.CharField(max_length=50)
    url = forms.URLField()
    categories=forms.ModelChoiceField(queryset=Category.objects.all(), empty_label='choice')
 