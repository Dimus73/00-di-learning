from django.shortcuts import render
from number.models import *

# Create your views here.
def persons (request, info:str):
    info_type=""
    info_type = 'Phone' if any(map(str.isdigit,info)) else "Name"
    if info_type == 'Phone':
        try:
            person = Person.objects.get(phone=info)
        except Person.DoesNotExist:
            person = None
    else:
        person = Person.objects.filter(name__contains=info).first()
    context={}
    context['info']=info
    context['str']=info_type
    context['person'] = person
    print(person)
    if not person is None:
        return render(request, 'persan-info.html', context)
    else:
        return render(request, 'persan-no.html', context)
