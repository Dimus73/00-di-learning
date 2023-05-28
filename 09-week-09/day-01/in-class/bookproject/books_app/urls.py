from django.urls import path
from .views import BookList, BookDetail, boook_create

urlpatterns = [
    path('books/', BookList.as_view(), name='book-list'),
    path('books/<int:pk>/', BookDetail.as_view(), name='book-detail'),
    # path('books/create/', BookList.as_view(), name='book-create')
    path('books/create-post/', boook_create, name='book-create')
]