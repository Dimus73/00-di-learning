from django.shortcuts import render

menu =   [{'title': "Home",          'url_name': 'home_path'},
        # {'title': "Add new task",  'url_name': 'add_task_path'},
        # {'title': "Add category",  'url_name': 'add_category'},
        # {'title': "Войти",         'url_name': 'login'}
]


# Create your views here.
 
def home (request):
    context={'menu':menu, 'title':'Home page'}
    return render(request, 'rent/home.html', context)

