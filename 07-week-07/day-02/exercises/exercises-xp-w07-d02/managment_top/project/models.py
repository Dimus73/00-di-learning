from django.db import models

# Create your models here.

class Department (models.Model):
    name            = models.CharField(max_length=50, db_index=True)
    description     = models.TextField(null=True, blank=True)
    
class Employee (models.Model):
    name            = models.CharField(max_length=50, db_index=True)
    email           = models.EmailField(null=True, blank=True)
    phone_number    = models.CharField(max_length=15, null=True, blank=True)
    department      = models.ForeignKey(Department, on_delete=models.CASCADE)
    
class Task (models.Model):
    name            = models.CharField(max_length=50, db_index=True)
    description     = models.TextField(null=True, blank=True)
    due_date        = models.DateField(null=True, blank=True)
    completed       = models.BooleanField(default=False)
    project         = models.ForeignKey('Project', on_delete=models.CASCADE)
    
class Project (models.Model):
    name = models.CharField(max_length=50, db_index=True)
    description     = models.TextField(null=True, blank=True)
    start_date      = models.DateField(null=True, blank=True)
    end_date        = models.DateField(null=True, blank=True)
    employ          = models.ManyToManyField(Employee, related_name='epl')
    

