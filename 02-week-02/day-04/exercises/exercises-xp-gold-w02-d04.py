
import datetime
import calendar
from datetime import date
import random


# # --------- Exercise 01 ------------
# print("\nExercise 01")

# def get_age(yy, mm, dd):
#     born=datetime.date(yy,mm,dd)
#     today = date.today()
#     years=today.year - born.year - ((today.month, today.day) < (born.month, born.day))
#     return(years)

# def can_retire(gender,age):
#     if (gender=='m' and age>=67) or (gender=='f' and age>=62):
#         return True 
#     else:
#         return False
    

# bd=input("Enter your birthdate DD/MM/YYYY:")
# gender=input("Enter your gender: ")
# dd=int(bd[0:2])
# mm=int(bd[3:5])
# yy=int(bd[6:10])
# if can_retire(gender,get_age(yy, mm, dd)):
#     print("You can retire")
# else:
#     print("You can't retire")


# # --------- Exercise 02 ------------
# print("\nExercise 02")
# def Sum_v2(a,b):
#     v=0
#     if b>1:
#         v=Sum_v2(a,b-1)
#     return (a*10**(b-1)+v)

# def Sum_wrap(a,b):
#     sum=0
#     for p in range(b+1):
#         sum+=Sum_v2(a,p)
#     return sum

# print(int(Sum_wrap(3,4)))


# word=['dog','cat','ball']
# cap_l=lambda st: st.capitalize()
# print(list(map(cap_l, word)))

# --------- Exercise 03 ------------
print("\nExercise 03")
def throw_dice():
    return random.randint(1,6)

def throw_until_doubles():
    i=0
    while not throw_dice()==throw_dice():
        i+=1
    return i+1

def main():
    res_list=[]
    for i in range(100):
        res_list.append(throw_until_doubles())
    print(f"It took {sum(res_list)} iterations to get 100 matches")
    print(f"Average number of throws before a match {sum(res_list)/len(res_list)}")
    
main()

