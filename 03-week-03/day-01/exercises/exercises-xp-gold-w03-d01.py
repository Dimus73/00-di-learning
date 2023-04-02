import random

# # --------- Exercise 01 ------------
print("\nExercise 01")
class Circle:
    rad = 0

    def __init__(self, rad) -> None:
        self.rad = rad
    def perimeter(self):
        return 2*3.14*self.rad
    def area(self):
        return self.rad**2*3.14
    
circle1=Circle(1)
print ("Perimeter c1: ", circle1.perimeter() , "area: ", circle1.area())

# # --------- Exercise 02 ------------
print("\nExercise 02")
class MyList:
    my_list=[]
    def __init__(self, my_list) -> None:
        self.my_list=my_list[:]
    def reversed(self):
        return list(self.my_list[::-1])
    def sorted(self):
        return sorted(self.my_list)
    def rnd_list(self):
        temp_list=[random.randint(1,100) for n in self.my_list]
        return temp_list
        
test_list=MyList(list("Qjfk"))
print(test_list.reversed())
print(test_list.sorted())
print(test_list.rnd_list())

