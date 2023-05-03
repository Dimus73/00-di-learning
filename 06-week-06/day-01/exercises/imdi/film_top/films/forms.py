from django import forms
from .models import *

class AddFilmForm (forms.ModelForm):
    class Meta:
        model=Film
        fields=['title', 'release_date', 'created_in_country', 'available_in_countries', 'category', 'director']
        widgets={
            'title':forms.TextInput(attrs={'id': 'firstname',  'class':'form-control;', 'style':'width:300px'}),
            'release_date'           :forms.DateInput(attrs={'id': 'firstname',  'class':'form-control;'}),
            'release_date'           :forms.DateInput(attrs={'id': 'firstname',  'class':'form-control;'}),
            'created_in_country'     :forms.Select (attrs={'id': 'firstname',  'class':'form-control;'}),
            'available_in_countries' :forms.SelectMultiple (attrs={'id': 'firstname',  'class':'form-control;'}),
            
				}
        
class AddFilmForm (forms.ModelForm):
    class Meta:
        model=Film
        fields=['title', 'release_date', 'created_in_country', 'available_in_countries', 'category', 'director']
        widgets={
            'title':forms.TextInput(attrs={'id': 'firstname',  'class':'form-control;', 'style':'width:300px'}),
            'release_date'           :forms.DateInput(attrs={'id': 'firstname',  'class':'form-control;'}),
            'release_date'           :forms.DateInput(attrs={'id': 'firstname',  'class':'form-control;'}),
            'created_in_country'     :forms.Select (attrs={'id': 'firstname',  'class':'form-control;'}),
            'available_in_countries' :forms.SelectMultiple (attrs={'id': 'firstname',  'class':'form-control;'}),
            
				}

class AddDirectorForm (forms.ModelForm):
    class Meta:
        model = Director
        fields = '__all__'
    
    films = forms.ModelMultipleChoiceField(queryset=Film.objects.all())

class filmCardForm (forms.ModelForm):
    class Meta:
        model = Film
        fields = ['title', 'release_date', 'created_in_country', 'category', 'director']