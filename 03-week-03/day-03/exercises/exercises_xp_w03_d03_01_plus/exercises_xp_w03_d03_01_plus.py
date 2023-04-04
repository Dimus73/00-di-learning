import random
import string
import datetime
from faker import Faker
# --------- Exercise 01 ------------
print("\nExercise 01")
from func import summ_fnc
# import "func"

print( "text" , summ_fnc(5,6) )

# --------- Exercise 02 ------------
print("\nExercise 02")
def my_func(numb):
    a=random.randint(1,100)
    print (a,numb)
    if a == numb:
        print ("The numbers matched")
        return True

while not my_func(random.randint(1,100)):
    pass
    
# --------- Exercise 03 ------------
print("\nExercise 03")
my_abc=string.ascii_letters
my_string=''
for i in range(5):
    my_string+=my_abc[random.randint(1,len(my_abc))]
print (my_string)

# --------- Exercise 04 ------------
print("\nExercise 04")
print(datetime.datetime.now())

# --------- Exercise 05 ------------
print("\nExercise 05")
ny_date='2023-01-01'
ny_date=ny_date.split("-")
date1=datetime.date(int(ny_date[0]),int(ny_date[1]),int(ny_date[2]))
days=datetime.date.today()-date1
print(days)

# --------- Exercise 06 ------------
print("\nExercise 06")
ny_date='1973-03-29'
ny_date=ny_date.split("-")
date1=datetime.date(int(ny_date[0]),int(ny_date[1]),int(ny_date[2]))
days=datetime.date.today()-date1
print("Minutes lived: ", int(days.total_seconds()/60))

# --------- Exercise 07 ------------
print("\nExercise 07")
to_date=datetime.date.today()
print(f"To date: {to_date}")
ny_date='2023-04-06'
ny_date=ny_date.split("-")
h_date=datetime.date(int(ny_date[0]),int(ny_date[1]),int(ny_date[2]))
days=h_date-to_date
print(days)

# --------- Exercise 09 ------------
print("\nExercise 09")
fake=Faker()
user_list=[]
for i in range(5):
    name=fake.name()
    addres=fake.address()
    language=fake.language_code()
    user_list.append({'name':name, 'addres':addres, 'language':language})
print (user_list)


