class Human():
    def __init__(self, id: str, full_name: str, age: int, priority: bool, blood_type: str) -> None:
        self.id = id
        self.full_name = full_name
        self.age = age
        self.priority = priority
        self.blood_type = blood_type
        self.family = []

    def __str__(self) -> str:
        return (self.__repr__())

    def __repr__(self) -> str:
        return (f"(ID: {self.id}      Name: {self.full_name:>20}  Age:{self.age}  {self.priority}  {len(self.family)}")

    def add_family_member(self, person):
        self.family.append(person)
        person.family = self.family


class Queue():
    def __init__(self) -> None:
        self.humans = []

    def add_person(self, person):
        if person.age > 60:
            print(self.humans)
            self.humans = [person]+self.humans[::]
            print(self.humans)
        else:
            self.humans = self.humans[::]+[person]

    def find_in_queue(self, person):
        for k, p in enumerate(self.humans):
            if p.full_name == person:
                return self.humans[k]
        print("Ther is no this person in queue")
        return None

    def swap(self, person1, person2):
        if len(self.humans) > 1:
            k1 = [k for k, v in enumerate(self.humans) if v in [
                person1, person2]]
            if len(k1) == 2:
                t = self.humans[k1[0]]
                self.humans[k1[0]] = self.humans[k1[1]]
                self.humans[k1[1]] = t

    def get_next(self):
        t = self.humans[0]
        self.humans = self.humans[1:]
        return t

    def get_next_blood_type(self, blood_type):
        k1 = [k for k, v in enumerate(
            self.humans) if v.blood_type == blood_type]
        t = self.humans[k1[0]]
        self.humans = self.humans[0:k1[0]]+self.humans[k1[0]+1:]
        return t

    def sort_by_age(self):
        weight_list = [p.age+p.priority*1000 for p in self.humans]
        for a in range(len(weight_list)):
            for b in range(a, len(weight_list)):
                if weight_list[a] < weight_list[b]:
                    t = weight_list[a]
                    weight_list[a] = weight_list[b]
                    weight_list[b] = t
                    t = self.humans[a]
                    self.humans[a] = self.humans[b]
                    self.humans[b] = t

    def rearange_queue(self):
        pass


h1 = Human('123456', 'Mikle Porot', 20, False, 'A')
h2 = Human('123457', 'Jone Smith', 10, False, 'A')
h3 = Human('123458', 'Petr Semenov', 70, True, 'AB')
h4 = Human('123459', 'Marina Tah', 25, False, 'AB')
h5 = Human('123459', 'Juriy Tah', 26, False, 'B')
h6 = Human('123459', 'Pavel Tah', 12, False, 'A')
h_list = [h1, h2, h3, h4, h5, h6]

q = Queue()
for p in h_list:
    q.add_person(p)
print(q.humans)

print(q.find_in_queue("Mikle Pddorot"))
q.swap(h3, h1)
print(q.humans)
print("Next: ", q.get_next())
print(q.humans)
print("Blood: ", q.get_next_blood_type('AB'))
print(q.humans)

h11 = Human('123456', '1Mikle Porot', 21, False, 'A')
h12 = Human('123457', '2Jone Smith', 14, False, 'A')
h13 = Human('123458', '3Petr Semenov', 72, False, 'AB')
h14 = Human('123459', '4Marina Tah', 24, True, 'AB')
h15 = Human('123459', '5Juriy Tah', 28, False, 'B')
h16 = Human('123459', '6Pavel Tah', 16, False, 'A')

h13.add_family_member(h11)
h13.add_family_member(h12)
h13.add_family_member(h15)

h_list = [h11, h12, h13, h14, h15, h16]
for p in h_list:
    q.add_person(p)

q.sort_by_age()
for p in q.humans:
    print(p)
