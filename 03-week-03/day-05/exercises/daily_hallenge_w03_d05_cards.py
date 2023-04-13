import random


class Card():
    def __init__(self, suit, value) -> None:
        self.__suit = suit
        self.__value = value

    def get_name(self):
        return (self.__suit+':'+self.__value)


class Deck():
    suit = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
    value = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

    def __init__(self) -> None:
        self.cards_list = [Card(s, v) for s in self.suit for v in self.value]
    def print_deck(self):
        print("".join([p.get_name()+'\n' for p in self.cards_list]))
        print(f"Total {len(self.cards_list)} cards")
    def shuffle(self):
        card_list=[p.get_name() for p in self.cards_list]
        cards_in_deck=sum([s+':'+v in card_list for s in self.suit for v in self.value])
        if cards_in_deck == 52:
            random.shuffle(self.cards_list)
        else:
            print(f"For some unknown reason, there are not enough cards in the deck{cards_in_deck}")
    def deal(self):
        return (self.cards_list.pop().get_name())
a=Deck()
a.print_deck()
a.shuffle()
a.print_deck()
print(f"\n********\n{a.deal()}\n********\n")
print(f"\n********\n{a.deal()}\n********\n")
print(f"\n********\n{a.deal()}\n********\n")
print(f"\n********\n{a.deal()}\n********\n")
a.print_deck()
