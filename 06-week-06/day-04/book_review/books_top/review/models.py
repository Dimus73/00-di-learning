from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Book (models.Model):
    title           = models.CharField(max_length=100)
    author          = models.CharField(max_length=100)
    published_date  = models.DateField(null=True, blank=True)
    description     = models.TextField(null=True, blank=True) 
    page_count      = models.IntegerField(null=True, blank=True)
    categories      = models.CharField(null=True, blank=True)
    thumbnail_url   = models.URLField(null=True, blank=True)
    avr_rating      = models.FloatField(default=0)
    cnt_rating      = models.IntegerField(default=0)
    class Meta:
        ordering = ['title']
    
class BookReview (models.Model):
    book            = models.ForeignKey (Book, on_delete= models.CASCADE )
    user            = models.ForeignKey (User, on_delete=models.CASCADE)
    rating          = models.IntegerField(null=True, blank=True)
    text            = models.TextField(null=True, blank=True)
    
