# For 
# is a loop that runs on specific range
multiplier = 5

for num in range(0, 11):
    print(num * multiplier)

print("FINISHED")

for num_even in range(0, 51, 2): 
    print(num_even)
    num_even = 20
    print(num_even)


txt = "Hello there"

for char in txt:
    print(char)

# While 
tries = 0

while tries < 3:

    username = input("Username: ")

    if username == 'Yossi':
        password = input("password: ")
        if password == 'Tomato':
            print("Welcome")
            break
        else:
            tries += 1
            print(f"Tries: {tries}")
