import os
from re import search
import django
import random
from datetime import datetime 
import json
import requests
import random
from faker import Faker


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'books.settings')
django.setup()

from review.models import *

books=Book.objects.all()
users=User.objects.filter(username__contains='User')

f=Faker()
count_comment = random.randint(1,7)
for b in books:
    b.description = f.text(random.randint(50,100))
    b.save()

