file_list = []
line5 = ''
char5 = ''
read_file_name = "test.txt"
serch_list= ["Darth\n", "Luke\n", "Lea\n"]
try:
    with open(read_file_name, 'r+') as f:
        for line1 in f:
            # print(line1[:-1]," ", line1[::-1], sep='')
            line1 = line1[:-1]+" SkyWalker\n" if line1 == "Luke\n" else line1
            file_list.append(line1)
    with open(read_file_name,'w') as f:
        f.writelines(file_list)
    with open(read_file_name,'r') as f:
        file_list=f.readlines()
        print (file_list) 
        # print(f.tell())
        # f.seek(0)
        # for _ in range(5):
        #     line5 = f.readline()
        # print(line5)
        # f.seek(0)
        # char5=f.read(5)
        # print(char5)
        # f.seek(0)
        # file_list=f.readlines()
        # print(file_list)
        # print(f.tell())
        # for p in serch_list:
        #     print(f"{p} in {read_file_name} {file_list.count(p)} times")
        # f.seek(4)
        # print(f.tell())
        # f.write("Dima")
        # print(f.tell())



except FileNotFoundError:
    print(f"Can not open file {read_file_name}")
