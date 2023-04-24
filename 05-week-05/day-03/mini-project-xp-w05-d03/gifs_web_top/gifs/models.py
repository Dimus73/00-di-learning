from django.db import models

# Create your models here.

class Gif(models.Model):
    title = models.CharField(max_length=50,blank=False,db_index=True)
    url=models.URLField(blank=False)
    uploader_name=models.CharField(max_length=50,blank=False,db_index=True)
    created_at=models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return(self.title)

class Category(models.Model):
    name = models.CharField(max_length=50,blank=False)
    Gifs=models.ManyToManyField(Gif) 
    
    def __str__(self):
        return(self.name)
