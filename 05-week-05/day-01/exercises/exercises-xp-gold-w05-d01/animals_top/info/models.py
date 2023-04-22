from django.db import models

# Create your models here.

class Families (models.Model):
    name=models.CharField(max_length=50,blank=False,db_index=True)

class Animals (models.Model):
    name=models.CharField(max_length=50,blank=False,db_index=True)
    legs=models.IntegerField(blank=False)
    weight=models.FloatField()
    height=models.FloatField()
    speed=models.IntegerField()
    photo=models.ImageField(upload_to='photos_n')
    family=models.ForeignKey('Families',on_delete=models.PROTECT)

    def __str__(self):
        return self.name
    def all_info_dict(self):
        return {'name':self.name, 'legs':self.legs, 'weight':self.weight, 'height':self.height, 'speed':self.speed, 'family':self.family_id}