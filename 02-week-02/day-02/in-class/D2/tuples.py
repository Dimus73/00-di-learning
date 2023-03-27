# Create 
a_tuple = (1,2,3,4,)
b_tuple = 1,2,3
personal_info = ('Yossi', 'Eik', 31, 'TLV')

# Get/Retrieve
personal_info[0]
personal_info[-1]
personal_info[1: 3]

# Update - Not mutable, need to be changed to mutable (list)

personal_info_list = list(personal_info)
personal_info_list[0] = 'Lea'
personal_info = tuple(personal_info_list)

# Delete - Not mutable, can't delete


# Dividing data into multiple variables
result1, result2 = 30, 100
first_name, last_name = input("First name, last name: ").split(",")