class MenuManager:
    dishes_keys = []
    dishes_value = []
    dishes_list = []

    def __init__(self) -> None:
        self.dishes_keys = ['name', 'price', 'spice_level', 'gluten_inde']
        self.dishes_value = [
            ['Soup', 10, 'B', False],
            ['Hamburger', 15, 'A', True],
            ['Salad', 18, 'A', False],
            ['French Fries', 5, 'C', False],
            ['Beef bourguignon', 25, 'B', True]]
        for p in self.dishes_value:
            self.dishes_list.append(dict(zip(self.dishes_keys, p)))
        print([n['name'] for n in self.dishes_list])

    def add_item(self, name, price, spice, gluten):
        if name not in [n['name'] for n in self.dishes_list]:
            self.dishes_list.append(
                dict(zip(self.dishes_keys, [name, price, spice, gluten])))
        else:
            print('Cudnt add. That dishes is in menu')
            
    def update_item(self, name, price, spice, gluten):
        if name in [n['name'] for n in self.dishes_list]:
            d=[ i for i,n in enumerate(self.dishes_list) if n['name']==name]
            print(d)
            self.dishes_list[d[0]]=dict(zip(self.dishes_keys, [name, price, spice, gluten]))
        else:
            print('Ther is no', name)

    def remove_item(self, name):
        if name in [n['name'] for n in self.dishes_list]:
            d=[ i for i,n in enumerate(self.dishes_list) if n['name']==name]
            print(d)
            self.dishes_list.pop(d[0])
        else:
            print('Ther is no', name)



a = MenuManager()
a.add_item('Steyk', 100, 'C', True)
a.add_item('Steyk', 100, 'C', True)
a.add_item('Steyk', 100, 'C', True)
print(a.dishes_list)
a.update_item('Steyk', 300, 'C', True)
a.update_item('Fish', 500, 'C', True)
print(a.dishes_list)
a.remove_item('Soup')
print(a.dishes_list)
