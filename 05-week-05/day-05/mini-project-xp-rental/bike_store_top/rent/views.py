from django.shortcuts import render
from .models import *
from django.views.generic import ListView

menu =   [{'title': "Home",      'url_name': 'home_path'},
          {'title': "Rentals",   'url_name': 'rentals_list_path'},
          {'title': "Users",     'url_name': 'customer_list_path'},
          {'title': "Vehicles",     'url_name': 'vehicle_list_path'}
]


# Create your views here.
 
def home (request):
    context={'menu':menu, 'title':'Home page'}
    return render(request, 'rent/home.html', context)

def rentals_list (request):
    # r_list = Rental.objects.all().order_by('rent_status', 'rental_date')
    if request.method == 'POST':
        print (request.POST)
        if request.POST.get('in_rent',False):
            r_list = Rental.objects.filter(return_date__isnull=True)
            rent_status={'only_rent':'checked'}
        else:
            r_list = Rental.objects.all()
            rent_status={'only_rent':False}
    else:
        r_list = Rental.objects.all()
        rent_status={'only_rent':False}

    context={'menu':menu, 'title':'Rentals list', 'r_list':r_list}
    context = context | rent_status
    return render(request, 'rent/rentals_list.html', context)

def rental (request, r_id):
    try:
        r = Rental.objects.get(pk=r_id)
        context={'menu':menu, 'title':'Rental', 'r':r}
        return render(request, 'rent/rental.html', context)
    except Rental.DoesNotExist:
        message = f"Error: We couldn't find a rental with the ID:"
        number = r_id
        context={'menu':menu, 'title':'Error', 'message':message, 'number':number}
        return render(request, 'rent/error.html', context)

def customer (request, c_id):
    try:
        c = Customer.objects.get(pk=c_id)
        context={'menu':menu, 'title':'Customer info', 'c':c}
        return render(request, 'rent/customer.html', context)
    except Customer.DoesNotExist:
        message = f"Error: We couldn't find a customer with the ID:"
        number = c_id
        context={'menu':menu, 'title':'Error', 'message':message, 'number':number}
        return render(request, 'rent/error.html', context)

def vehicle (request, v_id):
    try:
        v = Vehicle.objects.get(pk=v_id)
        context={'menu':menu, 'title':'Vehicle info', 'v':v}
        return render(request, 'rent/vehicle.html', context)
    except Vehicle.DoesNotExist:
        message = f"Error: We couldn't find a vehicle with the ID:"
        number = v_id
        context={'menu':menu, 'title':'Error', 'message':message, 'number':number}
        return render(request, 'rent/error.html', context)

class CastomerList(ListView):
    model=Customer
    def get_queryset(self):
        return Customer.objects.all().order_by('first_name')
    
    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'User list page'
        context['menu'] = menu
        return context
    
class VehicleList(ListView):
    model=Vehicle

    def get_queryset(self):
        return Vehicle.objects.all().order_by('vehicle_type', 'size')
    
    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'User list page'
        context['menu'] = menu
        return context
