def exer_func(string:str):
    l=string.split(',')
    l.sort()
    return ",".join(l)

print(exer_func('without,hello,bag,world'))