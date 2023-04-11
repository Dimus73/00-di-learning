from menu_manager import MenuManager


def show_user_menu():
    ch = " "
    while not ch in ['a','d','v','x']:
        print('***Menue***')
        print('(a) Add an item')
        print('(d) Delete an item')
        print('(v) View the menu')
        print('(x) Exit')
        ch=input("Select your choice: ")
    return (ch)


def show_restaurant_menu(menu):
    print(menu)


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
    if menu.add_item(name, price):
        print("Item added successfully")
    else:
        print("The dish is already on the menu. Its price will be changed")


def remove_item_from_menu(menu):
    name=input("Enter a name of an item: ")
    if menu.remove_item(name):
        print("Item deleted successfully")
    else:
        print("There is no menu item with that name")


a = MenuManager('restaurant_menu.json')
ch = ' '
while ch != 'x':
    ch = show_user_menu()
    if ch == 'a':
        add_item_to_menu(a)
    elif ch == 'd':
        remove_item_from_menu(a)
    elif ch == 'v':
        show_restaurant_menu(a)
a.save_to_file()
exit()
# a.add_item('Beef', 200)
# a.add_item('Beef2-2', 250)
# a.add_item('Beef3-3', 300)
# a.add_item('BeefXL-3', 400)
# a.remove_item('Beef')
# a.remove_item("Beef stew")
# print(a)
# a.save_to_file()
# add_item_to_menu(a)
