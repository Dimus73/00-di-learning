from django.shortcuts import render
from django.http import HttpResponse
import json
from info.models import * 


# Create your views here.
def family (request, family_id):
    with open('data.json','r') as f:
        data=json.load(f)

    data_dic={'data':data}
    context={}
    context['animals_name']= [f['name'] for f in data_dic['data']['animals'] if int(f['family']) == int(family_id)]
    context['family_id']=family_id
    print (context, type(family_id))
    
    return render(request, 'info/family.html', context)

def animal (request, animal_id):
    # with open('data.json','r') as f:
    #     data=json.load(f)

    # data_dic={'data':data}
    # context={}
    # context['animals']=data_dic['data']['animals'][animal_id-1]
    # context['animal_id']=int(animal_id)
    context=Animals.objects.get(pk=animal_id)
    print(context.all_info_dict())
    return render(request, 'info/animal.html',{'context':context})

def animals_list (request):
    animals_list=Animals.objects.all()
    context={'animals':animals_list}
    print(context)
    return render(request, 'info/animals_list.html',context)