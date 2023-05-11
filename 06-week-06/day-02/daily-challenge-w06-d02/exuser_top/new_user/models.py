from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class UserData (AbstractUser):
    GENDERS=(
        ('m','male'),
        ('f','feminine')
		)
    
    name_f_l =     models.CharField('Name(F+L):', max_length=150, default='')
    gender =       models.CharField('Gender:', max_length=1, choices=GENDERS, default='')
    birth_date =   models.DateField('Birth date:', default='1800-01-01')