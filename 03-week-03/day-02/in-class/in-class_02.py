password=1234
pok=False
while not pok:
	try:
		user_pass=int(input("passsword:"))
		if password==user_pass:
			pok=True
	except ValueError:
		print("Not right.")
	