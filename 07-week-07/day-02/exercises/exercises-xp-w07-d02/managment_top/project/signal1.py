from django.db.models.signals import post_save
from django.db.transaction import commit
from django.dispatch import receiver

from django.contrib.auth.models import User
from .models import Department, Employee

@receiver(post_save, sender=User)
def create_employee(sender, instance, created, **kwargs):
    print(f"CREATING A PROFILE FOR USER - {instance}")
    if created:
        vrem_department = Department.objects.get(name='Finance')
        new_profile = Employee(name=instance,department=vrem_department)
        new_profile.user=instance
        new_profile.save()
        # new_profile.user.add(instance)
        print(f"CREATE PROFILE: {new_profile}")	

print("****************Загрузка сигнала")
