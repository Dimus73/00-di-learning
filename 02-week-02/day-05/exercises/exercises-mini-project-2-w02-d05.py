import random

def display_word(word_mask):
    print(word_mask)
    
def letter_check(letter,word):
    return True if letter in word else False

def change_word_mask(letter, word, word_mask):
    i=0
    mask_list=list(word_mask)
    for p in word:
          if p==letter:
               mask_list[i]=letter
          i+=1
    return "".join(mask_list)

def rnd_word(words_list):
    return random.choice(words_list)

def ask_for_letter():
     return input("Choose a letter: ")

    
foun_letter_list=[]
used_letter_list=[]
word=''
mask=''
word_fouund=False
next_letter=''
body_part=6
words_list = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'southw']

word=rnd_word(words_list)
word_mask='*'*len(word)
print (f"The word is hidden here: {word_mask}")
while not word_fouund and body_part>0:
     next_letter=ask_for_letter()
     if next_letter in used_letter_list:
          print("You have already used this letter. Try another")
          continue
     else: 
          used_letter_list.append(next_letter)
          
     if letter_check(next_letter,word):
          word_mask=change_word_mask(next_letter,word,word_mask)
          print(f"Great! This letter is in the word. Here it is:{word_mask}")
          word_fouund = True if not '*' in word_mask else False
     else:
          body_part-=1
          print(f"There is no such letter in the word. You have {body_part} attempts left.")
if not body_part:
     print("You lost. Try again.")
else:
     print("You have won.")
     
          
