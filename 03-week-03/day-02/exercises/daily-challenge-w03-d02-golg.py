from random import randint


class Gene():
    __gens_number = 0

    @classmethod
    def howManyGengsInNatur(cls):
        return cls.__gens_number

    def __init__(self) -> None:
        Gene.__gens_number += 1
        self.__gen_status = randint(0, 1)

    def lifeStep(self):
        self.__gen_status = randint(0, 1)

    def showGenStatus(self):
        return (self.__gen_status)


class Chromosome():
    __chromosomes_number = 0

    def __init__(self, gens_numb) -> None:
        self.__chromosomes_number += 1
        self.gens_numb = gens_numb
        self.gen_list = [Gene() for _ in range(gens_numb)]

    def lifeStep(self):
        [self.gen_list[i].lifeStep() for i in range(len(self.gen_list))]

    def show_gens(self):
        # print([self.gen_list[i].showGenStatus() for i in range(self.gens_numb)])
        return (",".join([str(self.gen_list[i].showGenStatus()) for i in range(self.gens_numb)]))

    @property
    def check_full_mutate(self):
        return (sum([self.gen_list[i].showGenStatus() for i in range(self.gens_numb)]) == self.gens_numb)


class Dna():
    __dna_numb = 0

    def __init__(self, chromosoms_numb, genes_numb) -> None:
        self.chromosoms_numb = chromosoms_numb
        self.chromosoms_list=[Chromosome(genes_numb) for i in range(chromosoms_numb)]
    def lifeStep(self):
        [self.chromosoms_list[i].lifeStep() for i in range(self.chromosoms_numb)]
    def show_chromosoms(self):
        out_str=''
        for i in range(self.chromosoms_numb):
            out_str+='[' + self.chromosoms_list[i].show_gens() + ']'
        return out_str
    @property
    def check_full_mutate(self):
        return (sum([self.chromosoms_list[i].check_full_mutate for i in range(self.chromosoms_numb)]) == self.chromosoms_numb)



# a = Chromosome(10)
# i = 0
# while not a.check_full_mutate:
#     i += 1
#     a.lifeStep()
#     print(a.show_gens(), f"Step {i}")
# print(f"Total genes: {Gene.howManyGengsInNatur()}")

a=Dna(4,4)
i=0
while not a.check_full_mutate:
    i+=1
    a.lifeStep()
    print(a.show_chromosoms(), i)
