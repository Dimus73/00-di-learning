if __name__ == '__main__':
    # # --------- Exercise 01 ------------
    print("\nExercise 01")


    class Pets():
        def __init__(self, animals):
            self.animals = animals

        def walk(self):
            for animal in self.animals:
                print(animal.walk())


    class Cat():
        is_lazy = True

        def __init__(self, name, age):
            self.name = name
            self.age = age

        def walk(self):
            return f'{self.name} is just walking around'


    class Bengal(Cat):
        def sing(self, sounds):
            return f'{sounds}'


    class Chartreux(Cat):
        def sing(self, sounds):
            return f'{sounds}'


    class Siamese(Cat):
        def sing(self, sounds):
            return f'{sounds}'


    all_cats = [Bengal('Cat1', 2), Chartreux('Cat2', 4), Siamese('Cat3', 6)]
    sara_pets = Pets(all_cats)
    sara_pets.walk()

    # # --------- Exercise 02 ------------
    print("\nExercise 02")


class Dog():
    def __init__(self, name, age, weight) -> None:
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        print(f"Dog {self.name} is barking")

    def run_speed(self):
        return self.weight/self.age*10

    def fight(self, other_dog):
        a = self.run_speed()*self.weight
        b = other_dog.run_speed()*other_dog.weight
        if (self.run_speed()*self.weight) >= (other_dog.run_speed()*other_dog.weight):
            return (self.name)
        else:
            return (other_dog.name)


if __name__ == '__main__':
    dog1 = Dog('Name1', 3, 10)
    dog2 = Dog('Name2', 3, 11)
    dog3 = Dog('Name3', 3, 14)

    print(
        f"Between the dog {dog1.name} and the dog {dog2.name} the {dog1.fight(dog2)} won!")
    print(
        f"Between the dog {dog2.name} and the dog {dog3.name} the {dog2.fight(dog3)} won!")
    print(
        f"Between the dog {dog3.name} and the dog {dog1.name} the {dog3.fight(dog1)} won!")
