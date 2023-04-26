from django import forms
from .models import *



class AddTask(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['category'].empty_label = "Select category"
    class Meta:
        model = ToDo
        fields = ['title', 'details', 'deadline_date', 'category']
        widgets ={
            # 'title' : forms.FormTextInput(attrs={'size': 8, 'title': 'Task title'}),
            # 'deadline_date' : forms.Form(attrs={'size': 8, 'title': 'Task title'}),
            'details' : forms.Textarea(attrs={'cols': 20, 'rows': 3})
        }
        
class TaskList(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['category'].empty_label = "Категория не выбрана"
    class Meta:
        model = ToDo
        fields = ['title', 'details', 'deadline_date', 'category']
