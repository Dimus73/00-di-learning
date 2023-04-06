file_list=[]
line5=''
char5=''
with open("test.txt",'r') as f:
    file_list = f.readlines() 
    f.seek(0)
    line5=f.readline(1000)
    line5=f.readline()
    f.seek(0)
    char5=f.read(5)
print (file_list)
print (line5)
print (char5)

with open("test.txt",'r') as f:
      i=0
      for a in f:
           i+=1
           print(a,i)
              