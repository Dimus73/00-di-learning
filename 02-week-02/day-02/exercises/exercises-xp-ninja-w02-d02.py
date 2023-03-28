import math

# # --------- Exercise 01 ------------
# print("\nExercise 01")
# numb_list=[]
# c=50
# h=30
# numb_string=input("Enter a comma-separated string of numbers: ")
# numb_list=numb_string.split(',')
# for d in numb_list:
#     print(int(math.sqrt((2*c*int(d))/h)))

# --------- Exercise 02 ------------
print("\nExercise 02")

list_1=[3, 47, 99, -80, 22, 97, 54, -23, 5, 7]
list_2=[44, 91, 8, 24, -6, 0, 56, 8, 100, 2]
list_3=[3, 21, 76, 53, 9, -82, -3, 49, 1, 76]
list_4=[18, 19, 2, 56, 33, 17, 41, -63, -82, 1]
full_list=[*list_1, *list_2, *list_3, *list_4]
print (full_list)
full_list.sort()
print (full_list)
print("Summ is: ", sum(full_list))
print([full_list[0], full_list[-1]])
print([n for n in full_list if n>50])
print([n for n in full_list if n<10])
print([n**2 for n in full_list])
full_set=set(full_list)
print (full_set, "colv", len(full_set))
print ("Average", sum(full_list)/len(full_list))
print ("Max:", max(full_list))
print ("Min:", min(full_list))
manual_summ=0
manual_count=0
manual_max=full_list[0]
manual_min=full_list[0]
for p in full_list:
    manual_summ+=p
    manual_count+=1
    if manual_max<p:
        manual_max=p
    if manual_min>p:
        manual_min=p
print(f"Manual average: {int(manual_summ/manual_count)}. Manual count: {manual_count}. Manual min is: {manual_min}. Manual max is {manual_max}")



