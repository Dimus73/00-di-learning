import re
import random
import string

# # --------- Exercise 01 ------------
print("\nExercise 01")
def return_numbers(in_string):
    partern=re.compile(r'(\d+)')
    res="".join(partern.findall(in_string))
    return res
    
print(return_numbers("k5k3q24g5z6x9bn"))

# # --------- Exercise 02 ------------
print("\nExercise 02")
partern=re.compile(r'\b[A-Z][a-z]* [A-Z][a-z]*')
test_str="Dmitry Prigozhin"
res=partern.fullmatch(test_str)
print (res)

# # --------- Exercise 03 ------------
print("\nExercise 03")
def check_pw(pw_string, chars_list):
    for p in chars_list:
        if not re.search(p,pw_string):
            return False
    return True


char_set_list=[r'[A-Z]',r'[a-z]',r'[0-9]',r'[!@#$%^&*()-+]']
# sa=r'[A-Z]'
# print(char_set_list[0], re.search(char_set_list[0],'fyVofU@GS'))

pw_chars=string.ascii_letters+string.digits+'!@#$%^&*()-+'
print (pw_chars)
pw_length=0
pw_string=''
while not 8<=pw_length<=25:
    pw_length=input("Enter password lenght (8-25):")
    pw_length=int(pw_length)
while not check_pw(pw_string,char_set_list):
    pw_string="".join([random.choice(pw_chars) for i in range(pw_length)])

print (f"Save your password in a safe place: {pw_string}" )
