# --------- Challenge 1 ------------
print("\nExercise 01")
my_fav_numbers={1,3,7,11}
my_fav_numbers.add(21)
my_fav_numbers.add(9)
print(my_fav_numbers)
my_fav_numbers.discard(max(my_fav_numbers))
print(my_fav_numbers)
friend_fav_numbers={2,6,8}
our_fav_numbers=my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)


# --------- Challenge 2 ------------
print("\nExercise 02")
print("It is not possible")


# --------- Challenge 3 ------------
print("\nExercise 03")
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0,"Apples")
print(basket)
print("In basket ther are/is {} apple(s)".format(basket.count("Apples")))


# --------- Challenge 4 ------------
print("\nExercise 04")
list_float=[]
list_int_and_float=[]
i=1.5
while i<=5:
    list_float.append(i)
    if i%1>0:
        list_int_and_float.append(i)
    else:
        list_int_and_float.append(int(i))
    i+=0.5
print ("Var1:" ,list_float)
print ("Var2:" ,list_int_and_float)


# --------- Challenge 5 ------------
print("\nExercise 05")
for i in range(1,21):
    print (i)
for i in range(1,21):
    if i%2>0:
           print(i)

# --------- Challenge 6 ------------
print("\nExercise 06")
enter_name=""
my_name='Dima'
while enter_name != my_name:
     enter_name=input("Enter your name: ")
print('Yes')

# --------- Challenge 7 ------------
print("\nExercise 07")
favorites_fruit=input("Enter fruit(s). Separate the fruits with a single space:")
fruit_list=favorites_fruit.split(' ')
print(fruit_list)
any_fruit=input("Input a name of any fruit: ")
if any_fruit in favorites_fruit:
     print("You chose one of your favorite fruits! Enjoy!")
else:
     print("You chose a new fruit. I hope you enjoy")

    
# --------- Challenge 8 ------------
print("\nExercise 08")
topping=' '
toppings_list=[]
while topping != 'quit':
     if topping != ' ':
          toppings_list.append(topping)
     topping=input("Enter topping: ")
print("You have selected the following toppings:", toppings_list)
print("The cost of your pizza will be: ", (10+len(toppings_list)*2.5))
     

# --------- Challenge 9 family------------
print("\nExercise 09 family")
age_list=[]
price_list=[]
total_pice=0
age_string=input("Enter the age of all family members. Separate the age with a space.: ")
age_list=age_string.split(" ")
for p in range(0,len(age_list)):
     age_list[p]=int(age_list[p])
     if age_list[p]<3:
         price_list.append(0)
     elif age_list[p]>=3 and age_list[p]<=12:
         price_list.append(10)
     else:
         price_list.append(15)
for p in price_list:
		total_pice+=p
print("List of your ticket prices:", price_list)
print("The total ticket price will be:", total_pice)


# --------- Challenge 9 group of teenagers------------
# I assume that all names are different. Otherwise, it is not clear which of the teenagers with the same names will go to the cinema
print("\nExercise 09 group of teenagers")
name_list=["Kate","Nik","Olesia","Dima","Pasha","Dasha"]
approved_name_list=[]
age=0
for name in name_list:
       age=int(input(f"{name} enter your age: "))
       if age>=16 and age<=21:
          approved_name_list.append(name)
print ("List of teenagers with appropriate age:", approved_name_list)

# --------- Challenge 10 family------------
print("\nExercise 10 family")
sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]
finished_sandwiches=[]
for p in sandwich_orders:
    finished_sandwiches.append(p.lower())
for p in finished_sandwiches:
    print(f"I made your {p}")


# --------- Challenge 11 family------------
print("\nExercise 11 family")
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Pastrami sandwich", "Sabih sandwich", "Pastrami sandwich", "Pastrami sandwich"]
print("Deli has run out of pastrami,")
removable_sandwich="Pastrami sandwich"
while removable_sandwich in sandwich_orders:
    sandwich_orders.remove(removable_sandwich)
print("New list :", sandwich_orders)
