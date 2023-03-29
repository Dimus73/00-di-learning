matrix=['7i3',
        'Tsi',
        'h%x',
        'i #',
        'sM ',
        '$a ',
        '#t%',
        '^r!']
ascii_letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

string_list=[]
for y in range(3):
    for p in matrix:
        if p[y] in ascii_letters:
            string_list.append(p[y])
        elif len(string_list)>0 and string_list[len(string_list)-1]!=' ':
            string_list.append(' ')
print ("".join(string_list))


# string_list=[]
# for y in range(3):
#     for p in matrix:
#         if matrix[p][y] in ascii_letters:
#             string_list.append(matrix[p][y])
#         elif len(string_list)>0 and string_list[len(string_list)-1]!=' ':
#             string_list.append(' ')
# print (string_list)