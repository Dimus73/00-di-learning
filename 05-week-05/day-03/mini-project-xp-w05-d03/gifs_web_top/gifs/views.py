from django.shortcuts import render
from .forms import AddGifForm, AddCategory
from .models import *

menu = [{'title': "Home", 'url_name': 'home'},
        {'title': "Add gif", 'url_name': 'add_gif'},
        {'title': "Add category", 'url_name': 'add_category'},
        # {'title': "Войти", 'url_name': 'login'}
]

# Create your views here.
def home(request):
    gif_list=Gif.objects.all()
    context={'menu':menu, 'gif_list':gif_list}
    for p in gif_list:
        print(p.url)
    print ('Вызываем форму', context)
    return render(request, 'gifs/home.html', context)


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
            f=AddGifForm()
    else:
        print("Это НЕ POST запрос", request.method )
        f=AddGifForm()
    context={'form':f, 'menu':menu}
    print ('Вызываем форму', context)
    return render(request, 'gifs/add_gif.html', context)
 

def add_category(request):
    print('Пришли в функцию')
    if request.method == 'POST':
        print('Это POST запрос', request.method,)
        f = AddCategory(request.POST)
        print("Состояние данных: ", f.is_valid())
        if f.is_valid():
            print("Данные верные")
            print(f.cleaned_data)
#Here we write the data. Moreover, you need to register two databases
            category_base_object=Category(name=f.cleaned_data['category'])
            category_base_object.save()
            f=AddCategory()
    else:
        print("Это НЕ POST запрос", request.method )
        f=AddCategory()
    category_list=Category.objects.all()
    context={'form':f, 'menu':menu, 'category_list':category_list}
    print ('Вызываем форму', context)
    return render(request, 'gifs/add_category.html', context)


def category(request, c_id):
    cat_name=Category.objects.get(pk=c_id)
    gif_list=Gif.objects.filter(category__pk=c_id)
    context={'menu':menu, 'cat_name':cat_name, 'gif_list':gif_list}
    for p in gif_list:
        print(p.url)
    print ('Вызываем форму', context)
    return render(request, 'gifs/category.html', context)

def one_gif(request, gif_id):
    try:
        gif=Gif.objects.get(pk=gif_id)
    except Gif.DoesNotExist:
        context={'menu':menu, 'gif_id':gif_id}
        return render(request, 'gifs/noimge.html', context)
    context={'menu':menu, 'gif':gif}
    print ('Вызываем форму', context)
    return render(request, 'gifs/gif_by_id.html', context)
