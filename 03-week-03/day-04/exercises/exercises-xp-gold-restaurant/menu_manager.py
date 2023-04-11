import json


class MenuManager():
    def __str__(self) -> str:
        menu_str = f"{'Name':>20}{'Price':>10}\n"
        menu_str += "".join(
            [f"{x['name']:>20}{x['price']:>10}$\n" for x in self.__menu_items['items']])
        return menu_str

    def __init__(self, menu_file_name) -> None:
        self.menu_file_name = menu_file_name
        with open(menu_file_name, 'r') as f:
            self.__menu_items = json.load(f)

    def add_item(self, name, price):
        i = [i for i, x in enumerate(
            self.__menu_items['items']) if x['name'] == name]
        if i:
            print("The dish is already on the menu. Its price will be changed")
            self.__menu_items['items'][i[0]]['price']=price
        else:
            self.__menu_items['items'].append({'name': name, 'price': price})

    def remove_item(self, name):
        i = [i for i, x in enumerate(
            self.__menu_items['items']) if x['name'] == name]
        if i:
            self.__menu_items['items'].pop(i[0])
            print("Item deleted successfully")
        else:
            print("There is no menu item with that name")
    def save_to_file(self):
        with open(self.menu_file_name, 'w') as f:
            json.dump(self.__menu_items,f,indent=2)


if __name__ == "__main__":
    a = MenuManager('restaurant_menu.json')
    a.add_item('Beef', 200)
    a.add_item('Beef2', 250)
    a.add_item('Beef3', 300)
    a.add_item('BeefXL', 400)
    a.remove_item('Beef')
    a.remove_item("Beef stew")
    print(a)
    a.save_to_file()
