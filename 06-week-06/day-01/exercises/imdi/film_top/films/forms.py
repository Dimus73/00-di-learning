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

class AddPosterForm(forms.ModelForm):
    class Meta:
        model = Poster
        fields = ['imagefield']

# ************************************************Показать Ece
class MyEditFilm (forms.ModelForm):
    class Meta:
        model = Film
        fields = ['title', 'release_date', 'created_in_country', 'available_in_countries', 'category', 'director']
    img_field = forms.ImageField(max_length=50 )


class AddDirectorForm (forms.ModelForm):
    class Meta:
        model = Director
        fields = '__all__'
    
    films = forms.ModelMultipleChoiceField(queryset=Film.objects.all())

class filmCardForm (forms.ModelForm):
    class Meta:
        model = Film
        fields = ['title', 'release_date', 'created_in_country', 'category', 'director']

#****************** View film detail
class AddCommentFom (forms.ModelForm):
    class Meta:
        INTEGER_CHOICES= [tuple([x,x]) for x in range(1,6)]
        model = RatingCommentnt
        fields = ['comment', 'rating']
        widgets = {'rating':forms.Select(choices=INTEGER_CHOICES)
                   }
