user_in = input('Number: ')
user_in_int = int(user_in)

mult_table_range = 10

out = ""
for num in range(mult_table_range + 1): # 0 1 2 3 ... 
    result = user_in_int * num
    out += f"{user_in_int} X {num} = {result}\n"

print(out)

num = 1
while num < 11:
    print(num)
    num += 1
