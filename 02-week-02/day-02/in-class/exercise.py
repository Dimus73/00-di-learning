list1 = [5, 10, 15, 20, 25, 50, 20]
pos=list1.index(20)
print(pos)
list1[pos]=200
print(list1)

a_tuple = (10, 20, 30, 40)

a1, a2, a3, a4=a_tuple
print(a1, a2, a3, a4)

numb=input("Number")
for i in range(1,11):
    print(i*int(numb))

i=0
while i<10:
    i+=1
    print(i) 
