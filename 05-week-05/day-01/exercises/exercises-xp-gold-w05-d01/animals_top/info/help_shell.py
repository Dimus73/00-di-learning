import json
from info.models import *
def load_file():
    with open('data.json','r') as f:
        data=json.load(f)
    return data

def load_families(d_list):
    for p in d_list:
        a=Families(name=p['name'])
        a.save()
        
def load_animal(d_list):
    for p in d_list:
        a=Animals(name=p['name'], legs=p['legs'], weight=p['weight'], height=p['height'], speed=p['speed'],family_id=p['family'])
        a.save()