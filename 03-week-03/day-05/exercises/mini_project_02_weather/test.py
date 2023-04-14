l=[(293396, 'Tel Aviv District', 'IL', None, 32.083328, 34.799999), (293397, 'Tel Aviv', 'IL', None, 32.080879, 34.780571)]
for k, p in enumerate(l):
    # a,b,c,d,e,f=p
    # print(p,'\n\t',a,b,c,d,e,f)
    a,b,c,*d=p
    print(p,'\n\t',str(k)+'\t',a,b,c,d)
str_t="".join([f"{k}  {a}  {b}  {c} \n" for k,(a,b,c,*d) in enumerate(l)])
print (str_t)