import random

# --------- Exercise 01 ------------
print("\nExercise 01")
def display_message():
    print("Test message")

display_message()
    
# --------- Exercise 02 ------------
print("\nExercise 02")
def favorite_book(title):
    print(f"One of my favorite books is {title}")

favorite_book(input("Enter a book name: "))

# --------- Exercise 03 ------------
print("\nExercise 03")
def describe_city(city='Hayfa', country='Israel'):
    print(f"{city} is in {country}")
    
describe_city()
describe_city('Moscow','Russia')

# --------- Exercise 04 ------------
print("\nExercise 04")
def func04 (numb):
     rnd_numb=random.randint(0,100)
     if rnd_numb==numb:
         print("True")
         return True
     else:
         print(f"False. Numb1:{numb}, numb2:{rnd_numb}")
         return False
while not func04(34):
    a=1

# --------- Exercise 05 ------------
print("\nExercise 05")
def make_shirt(size, text):
	print(f"The size of the shirt is {size} and the text is '{text}'")
        
make_shirt(41,"Test text")

# --------- Exercise 05 v2------------
print("\nExercise 05v2")
def make_shirt(**kwarg):
  for p in kwarg.keys():
       print(f"The size of the shirt is {p.replace('n','')} and the text is '{kwarg[p]}'")
        
make_shirt(n41="Test text", n42="Test text1" , n43="Test text3" )


# --------- Exercise 06 ------------
print("\nExercise 06")
def show_magicians(name_list):
     for p in name_list:
          print(p)

def make_great (text, name_list):
     for i in range(len(name_list)):
          name_list[i]=text+' ' + name_list[i]

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
show_magicians(magician_names)
make_great("the Great", magician_names)
show_magicians(magician_names)


# --------- Exercise 07 ------------
print("\nExercise 07")
def get_random_temp(season):
     season_top_lim=0
     season_bottom_lim=0
     if is_it_num(season):
          season=int(season)
          if 5>=season>=3:
               season='spring'
          elif 8>=season>=6:
               season='summer'
          elif 11>=season>=9:
               season='autumn'
          else:
               season='winter'
     if season=='summer':
          season_top_lim=40
          season_bottom_lim=12
     elif season in ['autumn','spring']:
          season_top_lim=34
          season_bottom_lim=4 
     else:
          season_top_lim=6
          season_bottom_lim=-10 
     return(random.randint(season_bottom_lim*10,season_top_lim*10)/10)

def main():
     season=input("Type a season(summer/autumn/winter/spring) or month number: ")
     cur_temp=get_random_temp(season)
     print(f"The temperature right now is {cur_temp} degrees Celsius.")
     if cur_temp<0:
          print("Brrr, that’s freezing! Wear some extra layers today")
     elif 16>cur_temp>=0:
          print("Quite chilly! Don’t forget your coat")
     elif 23>cur_temp>=16:
          print("Outside is good and nice")
     elif 32>cur_temp>=23:
          print("It's pretty hot outside")
     elif 40>cur_temp>=32:
          print("It's very hot outside")

def is_it_num(str):
     try:
          int(str)
          return True
     except ValueError:
          return False
main()

