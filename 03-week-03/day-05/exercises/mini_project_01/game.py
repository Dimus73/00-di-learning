import random

class Game():
    def __init__(self) -> None:
        self.variant = {'rp': 'loss',
                        'rs': 'win',
                        'pr': 'win',
                        'ps': 'loss',
                        'sr': 'loss',
                        'sp': 'win'}
        self.items = {'r':"rock",'p':'paper', 's':'scissors'}

    def __get_user_item(self):
        choice = ""
        # choices={'r':"rock",'p':'paper', 's':'scissors'}
        while choice not in ['r', 'p', 's']:
            choice = input("Select (r)ock (p)aper (s)cissors: ")
        return choice

    def __get_computer_item(self):
        return ['r', 'p', 's'][random.randint(0, 2)]

    def __get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return 'draw'
        else:
            return self.variant[user_item+computer_item]

    def play(self):
        user_item = self.__get_user_item()
        computer_item = self.__get_computer_item()
        resalt = self.__get_game_result(user_item, computer_item)
        print(
            f"You selected {self.items[user_item]}. The computer selected {self.items[computer_item]}. You {resalt}")
        return resalt
    
if __name__ == "__main__":
  a=Game()
  a.play()
