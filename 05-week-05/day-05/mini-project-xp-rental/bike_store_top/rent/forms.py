from django import forms
from django.core.exceptions import ValidationError
from .models import *

class AddCustomerForm (forms.ModelForm):
    class Meta:
        model = Customer
        fields=['first_name', 'last_name', 'email', 'phone_number', 'address', 'city', 'country']

        def clean (self):
            print ("Зашли в проверку")
            super(AddCustomerForm, self).clean()
            first_name = self.cleaned_data.get('first_name')
            last_name  = self.cleaned_data.get('last_name')
            
            print(f" ghjdthztv yf yfkbxbt {first_name} {last_name}")
            user = Customer.objects.filter(first_name=first_name, last_name=last_name)
            if not user:
                self._errors['first_name'] = self.error_class(['The combination of first and last name must be unique'])
                self._errors['last_name'] = self.error_class(['The combination of first and last name must be unique'])
            
            return self.cleaned_data

