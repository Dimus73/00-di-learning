strin="You have entered a wrong domain"
str_list=strin.split(" ")
print (str_list[::-1])

perfect=int(input("Enter number: "))
perfect_list=[]
for i in range(1,int(perfect/2)+1):
    if perfect%i==0:
        print(i)
        perfect_list.append(i)
print(perfect_list)
if sum(perfect_list)==perfect:
    print(True)
else:
    print(False)