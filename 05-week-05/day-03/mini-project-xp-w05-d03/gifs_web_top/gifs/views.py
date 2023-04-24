from django.shortcuts import render
from .forms import AddGifForm

# Create your views here.
def add_gif(request):
    f = AddGifForm()
    context={

    }
    context['form']=f
    print (context)
    return render(request, 'gifs/add_gif.html', context)
 