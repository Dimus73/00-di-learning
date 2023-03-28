import random

# --------- Exercise 01 ------------
print("\nExercise 01")
# list_1=[]
# list_2=[]
list_1 = [*range(1,5)]
list_2 = [*range(5,11)]
res=list_1+list_2
list_1.extend(list_2)
print(list_1)
print(res)


# --------- Exercise 02 ------------
print("\nExercise 02")
numb_list=[]
for i in range(1500,2501):
    if i%5==0 or i%7==0:
        numb_list.append(i)
print (numb_list)


# --------- Exercise 03 ------------
print("\nExercise 03")
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
name=input("Enter your name: ")
if name in names:
    print("Name index is: ", names.index(name))
else:
    print ("The name is not in range")
    
# --------- Exercise 04 ------------
print("\nExercise 04")
data_set=set()
num=0
for i in range(3):
    num=input(f"Input the {i+1}(st/nd/rd) number:")
    data_set.add(int(num))
print ("Max is:", max(data_set))


# --------- Exercise 05 ------------
print("\nExercise 05")
abc_list=[]
vowel=['a', 'e', 'i', 'o', 'u', 'y']
letter_type=''
for i in range(26):
    abc_list.append(chr( ord('a')+i))
for i in abc_list:
    if i in vowel:
        letter_type='vowel'
    else:
        letter_type='consonant'
    print (f"The letter {i} is {letter_type} ")


# --------- Exercise 06 ------------
print("\nExercise 06")
words=[]
letter=' '
for i in range(7):
    words.append(input(f"Enter word {i} :"))
letter=input("Enter letter :")

for i in words:
    if letter in i:
        print (f"In word '{i}' the letter '{letter}' is in {i.index(letter)+1} position")
    else:
        print (f"The word {i} have not the letter '{letter}'")


# --------- Exercise 07 ------------
print("\nExercise 07")
numbers=[]
numbers=[*range(1,1000001)]
print('Max: ', max(numbers))
print('Min: ', min(numbers))
print('Sum: ', sum(numbers))

# --------- Exercise 08 ------------
print("\nExercise 08")
list_numb=[]
tuple_numb=()
string=""
string=input("Entre the string: ")
list_numb=string.split(',')
tuple_numb=tuple(list_numb)
print(list_numb)
print(tuple_numb)

# --------- Exercise 09 ------------
print("\nExercise 09")
entr_char=''
game_count=0
game_won=0
game_lost=0
while (True):
    entr_char=input("Enter a number 1-9 or 'q' to end the game ")
    if entr_char=='q':
        break
    else:
        game_count+=1
        if int(entr_char)==random.randint(1,9):
            print ("Winner")
            game_won+=1
        else:
            print("better luck next time.")
            game_lost+=1
print(f"Total games played - {game_count}. Victory - {game_won}. Defeats - {game_lost}")
            

    



