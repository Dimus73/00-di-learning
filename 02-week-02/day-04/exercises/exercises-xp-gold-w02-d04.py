# --------- Exercise 02 ------------
print("\nExercise 02")

def Sum(a):
    return (a+(a*10+a)+(a*100+a*10+a)+(a*1000+a*100+a*10+a))

print(Sum(3))

def Sum_v2(a,b):
    v=0
    if b>1:
        v=Sum_v2(a,b-1)
    return (a*10**(b-1)+v)

def Sum_wrap(a,b):
    sum=0
    for p in range(b+1):
        sum+=Sum_v2(a,p)
    return sum

print(Sum_wrap(3,4))

word=['dog','cat','ball']

cap_l=lambda st: st.capitalize()

print(list(map(cap_l, word)))
