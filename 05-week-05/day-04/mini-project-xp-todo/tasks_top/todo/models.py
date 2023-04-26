from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=50,blank=False,db_index=True)
    image=models.URLField(blank=True, null=True)
    del_flag=models.BooleanField(default=False)
    
    def __str__(self):
           return(self.name)
    
class ToDo(models.Model):
    title = models.CharField(max_length=50,blank=False,db_index=True)
    details = models.TextField()
    has_been_done = models.BooleanField(default=False)
    date_creation = models.DateField(auto_now=True)
    date_completion = models.DateField(blank=True, null=True)
    deadline_date = models.DateField(blank=True, null=True)
    category = models.ForeignKey(Category,on_delete=models.PROTECT)
    
    def __str__(self):
           return(self.name)
