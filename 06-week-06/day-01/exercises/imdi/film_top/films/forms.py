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

class MyEditFilm (forms.ModelForm):
    class Meta:
        model = Film
        fields = ['title', 'release_date', 'created_in_country', 'available_in_countries', 'category', 'director']
    img_field = forms.ImageField(label ='sssss' )

    def __init__(self, *args, **kwargs):
        # kwargs['initial'] = {'img_field':'test/test.jpg'}
        super(MyEditFilm, self).__init__(*args, **kwargs)
        # print (f"Это инициализация формы {kwargs}")
        # print (f"Это img_field до обновленияЖ {self.img_field}")

    def save(self, commit=True):
        print ('***************************************')        
        instance = super(MyEditFilm, self).save(commit=False)
        instance.poster.movie.imagefield = self.cleaned_data['img_field'] # сохраняем данные из связанной модели
        print ('То что сохраняем :', self.cleaned_data['img_field'])
        if commit:
            instance.save()
        return instance

class AddDirectorForm (forms.ModelForm):
    class Meta:
        model = Director
        fields = '__all__'
    
    films = forms.ModelMultipleChoiceField(queryset=Film.objects.all())

class filmCardForm (forms.ModelForm):
    class Meta:
        model = Film
        fields = ['title', 'release_date', 'created_in_country', 'category', 'director']