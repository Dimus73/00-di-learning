# Create 
a_list = []

b_list = [1,2,3,'a','b']

c_list = [1,2,3,'a', [5,6,'c', ['%']]]

a_string = 'ABC'
d_list = list(a_string) # -> ['A','B','C']

# Get/Retrieve

c_list = [1,2,3,'a', [5,6,'c', ['%']]]

first_item = c_list[0] 

last_item = c_list[-1]

between_items = c_list[1:4] # -> [2, 3, 'a']

# c_list[-1][-1][0][0] -> '%'

# c_list[-2:] -> ['a', [5, 6, 'c', ['%']]]


# Update

b_list = [1,2,3,'a','b']

b_list[0] = 5

idx = b_list.index('a') # 3
b_list.insert(idx+1, '!') # -> [1, 2, 3, 'a', '!', 'b']

b_list.append('c') # -> [1, 2, 3, 'a', 'b', 'c']


# Delete

numbers = [5,2,7,3,8,0]

# remove by index and save the removed item
deleted_item = numbers.pop(3)

# remove by index without saving
del numbers[4]

# remove by value, the first occurance 
numbers.remove(7)

sevens = [7,7,7,7,7,7,8]

deleted = 0
while 7 in sevens and deleted != 2:
    sevens.remove(7)
    deleted += 1

print(sevens)


# Sorting 

numbers = [5,2,7,3,8,0] 
numbers.sort() # -> [0, 2, 3, 5, 7, 8]
numbers.reverse() # -> [0, 8, 3, 7, 2, 5]

numbers_sorted_asc = sorted(numbers) 
numbers_sorted_desc = sorted(numbers, reverse=True)

# TimSort

