from menu_manager import MenuManager

a = MenuManager('restaurant_menu.json')
a.add_item('Beef', 200)
a.add_item('Beef2-2', 250)
a.add_item('Beef3-3', 300)
a.add_item('BeefXL-3', 400)
a.remove_item('Beef')
a.remove_item("Beef stew")
print(a)
a.save_to_file()


