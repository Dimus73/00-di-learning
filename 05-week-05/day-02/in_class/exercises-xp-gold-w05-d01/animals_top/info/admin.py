from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Families, Animals

admin.site.register(Families)
admin.site.register(Animals)