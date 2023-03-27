
# --------- Challenge 1 ------------
print("\nChallenge 1")
number=int(input("Enter number: "))
repetition=int(input("Enter length: "))
mult_list=[]
while repetition>0:
    mult_list.insert(0,number*repetition)
    repetition-=1
print (mult_list)


# --------- Challenge 2 ------------
print("\nChallenge 2")
looking_string=list(input("Enter string: "))
str_len=len(looking_string)
i=0
while i<str_len-1:
    if looking_string[i]==looking_string[(i+1)]:
        looking_string.pop(i+1)
        str_len-=1
        continue
    i+=1
print("".join(looking_string))