from django.shortcuts import render
from .forms import *
from .models import *

menu = [{'title': "Home", 'url_name': 'home'},
        {'title': "Add gif", 'url_name': 'add_gif'},
        {'title': "Add category", 'url_name': 'add_category'},
        # {'title': "Войти", 'url_name': 'login'}
]

# Create your views here.
def add_task (request):
    # print('Пришли в функцию')
    if request.method == 'POST':
        # print('Это POST запрос', request.method,)
        f = AddTask(request.POST)
        # print("Состояние данных: ", f.is_valid())
        if f.is_valid():
            print("Данные верные")
            print(f.cleaned_data)
            f.save()
						#Here we write the data. Moreover, you need to register two databases
            f=AddTask()
    else:
        # print("Это НЕ POST запрос", request.method )
        f=AddTask()
    context={'form':f, 'menu':menu}
    # print ('Вызываем форму', context)
    return render(request, 'todo/add_task.html', context)


def list_task (request):
    if request.method == 'POST':
        print(request, request.POST['button_id'])
        f = AddTask(request.POST)
        if f.is_valid():
            f.save()
            f=AddTask()
    else:
        f=AddTask()
    task_list=ToDo.objects.all()
    context={'task_list':task_list, 'menu':menu}
    return render(request, 'todo/list_task.html', context)