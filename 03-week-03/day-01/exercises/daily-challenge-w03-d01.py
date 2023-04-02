class Farm:
    animals = {}
    farm_name=""
    def __init__(self, name) -> None:
        self.animals = {}
        self.farm_name = name
    def add_animal(self, an_name, an_numb=1):
        if an_name in self.animals:
                self.animals[an_name]+=an_numb
        else:
                self.animals[an_name]=an_numb
    def get_info(self):
          out_string=''
          out_string=self.farm_name+"'s farm\n"
          for i, v in self.animals.items():
                out_string+="{:>10} : {:<d}\n".format(i,v)
                # out_string+=i + ' : ' + str(v) + '\n'
          out_string += "\n\n    E-I-E-0!"
          return out_string
    def get_animal_types(self):
          return sorted([d for d in self.animals.keys()])
    def get_short_info(self):
          temp = ",".join(self.get_animal_types())
          return (self.farm_name+"'s farm has: "+temp+".") 
    
macdonald=Farm("\nMcDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
print(macdonald.get_animal_types())
print(macdonald.get_short_info())

