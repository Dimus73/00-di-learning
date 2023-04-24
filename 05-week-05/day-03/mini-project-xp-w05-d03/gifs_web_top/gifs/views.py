from django.shortcuts import render
from .forms import AddGifForm
from .models import *

# Create your views here.
def add_gif(request):
    print('Пришли в функцию')
    if request.method == 'POST':
        print('Это POST запрос', request.method,)
        f = AddGifForm(request.POST)
        print("Состояние данных: ", f.is_valid())
        if f.is_valid():
            print("Данные верные")
            print(f.cleaned_data)
#Here we write the data. Moreover, you need to register two databases
            gif_base_object=Gif(title=f.cleaned_data['title'], url=f.cleaned_data['url'], uploader_name=f.cleaned_data['uploader_name'])
            gif_base_object.save()
            gif_base_object.category_set.add(f.cleaned_data['categories'])
    else:
        print("Это НЕ POST запрос", request.method )
        f=AddGifForm()
    context={'form':f}
    print ('Вызываем форму', context)
    return render(request, 'gifs/add_gif.html', context)
 