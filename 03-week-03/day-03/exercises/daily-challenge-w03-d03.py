import pygame
from sys import exit
from random import randint


class N_circle():
    def __init__(self, radius=0, diameter=0) -> None:
        if radius == 0:
            self.radius = diameter/2
        else:
            self.radius = radius

    def area(self):
        return (3.14*self.radius**2)

    def __add__(self, add_circle):
        return (self.area()+add_circle.area())

    def compare(self, circle2):
        if self.area() > circle2.area():
            print("I'm bigger than another circle")
        elif self.area() == circle2.area():
            print("We are equal")
        else:
            print("I am smaller than another circle")

    def draw_c(self):

        pygame.init()
        display = pygame.display.set_mode((600, 600))
        display.fill((255, 255, 255))
        pygame.draw.circle(display, (0, 255, 0), [300, 300], self.radius, 3)
        while True:
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    pygame.quit()
                    exit()
            pygame.display.update()


c1 = N_circle(20)
c2 = N_circle(10)
c3 = N_circle(30)
c4 = N_circle(40)
c5 = N_circle(20)

print(c1.area(), c2.area())
c1.compare(c5)

cir_list = [c1, c2, c3, c4, c5]
for s in cir_list:
    print(s.area())

cir_list_sort = sorted(cir_list, key=lambda x: x.area())

for s in cir_list_sort:
    print(s.area())

c4.draw_c()

