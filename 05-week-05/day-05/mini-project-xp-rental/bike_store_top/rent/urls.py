"""
URL configuration for tasks project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from . import views 
from .views import CastomerList, VehicleList

urlpatterns = [
    path('', views.home, name="home_path" ),
    path('rentals_list/', views.rentals_list, name="rentals_list_path" ),
    path('rental/<int:r_id>', views.rental, name="rental_path" ),
    path('customer/<int:c_id>', views.customer, name="customer_path"),
    path('vehicle/<int:v_id>', views.vehicle, name="vehicle_path"),
    path('customer/', CastomerList.as_view(), name="customer_list_path"),
    path('vehicle/', VehicleList.as_view(), name="vehicle_list_path"),
]
