from django.db import models
from phonenumber_field.formfields import PhoneNumberField
import datetime

# Create your models here.

class Customer (models.Model):
    first_name     = models.CharField(max_length=50, blank=False, db_index=True)
    last_name      = models.CharField(max_length=50, blank=False, db_index=True)
    email          = models.EmailField()
    # phone_number   = PhoneNumberField()
    phone_number   = models.CharField(max_length=25, blank=True, null=True, db_index=True)
    address        = models.CharField(max_length=150, blank=True, null=True)
    city           = models.CharField(max_length=50, blank=True, null=True)
    country        = models.CharField(max_length=50, blank=True, null=True)
    def __str__ (self):
        return f"{self.first_name} {self.last_name}"
    
class VehicleType (models.Model):
    name = models.CharField(max_length=50, blank=False, db_index=True)
    def __str__ (self):
        return self.name
    
class VehicleSize (models.Model):
    name           = models.CharField(max_length=50, blank=False, db_index=True)
    def __str__ (self):
        return self.name
    
class Vehicle (models.Model):
    vehicle_type   = models.ForeignKey (VehicleType, on_delete=models.DO_NOTHING)
    date_created   = models.DateField  (blank=True) 
    real_cost      = models.FloatField (blank=False)
    size           = models.ForeignKey (VehicleSize, on_delete=models.DO_NOTHING)
    def __str__ (self):
        return f"Model: {self.vehicle_type}-{self.size}"
    def is_in_rent(self):
        rent_list=Rental.objects.filter(vehicle=self.pk,return_date__isnull=True)
        return True if rent_list else False    
class Rental (models.Model):
    rental_date    = models.DateField()
    return_date    = models.DateField(blank=True, null=True)
    customer       = models.ForeignKey(Customer, on_delete=models.DO_NOTHING)
    vehicle        = models.ForeignKey(Vehicle, on_delete=models.DO_NOTHING)

    def __str__ (self):
        return f"Rent: {self.customer} {self.vehicle}"
    class Meta:
        ordering = ('-return_date', 'rental_date')

    def rent_duration(self):
        r_days = datetime.date.today()-self.rental_date
        return (f"{r_days.days} day(s) in rent")
        
    def rent_status(self):
        return True if self.return_date is None else False
    
    def vehicle_in_rent(self):
        v_list=Rental.objects.filter(return_date__isnull=True)
        return v_list
    


    
class RentalRate(models.Model):
    daily_rate     = models.FloatField()
    vehicle_type   = models.ForeignKey (VehicleType, on_delete=models.DO_NOTHING)
    vehicle_size   = models.ForeignKey (VehicleSize, on_delete=models.DO_NOTHING)
    def __str__ (self):
        return f"Rent: {self.vehicle_type} {self.vehicle_size} {self.daily_rate}"
