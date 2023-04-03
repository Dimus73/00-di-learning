from exercises_xp_w03_d02 import Dog

class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False) -> None:
        super().__init__(name, age, weight)
        self.trained=trained
        
				
    # def train(self):
    #     self.

dog4=Dog('Name4',3,10)
