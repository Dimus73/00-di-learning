import json
with open('data.json','r') as f:
    data=json.load(f)
data_dic={"data":data}
data_dic={'data':data}
context={}
context['family_id']=1
context['animals_name']= [f['name'] for f in data_dic['data']['animals'] if int(f['family']) == int(context['family_id'])]

print(data_dic['data']['animals'][0])
print(context)