from django.shortcuts import render
from .models import *

menu =   [{'title': "Home",          'url_name': 'home_path'},
          {'title': "Rentals",       'url_name': 'rentals_list_path'},
        # {'title': "Add category",  'url_name': 'add_category'},
        # {'title': "Войти",         'url_name': 'login'}
]


# Create your views here.
 
def home (request):
    context={'menu':menu, 'title':'Home page'}
    return render(request, 'rent/home.html', context)

def rentals_list (request):
    r_list = Rental.objects.all().order_by('rental_date')
    context={'menu':menu, 'title':'Rentals list', 'r_list':r_list}
    return render(request, 'rent/rentals_list.html', context)

def rental (request, r_id):
    try:
        r = Rental.objects.get(pk=r_id)
        context={'menu':menu, 'title':'Rental', 'r':r}
        return render(request, 'rent/rental.html', context)
    except Rental.DoesNotExist:
        message = f"Error: We couldn't find a rental with the number:"
        number = r_id
        context={'menu':menu, 'title':'Error', 'message':message, 'number':number}
        return render(request, 'rent/error.html', context)

def customer (request, c_id):
    try:
        c = Customer.objects.get(pk=c_id)
        context={'menu':menu, 'title':'Customer info', 'c':c}
        return render(request, 'rent/customer.html', context)
    except Customer.DoesNotExist:
        message = f"Error: We couldn't find a customer with the number:"
        number = c_id
        context={'menu':menu, 'title':'Error', 'message':message, 'number':number}
        return render(request, 'rent/error.html', context)

def vehicle (request, v_id):
    try:
        v = Vehicle.objects.get(pk=v_id)
        context={'menu':menu, 'title':'Vehicle info', 'v':v}
        return render(request, 'rent/vehicle.html', context)
    except Customer.DoesNotExist:
        message = f"Error: We couldn't find a vehicle with the number:"
        number = v_id
        context={'menu':menu, 'title':'Error', 'message':message, 'number':number}
        return render(request, 'rent/error.html', context)
