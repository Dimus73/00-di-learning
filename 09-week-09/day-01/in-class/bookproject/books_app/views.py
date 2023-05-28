from django.shortcuts import redirect, render
from rest_framework import generics
# from serializers import serialize
from .models import Book
from .serializers import BookSerializer

# Create your views here.

class BookList (generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    
class BookDetail(generics.RetrieveUpdateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    
		
def boook_create(request):
    if request.method == 'POST':
        serializer = BookSerializer(data=request.POST)
        print(serializer.is_valid())
        if serializer.is_valid():
            serializer.save()
            return redirect('book-list')
    else:
      serializer = BookSerializer()
    return render(request, 'book_create.html',{'serializer':serializer})
