# --------- Exercise 01 ------------
print("\nExercise 01")
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
my_dict=dict(zip(keys,values))
print (my_dict)

# --------- Exercise 02 ------------
print("\nExercise 02")
total_price=0
pay_members=0
member=' '
member_dict=dict()
print(member_dict)
while member!='end':
    if member!=' ':
        member_list=list(member.split(','))
        print(member_list)
        member_dict[member_list[0]]=int(member_list[1])
    member=input("Enter the name and age separated by a comma (,). To complete, enter 'end': ")
for p in member_dict.keys():
    if member_dict[p]>=3 and member_dict[p]<=12:
        total_price+=10
        pay_members+=1
    elif member_dict[p]>12:
        total_price+=15
        pay_members+=1
print(f"You have to pay for {pay_members} family members. The total cost of {total_price}")        
    

# --------- Exercise 03 ------------
print("\nExercise 03")
brand={
'name': 'Zara', 
'creation_date': 1975, 
'creator_name': ['Amancio', 'Ortega', 'Gaona'], 
'type_of_clothes': ['men', 'women', 'children', 'home'], 
'international_competitors': ['Gap', 'H&M', 'Benetton'], 
'number_stores': 7000, 
'major_color': 
    {'France': ['blue'], 
    'Spain': ['red'], 
    'US': ['pink', 'green']}    
}

brand['number_stores']=2

print (f"Zaras clients are :{brand['type_of_clothes']} ")

brand['country_creation']="Spain"
print(brand)

if 'international_competitors' in brand.keys():
    brand['international_competitors'].append('Desigual')
print(brand)
del brand['creation_date']
print('international_competitors: ', brand['international_competitors'])
print('major color US: ', brand['major_color']['US'])
print("Print the amount of key value pairs: ", len(brand.keys()))
print("Print the keys of the dictionary: ", brand.keys())
more_on_zara={
    'creation_date':1975,
    'number_stores':10000
}
brand.update(more_on_zara)
print(brand)
print(brand['number_stores'])


# --------- Exercise 04 ------------
print("\nExercise 04")
my_dict={}
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
i=0
for p in users:
    my_dict[p]=i
    i+=1
print(my_dict)

my_dict.clear()
i=0
for p in users:
    my_dict[i]=p
    i+=1
print(my_dict)

my_dict.clear()
i=0
for p in sorted(users):
    my_dict[p]=i
    i+=1
print(my_dict)

my_dict.clear()
i=0
for p in users:
    if 'i' in p:
        my_dict[p]=i
        i+=1
print(my_dict)

my_dict.clear()
i=0
for p in users:
    if  str(p[0]).lower() in ['m','p']:
        my_dict[p]=i
        i+=1
print(my_dict)

