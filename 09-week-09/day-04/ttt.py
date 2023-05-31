char = ['a','b','b','c','d','c']
new_list=[]
for n in char:
    if n not in new_list:
        new_list.append(n)
        
print(new_list)

print(set(char))


string = "hello word"
new_str=""
i=len(string)-1
while i>=0:
    new_str+=string[i]
    i-=1
print (new_str)
print( string[ : :-1])