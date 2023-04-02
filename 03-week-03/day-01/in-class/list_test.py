def test_fun(list_in:list):
    list_n1 = [x for x in list_in]
    list_n1[1][1]='Z'
    print(list_in)
    print(list_n1)

start_list=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
test_fun(start_list)
print(start_list)