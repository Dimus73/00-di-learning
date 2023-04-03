import random
from exercises_xp_w03_d02 import Dog

class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False) -> None:
        super().__init__(name, age, weight)
        self.trained=trained
        
    def train(self):
        self.bark()
        self.trained=True

    def play(self, *args):
        dog_list=[n.name for n in args]
        dog_list.append(self.name)
        dog_list=", ".join(dog_list)
        print(f"{dog_list} all play together")

    def do_a_trick(self):
        if self.trained:
            trick_list=['does a barrel roll','stands on his back legs','shakes your hand','plays dead']
            trick=random.choice(trick_list)
            print(f"{self.name} {trick}")

dog1 = PetDog('Name1', 3, 10)
dog2 = PetDog('Name2', 3, 11)
dog3 = PetDog('Name3', 3, 14)
dog4 = PetDog('Name4', 5, 10)

dog4.do_a_trick()
dog4.train()
dog4.do_a_trick()
dog4.play(dog1,dog2,dog3)


