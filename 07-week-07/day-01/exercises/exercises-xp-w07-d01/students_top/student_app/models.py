from django.db import models

# Create your models here.
class Student(models.Model):
    first_name = models.CharField(max_length=50, db_index=True)
    last_name = models.CharField(max_length=50, db_index=True)
    email = models.EmailField (blank=True, null=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    


