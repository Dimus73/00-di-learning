from copy import deepcopy


class XO_game:
    play_field = [['', '', ''], ['', '', ''], ['', '', '']]
    current_player = 'x'

    def __init__(self, game_name) -> None:
        self.game_name = game_name

    def player_input(self):
        print(f"Player '{self.current_player}'")
        pos = ''
        while not pos:
            pos = input(
                "Enter your coordinates for your move. (Format: line/column):")
            x, y = tuple(pos.split('/'))
            x = int(x)
            y = int(y)

            if x > 3 or y > 3:
                print('Coordinates cannot be greater than 3.\nPlease try again')
                pos = ''
            if self.play_field[y-1][x-1]:
                print('Choose an empty position to move.\nPlease try again')
                pos = ''
        self.play_field[y-1][x-1] = self.current_player
        self.current_player = 'o' if self.current_player == 'x' else 'x'
        print(f"X={x}  Y={y}")

    def field_not_full(self):
        if ("" in [ n for a in self.play_field for n in a]):
            print ("No winner!")
            return False

    def check_win(self):
        local_field = self.play_field[::]
        local_field = [p.copy() for p in self.play_field]
        local_field.insert(0, ['', '', ''])
        local_field.append(['', '', ''])
        for p in local_field:
            p.insert(0, '')
            p.append('')
        for y in range(1, 4):
            for x in range(1, 4):
                if local_field[x][y] != '' and ((local_field[x][y] == local_field[x-1][y-1] and local_field[x][y] == local_field[x+1][y+1])
                                                or (local_field[x][y] == local_field[x+1][y-1] and local_field[x][y] == local_field[x-1][y+1])
                                                or (local_field[x][y] == local_field[x][y-1] and local_field[x][y] == local_field[x][y+1])
                                                or (local_field[x][y] == local_field[x+1][y] and local_field[x][y] == local_field[x-1][y])):
                    print('Winner')
                    return local_field[x][y]
        return ('z')

    def display_board(self):
        data_2 = deepcopy(self.play_field)
        for col in range(len(data_2[0])):
                for row in range(len(data_2)):
                    if data_2[row][col] == '':
                        data_2[row][col] = ' '
        print(f"""
					+  _ _ _  +\n
					+ |{data_2[0][0]}|{data_2[0][1]}|{data_2[0][2]}| +\n
					+ |{data_2[1][0]}|{data_2[1][1]}|{data_2[1][2]}| +\n
					+ |{data_2[2][0]}|{data_2[2][1]}|{data_2[2][2]}| +\n
					+  - - -  +\n""")




game1 = XO_game("First-game")
game1.display_board()
while game1.field_not_full() and game1.check_win()=='z':
  game1.player_input()
  game1.display_board()



