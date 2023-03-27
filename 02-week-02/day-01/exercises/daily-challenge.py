import random

string=input("Enter string: ")
string_len=len(string)

print("\npart-01")
if string_len<10:
    print("string not long enough")
elif string_len>10: 
	print("string too long")
        
print("\npart-02")
print(string[0])
print(string[string_len-1])

print("\npart-03")
i=1
for s in string:
    print(string[0:i])
    i+=1

print("\npart-04")
temp_list=list(string)
random.shuffle(temp_list)
string=''.join(temp_list)
print(string)