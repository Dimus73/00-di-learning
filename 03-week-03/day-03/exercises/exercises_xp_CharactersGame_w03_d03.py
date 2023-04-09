class Character():
    characters_list=[]
    def __init__(self, name, life=20, attack=10) -> None:
        self.__name = name
        self.__life = life
        self.__attack = attack
        Character.characters_list.append(self)

    @property
    def name(self):
        return (self.__name)

    @property
    def life(self):
        return (self.__life)

    @property
    def attack(self):
        return (self.__attack)

    @name.setter
    def name(self, name):
        self.__name = name

    @life.setter
    def life(self, life):
        self.__life = life

    @attack.setter
    def attack(self, attack):
        self.__attack = attack

    def basic_attack(self, another_player, attack):
        another_player.life -= attack


class Druid(Character):
    def __init__(self, name, life=20, attack=10) -> None:
        super().__init__(name, life, attack)
        print (f"I am Druid. My name is '{self.name}'")
    # def __init__(self) -> None:
    #     print (f"I am Druid. My name is {self.name}")

    def meditate(self):
        self.life += 10
        self.attack -= 2

    def animal_help(self):
        self.attack += 5

    def fight(self, another_player):
        self.basic_attack(another_player, 0.75*self.life+0.75*self.attack)

class Warrior(Character):
    def brawl(self, another_player):
        self.basic_attack(another_player, 2*self.attack)
        self.life+=0.5*self.attack
    def train(self):
        self.life+=2
        self.attack+=2
    def roar(self, anothe_player):
        anothe_player.attack-=2
        
class Mage(Character):
    def curse(self, another_player):
        another_player.life-=2
    def summon(self):
        self.attack+=3
    def cast_spell(self, another_player):
        another_player.life-=(another_player.attack/another_player.life)
    
def star_line_decorator(fn):
    def decor(numb_of_lines=1, *args, **kwargs):
        for i in range(numb_of_lines):
            print ("***************************************")
        fn(*args, **kwargs)
        for i in range(numb_of_lines):
            print ("***************************************")
        print("\n")
    return(decor)
        

@star_line_decorator   
def print_player_status():
    for i in Character.characters_list:
        print(f"Player: {i.name:>10} have Life:{i.life:>7.1f},  Attack:{i.attack:>7.1f}")

a_warrior = Warrior('Pasha')
b_druid = Druid('Monstr')
c_mage=Mage('Andrey')



print_player_status(2)

b_druid.animal_help()
b_druid.meditate()
b_druid.fight(a_warrior)
a_warrior.brawl(b_druid)
a_warrior.train()

print_player_status(2)

a_warrior.roar(c_mage)
c_mage.curse(b_druid)
c_mage.summon()
c_mage.cast_spell(a_warrior)

print_player_status()
