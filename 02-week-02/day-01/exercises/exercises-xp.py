print ("Hello word /b"*5)

for i in range(0,5): print ("\033[31mHello \033[34mword\033[37m")
print ("\033[31mHello \033[34mword\033[37m\n"*5)

print (99**3*8)

comp_name="Apple"
print ("I have " + comp_name + " computer")

name="Dmitry"
age=49
shoe_size=41
info="My name is "+name+". I am " + str(age) + " years ald. I have a " + str(shoe_size) + " shoe size."
print (info)

a=18
b=15
if a>b:
    print("Hello World.")
    
num=input("Enter a number: ")
if int(num) % 2 > 0:
    print("Odd")
else:
    print("Even")
    
new_name=input("Enter you name: ")
if name==new_name:
    print ("Name the same")
else:
    print("Name NOT the same")
    
height=input("Enter you height in inches: ")
if float(height)*2.54>145:
    print("tall enough to ride")
else:
    print("grow some more to ride") 
      
    

