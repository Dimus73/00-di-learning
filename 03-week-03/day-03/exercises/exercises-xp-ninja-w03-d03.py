import random
# # --------- Exercise 01 ------------
print("\nExercise 01")


class Converter():
    converter_to_kelvin = {}
    converter_from_kelvin = {}

    def __init__(self) -> None:
        name = 'Celsius'
        def funktion_to_k(x): return x+273.15
        def funktion_from_k(x): return x-273.15
        Converter.converter_to_kelvin[name] = funktion_to_k
        Converter.converter_from_kelvin[name] = funktion_from_k

        name = 'Fahrenheit'
        def funktion_to_k(x): return (x+459.67)*5/9
        def funktion_from_k(x): return x*9/5-459.67
        Converter.converter_to_kelvin[name] = funktion_to_k
        Converter.converter_from_kelvin[name] = funktion_from_k

        name = 'Kelvin'
        def funktion_to_k(x): return x
        def funktion_from_k(x): return x
        Converter.converter_to_kelvin[name] = funktion_to_k
        Converter.converter_from_kelvin[name] = funktion_from_k


class Temperature(Converter):
    def __init__(self, name, tempr) -> None:
        self.name = name
        self.tempr = tempr

    def convert_to(self, name):
        kelv = Converter.converter_to_kelvin[self.name](self.tempr)
        return (Converter.converter_from_kelvin[name](kelv))

    def tempr_in_k(self):
        return (Converter.converter_to_kelvin[self.name](self.tempr))


class Celsius(Temperature):
    def __init__(self, tempr) -> None:
        name = 'Celsius'
        super().__init__(name, tempr)


class Fahrenheit(Temperature):
    def __init__(self, tempr) -> None:
        name = 'Fahrenheit'
        super().__init__(name, tempr)


class Kelvin(Temperature):
    def __init__(self, tempr) -> None:
        name = 'Kelvin'
        super().__init__(name, tempr)


Converter()
a = Celsius(50)
b = Fahrenheit(60)

f = a.convert_to('Fahrenheit')

print(a.tempr, a.tempr_in_k(), b.tempr, b.tempr_in_k(), f)

# # --------- Exercise 02 ------------
print("\nExercise 02")


class QuantumParticle():
    def __init__(self,name) -> None:
        self.name=name
        self.__position = 0
        self.__momentum = 0
        self.__spin = ''
        self.partner = None
        self.disturbance()

    @property
    def position(self):
        self.disturbance()
        return(self.__position)  
    @property
    def momentum(self):
        self.disturbance()
        return(self.__momentum)  
    @property
    def spin(self):
        self.disturbance()
        return(self.__spin)  
    @spin.setter
    def spin(self, spin):
        if spin in ['1/2','-1/2']:
            self.__spin=spin

    @property
    def position_k(self):
        return(self.__position)  
    @property
    def momentum_k(self):
        return(self.__momentum)  
    @property
    def spin_k(self):
        return(self.__spin)  

    def new_position(self):
        self.__position=(random.randint(1,10000))
    def new_momentum(self):
        self.__momentum=(round(random.random(),2))
    def new_spin(self):
        l=['1/2','-1/2']
        self.__spin=(l[random.randint(0,1)])
    def disturbance(self):
        self.new_position()
        self.new_momentum()
        self.new_spin()
        if self.partner:
            print ('Change spin of partner')
            self.partner.spin='-1/2' if self.spin_k == '1/2' else '1/2'
    def entanglement(self, partner):
        if not type(self) == type(partner):
            print('Entanglement is possible only between particles. Entanglement has not been established.')
            return
        self.partner=partner
        self.partner.partner=self
        self.partner.spin='-1/2' if self.spin_k == '1/2' else '1/2'
        print(f"*****Particle {self.name} is now in quantum entanglement with Particle {partner.name}")
            
          


    
a=QuantumParticle('p1')
print (f"Particle {a.name} State Control. Position:{a.position_k}. Momentum:{a.momentum_k}. Spin:{a.spin_k}")
print (f"Getting {a.name} measurement (Position)",a.position)
print (f"Particle {a.name} State Control. Position:{a.position_k}. Momentum:{a.momentum_k}. Spin:{a.spin_k}")
print (f"Getting {a.name} measurement (Momentum)",a.momentum)
print (f"Particle {a.name} State Control. Position:{a.position_k}. Momentum:{a.momentum_k}. Spin:{a.spin_k}")
print (f"Getting {a.name} measurement (Spin)",a.spin)
print (f"Particle {a.name} State Control. Position:{a.position_k}. Momentum:{a.momentum_k}. Spin:{a.spin_k}")

b=QuantumParticle('p2')
print (f"Particle {b.name} State Control. Position:{b.position_k}. Momentum:{b.momentum_k}. Spin:{b.spin_k}")
print (f"Getting {b.name} measurement (Position)",b.position)
print (f"Particle {b.name} State Control. Position:{b.position_k}. Momentum:{b.momentum_k}. Spin:{b.spin_k}")
print (f"Getting {b.name} measurement (Momentum)",b.momentum)
print (f"Particle {b.name} State Control. Position:{b.position_k}. Momentum:{b.momentum_k}. Spin:{b.spin_k}")
print (f"Getting {b.name} measurement (Spin)",b.spin)
print (f"Particle {b.name} State Control. Position:{b.position_k}. Momentum:{b.momentum_k}. Spin:{b.spin_k}")

a.entanglement(b)
print (f"Particle {b.name} State Control. Position:{b.position_k}. Momentum:{b.momentum_k}. Spin:{b.spin_k}")
print (f"Getting {a.name} measurement (Position)",a.position)
print (f"Particle {a.name} State Control. Position:{a.position_k}. Momentum:{a.momentum_k}. Spin:{a.spin_k}")
print (f"Particle {b.name} State Control. Position:{b.position_k}. Momentum:{b.momentum_k}. Spin:{b.spin_k}")
