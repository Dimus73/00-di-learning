import urllib.request 
import urllib
import random

# def get_words_from_url():
#     file_data=""
    # for line in urllib.request.urlopen('http://norvig.com/ngrams/sowpods.txt'):
    #     print(line)
    
def get_words_from_file():
    file_data=[]
    with open('sowpods.txt','r') as f:
        for line in f:
            file_data.append(line[0:-1].lower())
    return file_data

def get_random_sentence(lenth:int, file_data:list):
    res_string=file_data[random.randint(0,len(file_data)-1)].capitalize()
    for _ in range(lenth-1):
        res_string+=(" "+file_data[random.randint(0,len(file_data)-1)])
    return (res_string+'.')
        
    
def main():
    phrase_len = input("This program creates a phrase from random words. \nWhat is the length of the phrase you want to make? ")
    try: 
        phrase_len = int(phrase_len)
        if not 0 < phrase_len <=40:
            raise ValueError
    except (TypeError, ValueError):
        print ('Phrase length must be an integer between 1 and 40')
        exit()
    file_data = get_words_from_file()
    print("*******************\nYour phrase is: ")
    print (get_random_sentence(phrase_len,file_data))

main()
