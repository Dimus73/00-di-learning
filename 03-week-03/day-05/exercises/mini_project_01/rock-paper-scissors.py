# from game import Game
import game
def get_user_menu_choice():
    choice=''
    menu_string="Menu:\n(g)Play a new game\n(s)Show scores\n(q,x)Exit\n:"
    while choice not in ['q','x','g','s']:
        choice=input(menu_string)
    return choice
def print_results(results):
    print_string=f"****\nGame Results:\nYou won {results['win']}\nYou lost {results['loss']}\nYou drew {results['draw']}\n****"
    print(print_string)

def main():
    choice=''
    result={'win': 0,'loss': 0,'draw': 0}
    while True:
        choice=get_user_menu_choice()
        if choice in ['q','x']:
            break
        elif choice == 'g':
            a=game.Game()
            result[a.play()]+=1
        elif choice == 's':
            print_results(result)
    print_results(result)
    print("Thank you for playing!")

main()