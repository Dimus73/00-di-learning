crypt=''
user_text=input("Enter your text: ")
resalt=''
# crypt=input("What to do? 'e'-encrypt 'd'-decrypt 'q'-exit")
while not crypt in['c','d','q']:
	crypt=input("What to do? 'e'-encrypt 'd'-decrypt 'q'-exit : ")
	if crypt=='q':
			exit()
	elif crypt=='e':
			crypt=True
			break
	elif crypt=='d':
			crypt=False
			break

for p in user_text:
	if crypt:
		resalt+= chr(ord(p) + 8)
	else:
		resalt+= chr(ord(p) - 8)
print(resalt)


