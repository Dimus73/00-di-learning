class Family:
    def __init__(self) -> None:
        self.members_key = ['name', 'age', 'gender', 'is_child']
        self.members = [
            {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
            {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
        ]
        self.last_name = 'Marvell'

    def born(self, **kwarsg):
        new_memb = dict(k for k in kwarsg.items())
        if 'name' in new_memb.keys():
            print("Congratulations on the birth of a new family member: ",
                  new_memb['name'])
            self.members.append(new_memb)
            print(self.members)
        else:
            print("Can't find newborn's name")

    def is_18(self, name):
        return ([n['age'] for n in self.members if n['name'] == name][0] > 18)

    def family_presentation(self):
        print(f"Member's of {self.last_name}: ")
        for p in self.members:
            print(p['name'])


class TheIncredibles(Family):
    def __init__(self) -> None:
        super().__init__()
        self.members = [
            {'name': 'Michael', 'age': 35, 'gender': 'Male',
                'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
            {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False,
                'power': 'read minds', 'incredible_name': 'SuperWoman'}
        ]
    def use_power(self, name):
        if self.is_18(name):
            d=[n['power'] for n in self.members if n['name'] == name]
            print ([n['power'] for n in self.members if n['name'] == name][0])

    def family_presentation(self):
        super().family_presentation()
        print(f"Member's of {self.last_name}: ")
        for p in self.members:
            print(f"{p['name']} + {p['power']}" )

# # --------- Exercise 01 ------------
print("\nExercise 01")
a = Family()
a.born(name='mikle', age=20, gender='Male')
print(a.is_18('Sarah'))
a.family_presentation()

# # --------- Exercise 02 ------------
print("\nExercise 02")
b=TheIncredibles()
b.use_power('Sarah')
b.family_presentation()
b.born(name='Baby Jack', age=1, gender='Male',power='Unknown Power')
b.family_presentation()
