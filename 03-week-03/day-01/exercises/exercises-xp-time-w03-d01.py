# # --------- Exercise 01 ------------
print("\nExercise 01")
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age


cats = [Cat('Vasia', 3), Cat('Masha', 4), Cat('Murka', 5)]
print([p.name for p in cats])

# # --------- Exercise 02 ------------
print("\nExercise 02")


class Dog:
    name = ''
    height = 0

    def __init__(self, name, height) -> None:
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jums {self.height*2}cm.")


davids_dog = Dog("Rex", 50)
sarahs_dog = Dog("Teacup", 20)

print(f"Dog name:{davids_dog.name}, it's height {davids_dog.height}")
davids_dog.bark()
davids_dog.jump()

print(f"Dog name:{sarahs_dog.name}, it's height {sarahs_dog.height}")
sarahs_dog.bark()
sarahs_dog.jump()

print(davids_dog.name if davids_dog.height >
      sarahs_dog.height else sarahs_dog.name)

# # --------- Exercise 03 ------------
print("\nExercise 03")
class Song():
    lyrics = ""
    def __init__(self, lyrics) -> None:
          self.lyrics = lyrics
    def sing_me_a_song(self):
        print("\n".join(map(str,self.lyrics)))

stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()

# # --------- Exercise 04 ------------
print("\nExercise 04")
class Zoo:
    def __init__(self, name) -> None:
          self.name=name
          self.animals=[]
          
    def add_animal(self, animal):
        if not animal in self.animals:
              self.animals.append(animal)
              
    def get_animals(self):
        print(self.animals)
        
    def sell_animal(self, animal):
        if animal in self.animals:
              self.animals.pop(self.animals.index(animal))
        
    def sort_animals(self):
        self.sort_animals=[[]]
        self.animals.sort()
        let=0
        for i,p in enumerate(self.animals):
            if p[0]!= self.animals[(i-1) if i>0 else 0][0]:
                let+=1
                self.sort_animals.append([])
            self.sort_animals[let].append(p)
        print (self.sort_animals)
        
    def get_groups(self):
        print("group:")
        list(map(print, self.sort_animals))
            

new_zoo=Zoo("Moscow")
new_zoo.add_animal("Baboon")
new_zoo.add_animal("Cougar")
new_zoo.add_animal("Cat")
new_zoo.add_animal("Bear")
new_zoo.add_animal("Ape")
new_zoo.add_animal("Emu")
new_zoo.add_animal("Eel")
new_zoo.add_animal("Giraffe")

new_zoo.get_animals()
new_zoo.sell_animal("Ape")
new_zoo.get_animals()
new_zoo.sort_animals()
new_zoo.get_groups()


        
    
