# # --------- Exercise 01 ------------
# print("\nExercise 01")
def insert_in_list (position:int, item, list_name:list):
    list_name.insert(position, item)
test_list=[1,2,3]
position=1
item='d'
insert_in_list(position,item,test_list)
print(test_list)
test_list=[n for n in test_list]
print(test_list)

# # --------- Exercise 02 ------------
# print("\nExercise 02")
def space_numb(string:str):
    return string.count(' ')
    # string.count

print(space_numb("ssd   ssk  k"))

# --------- Exercise 03 ------------
print("\nExercise 03")
rr='DFg,,,  !!FgdrrF'
print ("Upper: ", sum(map( (lambda x: x.isupper()) ,rr)))
print ("Lower: ", sum(map( (lambda x: x.islower()) ,rr)))

# --------- Exercise 04 ------------
print("\nExercise 04")
def my_sum(list):
    sum=0
    for p in list:
        sum+=p
    return sum

print ("Summ: ",my_sum([1,5,4,2]))

# --------- Exercise 05 ------------
print("\nExercise 05")
def my_max(list):
    max=list[0]
    for p in list:
        if max<p:
            max=p
    return max

print ("Max: ",my_max([100,1,3,50]))

# --------- Exercise 06 ------------
print("\nExercise 06")
def factorial(numb):
    f=1
    for p in range(1,numb+1):
        f*=p
    return f

print("Factorial: ",factorial(4))

# --------- Exercise 07 ------------
print("\nExercise 07")
def my_count(list):
    cn=0
    for n,v in enumerate(list):
        cn=n
    return cn+1

print ("List lenth: ", my_count([['a','a','t','o'],'a']))

# --------- Exercise 08 ------------
print("\nExercise 08")
def norm(list):
    s=sum(map(lambda x: x**2,list))
    return s**0.5
print ("Norm: ", norm([1,2,2,3]))

# --------- Exercise 09 ------------
print("\nExercise 09")
def is_mono(list):
    v=True
    d=True
    p=list[0]
    for p in range(len(list)-1):
        if list[p]>list[p+1]:
            d=False
        if list[p]<list[p+1]:
            v=False
    return True if d or v else False

print ("List monotonic: ", is_mono([1,2,0,4]))

# --------- Exercise 10 ------------
print("\nExercise 10")
def long_word(list_w):
    i=0
    print(list(map(lambda x:len(x),list_w)))
    w_len=list(map(lambda x:len(x),list_w))
    for p in w_len:
        i=p if i<p else i
    return list_w[w_len.index(i)]
print ("Longest word: ",long_word(['ss','eee','lkddssddeddd','ffff','lkddssdde']))

# --------- Exercise 11 ------------
print("\nExercise 11")
def separate(list_in):
    list_st= [ n for n in list_in if type(n)==type(' ')]
    list_int=[ n for n in list_in if type(n)==type(1)]
    return list_st, list_int
st, intg = separate([1,2,'ddd',4,'gg'])
print (f"List of string{st}\nList of integer:{intg}") 

# --------- Exercise 12 ------------
print("\nExercise 12")
def is_palindrom(stri):
    return True if stri==stri[::-1] else False
print ("It is palendrome: ",is_palindrom("John"))

# --------- Exercise 13 ------------
print("\nExercise 13")
def sum_over_k(string_in,k):
    list_in=string_in.split(" ")
    return sum(map(lambda x:len(x)>k,list_in))
print ("Words: ", sum_over_k('Do or do not there is no try',2))

# --------- Exercise 14 ------------
print("\nExercise 14")
def dict_avg(dict_in):
    sum=0
    for k,v in dict_in.items():
        sum+=v
    return sum/len(dict_in)
print ("Average :", dict_avg({'a': 1,'b':2,'c':8,'d': 1}))

# --------- Exercise 15 ------------
print("\nExercise 15")
def common_div(n1,n2):
    div_list=[]
    for i in range(2,(n1 if n1<n2 else n2)+1):
        if n1%i==0 and n2%i==0:
            div_list.append(i)
    return div_list
print("Common divisors: ", common_div(10,20))

# --------- Exercise 16 ------------
print("\nExercise 16")
def is_prime(n):
    res=[]
    res=[False for i in range(2,n) if n%i==0]
    return True if len(res)==0 else False
print ("A number is prime:", is_prime(996551))

# --------- Exercise 17 ------------
print("\nExercise 17")
def weird_print(list_in):
    out_list=[]
    for i, v in enumerate(list_in):
        if i%2==0 and v%2==0:
            out_list.append(v)
    return out_list
print ("LIST:", weird_print([1,2,2,3,4,5]))

# --------- Exercise 18 ------------
print("\nExercise 18")
def type_count(**kwargs):
    int_n=0
    float_n=0
    bool_n=0
    str_n=0
    for p in kwargs.values():
        if type(p)==type(1):
            int_n+=1
        elif type(p)==type(1.0):
            float_n+=1
        elif type(p)==type(True):
            bool_n+=1
        elif type(p)==type(' '):
            str_n+=1
    return (f"int: {int_n}, str: {str_n}, float: {float_n}, bool: {bool_n}")
print (type_count(a=1,b='string',c=1.0,fg=100,d=True,e=False))

# --------- Exercise 19 ------------
print("\nExercise 19")
def split_n(in_string: str, sep=' '):
    return(in_string.split(sep))

print(split_n("Lorem ddd jfjj joo ooo",'o'))

# --------- Exercise 20 ------------
print("\nExercise 20")
print('*'*len('string'))