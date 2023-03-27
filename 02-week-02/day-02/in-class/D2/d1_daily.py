from random import shuffle


user_in = input("Please insert 10 character long input: ") 

if len(user_in) < 10:
    print("Too short")
if len(user_in) > 10:
    print("Too long")
if len(user_in) == 10:
    print("EQUAL")

print("First character:", user_in[0])
print("Last character:", user_in[-1])

out = ""

for char in user_in:
    out += char
    print(out)

for i in range(len(user_in)):
    print(user_in[:i+1])

s_list = list(user_in)
shuffle(s_list)
user_in = "".join(s_list)

print(user_in)