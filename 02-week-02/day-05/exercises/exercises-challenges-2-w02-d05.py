for i in range(0,3):
    print (" "*int(5-((i*2+1))/2)+'*'*(i*2+1)+" "*int(5-((i*2+1)/2))) 
print('\n\n')
for i in range(1,6):
    print(' '*(5-i)+'*'*i)
print('\n\n')
for i in range(1,6):
    print('*'*i+' '*(5-i))
for i in range(5,0,-1):
    print(' '*(5-i)+'*'*i)

my_list = [2, 24, 12, 354, 233] 						#Det a list, 5 items long
for i in range(len(my_list) - 1): 					#for loop in (i) range from 0 to 3
    minimum = i															#Set a constant equal i
    for j in range( i + 1, len(my_list)):		#for loop in (j) range from i to 5
        if(my_list[j] < my_list[minimum]):  #if list in position j smoler then in position i
            minimum = j											#Change the value of min
            if(minimum != i):								
                my_list[i], my_list[minimum] = my_list[minimum], my_list[i]  #Swap values if condition is met
print(my_list)