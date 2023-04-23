from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
class Person(models.Model):
    name = models.CharField(max_length=50,blank=False,db_index=True)
    email = models.EmailField(blank=True)
    phone = PhoneNumberField(blank=True)
    address=models.CharField(max_length=50,blank=True,db_index=True)
    
