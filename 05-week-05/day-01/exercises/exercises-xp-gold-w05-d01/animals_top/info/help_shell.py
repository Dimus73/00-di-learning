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
    data={}
    data['animals']=[]
    model=globals()[model_name]
    fild_list=[f.name for f in model._meta.get_fields()]
    print(fild_list)
    records=model.objects.all()
    for r in records:
        an={}
        for f in fild_list:
            if f == 'photo':
                # v=getattr(r,f)
                an[f]=getattr(r,f).url
            elif f == 'family':
                # v=getattr(r,f)
                an[f]=getattr(r,f).pk
            else:
                try:
                    an[f]=getattr(r,f)
                except AttributeError:
                    pass
        data['animals'].append(an)
    print(data)
    file_name=model_name+'.json'
    with open(file_name,'w') as fl:
        json.dump(data,fl ,indent=2)
    ss = json.dumps (data)
    print (ss)

# get_data('Animals')
get_data('Families')
