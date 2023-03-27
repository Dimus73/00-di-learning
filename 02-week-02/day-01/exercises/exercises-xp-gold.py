print ("Exercise 1:")
print ("Hello world\n"*5, "I love python\n"*5)

print("\nExercise 2:")
month=0
while not(month>=1 and month<=12):
		month_str=input("Enter the month (1-12): ")
		month = int(month_str)
if month >= 3 and month <=5:
    season="Spring"
elif month >= 6 and month <=8:
    season="Summer"
elif month >= 9 and month <=11:
    season="Autumn"
else: season="Winter"

print (f"The season is {season}")