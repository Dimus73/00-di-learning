from django.db import models
import datetime
from django.contrib.auth.models import User
 
# Create your models here.
class Country(models.Model):
    name                     = models.CharField(max_length=50, blank=False)
    def __str__ (self):
        return self.name

class Category(models.Model):
    name                     = models.CharField(max_length=50, blank=False)
    def __str__ (self):
        return self.name
    
class Film(models.Model):
    title                    = models.CharField (max_length=50, blank=False)
    release_date             = models.DateField (default=datetime.date.today())
    created_in_country       = models.ForeignKey (Country, on_delete=models.PROTECT, related_name='country_created')
    available_in_countries   = models.ManyToManyField (Country, related_name='country_avalible')
    category                 = models.ManyToManyField (Category)
    director                 = models.ManyToManyField ('Director', related_name='films')
    class Meta:
        ordering=['title']

    def __str__ (self):
        return self.title
    def avr_rtng(self):
        # comm_list = RatingCommentnt.objects.filter(pk=self.pk)
        comm_list = self.rating_comment_for_film.exclude(rating=0)
        r=[x.rating for x in comm_list ]
        print ("rating ********",(sum(r)/len(r) if len(r)>0 else 0))
        avr=round((sum(r)/len(r) if len(r)>0 else 0))
        return ['&#9733' for x in range(avr)]
        
    
class Director(models.Model):
    first_name               = models.CharField (max_length=50, blank=False)
    last_name                = models.CharField (max_length=50, blank=False)
    def __str__ (self):
        return f"{self.first_name} {self.last_name}"

class Poster(models.Model):
   imagefield = models.ImageField(blank=True, null=True, upload_to="photos/%Y/%m/%d/")
   film_id = models.OneToOneField(Film,related_name='movie',on_delete=models.CASCADE)

class RatingCommentnt(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE, related_name = 'rating_comment_for_user')
    film = models.ForeignKey(Film,on_delete=models.CASCADE, related_name = 'rating_comment_for_film')
    comment = models.TextField (blank=True, null=True)
    rating = models.IntegerField (blank=True, null=True, default=0)
       

    


