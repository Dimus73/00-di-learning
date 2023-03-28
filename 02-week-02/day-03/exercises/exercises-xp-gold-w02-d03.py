# --------- Exercise 01 ------------
print("\nExercise 01")
birthdays={
    'Kate':'2000/03/18',
    'Petia':'1989/04/23',
    'Jone':'2010/08/02',
    'Marina':'2008/02/17',
    'Kirill':'2001/11/12'
}
p_name=input("What is your name?")
p_date=input("Your birsday?")
birthdays[p_name]=p_date
print("You can look up the birthdays of the people in the list!")
print(birthdays.keys())
name=input("Whose birthday do you want to know?")
if name in birthdays.keys():
    print(birthdays[name])
else:
    print(f"Sorry, we don’t have the birthday information for {name}")

# --------- Exercise 02 ------------
print("\nExercise 02")
total_summ=0
items = {
    "banana": {"price": 4 , "stock":10},
    "apple": {"price": 2, "stock":5},
    "orange": {"price": 1.5 , "stock":24},
    "pear": {"price": 3 , "stock":1}
}
for p in items.keys():
    total_summ+=items[p]['price']*items[p]['stock']
print(total_summ)