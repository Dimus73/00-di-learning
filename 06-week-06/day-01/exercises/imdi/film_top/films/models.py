from django.db import models
import datetime
 
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
    def __str__ (self):
        return self.title
    
class Director(models.Model):
    first_name               = models.CharField (max_length=50, blank=False)
    last_name                = models.CharField (max_length=50, blank=False)
    def __str__ (self):
        return f"{self.first_name} {self.last_name}"
    


