import anagram_checker

a=anagram_checker.AnagramChecker()
ch=''
while ch!= 'x':
    ch=input("Choose: (w)enter a word or (x)exit: ")
    if ch == 'w':
        good_word=False
        while not good_word:
            word = input('Please enter a word: ') 
            word=(word.upper()).strip()
            good_word=a.is_valid_word(word)
        res_list= a.get_anagrams(word)
        if res_list:
            print(f'YOUR WORD :”{word}\n”this is a valid English word.\nAnagrams for your word: {res_list}.')
        