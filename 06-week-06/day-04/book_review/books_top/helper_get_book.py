import os
from re import search
import django
import random
from datetime import datetime 
import json
import requests

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'books.settings')
django.setup()

from review.models import *

search_word=['cat', 'dog','airplane','Indian', 'cowboy', 'desert','Israel', 'bird']

url = 'https://www.googleapis.com/books/v1/volumes'
param = {
    'q':'animal:keyes',
    'key':'AIzaSyA8GwJAkvkqrd8jAUufuiMeHbwy_an9rOo'
}


def get_outside_request(url, param):
    r = requests.get(url, param)
    if r.status_code == 200:
        content = r.content
        r.close()
        return (content)
    else:
        print(f'Parametr {param}. No ansver')
    r.close()

for w in search_word:
    param['g'] = w+':keyes'
    ansver = get_outside_request(url, param)
    st = json.loads(ansver)

    format_yyyymmdd = "%Y-%m-%d"

    for b in st['items']:
        print ("----------------",  b['id'], "---------------------")
        try:
            title           = b['volumeInfo']['title']
            author          = ','.join(b['volumeInfo']['authors'])
            published_date  = datetime.strptime(b['volumeInfo']['publishedDate'], format_yyyymmdd) \
                            if len(b['volumeInfo']['publishedDate'])>4 \
                            else datetime.strptime ((b['volumeInfo']['publishedDate']+'-01-01'), format_yyyymmdd)
            description     = b['volumeInfo'].get('description', ' ')
            page_count      = b['volumeInfo'].get('pageCount', ' ')
            categories      = " ".join (b['volumeInfo'].get('categories', [' ']))
            thumbnail_url   = b['volumeInfo']['imageLinks']['thumbnail']
            print ("*******\n",  b['id'],title,author, published_date, description, page_count, categories, thumbnail_url,"/n/n")
            r=Book(title = title, 
                author = author, 
                published_date = published_date, 
                page_count = page_count,
                categories = categories,
                thumbnail_url=thumbnail_url
                )
            r.save()
        except:
            print ("Incomplete data go to the next record")
            continue

