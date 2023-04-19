from menu_item import MenuItem
 

def show_user_menu():
    ch = " "
    while not ch in ['a','d','v','u','x']:
        print('***Menue***')
        print('(a) Add an item')
        print('(d) Delete an item')
        print('(u) Change price')
        print('(v) View the menu')
        print('(x) Exit')
        ch=input("Select your choice: ")
    return (ch)


def show_restaurant_menu(menu):
    print (f"{'Item':>20} {'price':<10}")
    for p in menu:
        print(f"{p.name:>20}:{p.price:<10}")


def add_item_to_menu(menu):
    name = 1
    price = " "
    while not (type(price) == int and type(name) == str):
        name, price = input(
            "Enter a name and price. Format (name, price): ").split(',')
        # print (type(name),name,type(price),price)
        try:
            price = int(price)
        except ValueError:
            price = " "
    menu.append(MenuItem(name,price))
    if menu[len(menu)-1].save():
        print("Item added successfully")
    else:
        print("The dish is already on the menu.")

def update_item_from_menu(menu):
    name = 1
    price = " "
    while not (type(price) == int and type(name) == str):
        name, price = input(
            "Enter a name and price. Format (name, price): ").split(',')
        try:
            price = int(price)
        except ValueError:
            price = " "
    for p in menu:
        if p.name == name:
            p.price = price
            p.update()
            print("Item update successfully")
            break
        else:
            print("The dish is not in the menu.")
            break
    
def remove_item_from_menu(menu):
    name=input("Enter a name of an item: ")
    for k,p in enumerate(menu):
        if p.name == name:
            p.delete()
            menu.pop(k)
            print("Item deleted successfully")
            break
        else:
            print("There is no menu item with that name")
            break



menu_list=[]
#Set connection to Data base
MenuItem.set_db_connection(
        'localhost', 'dmitryprigozhin', '', 'exer-w04-d04', 'items')

#Load data from base
menu=MenuItem.load_data()

#Set up menu list (on data from data base) 
for p in menu:
    menu_list.append(MenuItem(p[0],p[1]))

ch = ' '
while ch != 'x':
    ch = show_user_menu()
    if ch == 'a':
        add_item_to_menu(menu_list)
    elif ch == 'd':
        remove_item_from_menu(menu_list)
    elif ch == 'u':
        update_item_from_menu(menu_list)
    elif ch == 'v':
        show_restaurant_menu(menu_list)
exit()
