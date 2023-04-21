from django.shortcuts import render
from django.http import HttpResponse

def get_data():
    data_list=[{
    'id': 1,
    'name': 'Bob Smith',
    'age': 35,
    'country': 'USA'
    },
    {
    'id': 2,
    'name': 'Martha Smith',
    'age': 60,
    'country': 'USA'
    },
    {
    'id': 3,
    'name': 'Fabio Alberto',
    'age': 18,
    'country': 'Italy'
    },
    {
    'id': 4,
    'name': 'Dietrich Stein',
    'age': 85,
    'country': 'Germany'
    }]
    return (data_list)

# Create your views here.

def people_list(request):
   data=get_data()
   context={}
   context['people']=data
   print(context)
   return render(request, '1.html', context)

def people_id (request, p_id:int):
   data=get_data()
   data = [x for x in data if x['id'] == p_id]
   context={}
   context['people']=data
   print(context)
   return render(request, '1.html', context)