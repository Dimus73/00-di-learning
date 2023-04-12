import random
import json

class Character():
    @staticmethod
    def dice_res():
        dice_list=sorted(list([random.randint(1,6) for i in range(4)]),reverse=True)
        dice_list.pop()
        return sum(dice_list)
        
    def __init__(self, name, age) -> None:
        self.character={
				'Name':name,
        'Age':age,
        'Strength':self.dice_res(),
        'Dexterity':self.dice_res(),
        'Constitution':self.dice_res(),
        'Intelligence':self.dice_res(),
        'Wisdom':self.dice_res(),
        'Charisma':self.dice_res()}
        
class Game():
    def __init__(self) -> None:
        self.players_list=[]
        self.player_numb=int(input("How many players are playing?: "))
        for i in range(self.player_numb):
            name, age=input("Enter player name and age. Format: name,age: ").split(',')
            self.players_list.append(Character(name,age))
    def save_to_json(self):
        players_dict={'players':[]}
        players_dict['players']=[x.character for x in self.players_list]
        with open('Players.json','w') as f:
            json.dump(players_dict,f,indent=2)
    def save_to_txt(self):
        out_string=''
        for i in range(self.player_numb):
            out_string+=f"\n\nPlayer {i+1}\n"
            out_string += "\n".join([f"{k:>20}:{v}" for k,v in self.players_list[i].character.items()])
        print (out_string)
        with open('Players.txt','w') as f:
            f.write(out_string)
            
a=Game()
a.save_to_json()
a.save_to_txt()