import json
from info.models import *
# from models import *

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

def get_data(model_name):
    model=globals()[model_name]
    fild_list=[f.name for f in model._meta.get_fields()]
    print(fild_list)

get_data('Animals')