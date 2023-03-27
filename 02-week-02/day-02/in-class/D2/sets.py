# Create 

a_set = set()
b_set = {1,2,3,4,'a','b'}

# Get/Retrieve - Don't have indexes

for item in b_set:
    print(item)

# Update
a_set = set()

a_set.add('c')
a_set.add('d')
a_set.add('e')

# Delete

a_set.pop()
a_set.remove(1)

# to remove last - convert to string
a_set_list = list(a_set)
a_set_list.pop()
a_set = set(a_set)

# Group relationships
a_set = {1,2,3,4,5}
b_set = {4,5,6,7,8}

a_set.difference(b_set) # -> {1, 2, 3}. a_set - b_set

b_set.difference(a_set) # -> {8, 6, 7}. b_set - a_set

b_set.intersection(a_set) # -> {4, 5}. b_set & a_set

b_set.union(a_set) # -> {1, 2, 3, 4, 5, 6, 7, 8}. b_set | a_set

