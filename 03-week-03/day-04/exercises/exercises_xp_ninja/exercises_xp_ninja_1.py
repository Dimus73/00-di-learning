import json

def rule_1_2(phrase:str):
    rule=True
    phrase_list=phrase.split()
    rule = False if phrase_list[0][0] != 'V' else rule
    print(phrase_list[0][0], phrase_list[0][0] != 'V')
    for k,v in enumerate(phrase_list):
        if len(v)>3:
            rule = False if not phrase_list[k][0].isupper() else rule
        else:
            rule = False if not phrase_list[k].islower() else rule
    return rule

def rule_3(phrase:str):
    return False if phrase.count('e')<2 else True    

def rule_4(price:float):
    return round(price%1,2)==0.14

name=" "
price=0
heart=""
print_str=''

dish_menu={'items':[]}
while name!='q':
    valid=True
    try:
        name,price = input("Enter the name of the dish and its cost (name, price). When finished, enter q,q: ").split(',')
        price=float(price)
    except (TypeError, ValueError, IndexError):
        price=0
        continue
    if not rule_1_2(name):
        print("Each word in the item name should begin with an uppercase letter and because it’s Valentines Day, the first word needs to begin with a capital “V”. ")
        print("If the name contains connection words, they should begin in lowercase. Example: Vegetable Soup of Valentines-day")
        valid=False
    if not rule_3(name):
        print("The name of the meal needs to contain at least two “e”, and no numbers.")
        valid=False
    if not rule_4(price):
        print("The price needs to match the following pattern: XX,14, where X are numbers")
        valid=False
    if valid:
        print("Dish is Ok")
        dish_menu['items'].append({'name':name,'price':price})
        print (dish_menu)
with open('valentin_menue.json','w') as f:
    json.dump(dish_menu,f,indent=2)
with open('heart.txt','r') as f:
    heart=f.read()
menu_str = heart + '\n\n'
menu_str += f"{'Name':>20}{'Price':>10}\n"
menu_str += "".join(
            [f"{x['name']:>20}{x['price']:>10}$\n" for x in dish_menu['items']])
with open('menue.txt','w') as f:
    f.write(menu_str)

    