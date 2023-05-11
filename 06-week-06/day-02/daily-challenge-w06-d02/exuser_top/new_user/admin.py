from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import UserData
from .forms import NewChangeUserForm, NewCreationUserForm

# Register your models here.


@admin.register(UserData)
class CustomUserAdmin(UserAdmin):
    model = UserData
    

    add_fieldsets = (
            *UserAdmin.add_fieldsets,
            (
							 'Custom fields',
               {
                   'fields':(
                       'name_f_l',
                       'gender',
                       'birth_date',
									 )
							 }
						)
		)
    

    fieldsets = (
            *UserAdmin.fieldsets,
            (
							 'Custom fields',
               {
                   'fields':(
                       'name_f_l',
                       'gender',
                       'birth_date',
									 )
							 }
						)
		)
