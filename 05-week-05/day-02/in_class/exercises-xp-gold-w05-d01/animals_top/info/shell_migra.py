import json
from info.models import *
# from models import *

def load_data_from_file(model_name):
    file_name=model_name+'.json'
    with open(file_name,'r') as f:
        data=json.load(f)
    return data

def load_data_to_model(model_name, d_dict):
    model=globals()[model_name]
    fild_list=[f.name for f in model._meta.get_fields()]
    for p in d_dict['animals']:
        # a =','.join([k + '='+ str(v) for k,v in p.items() if k != 'id'])
        a={}
        for k,v in p.items():
            if k == 'id':
                continue
            if k == "family":
                v=Families.objects.get(pk=v)
            a[k]=v

        # a ={ k:v for k,v in p.items() if k != 'id' }
        print("Это параметры", a)
        rec=model(**a)
        rec.save()



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

def load_data(model_name):
    data_dic=load_data_from_file(model_name)
    load_data_to_model(model_name, data_dic)

# get_data('Animals')
# get_data('Families')


