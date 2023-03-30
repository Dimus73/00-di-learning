# # --------- Exercise 01 ------------
# print("\nExercise 01")
def get_full_name(fn,md,ln):
    return (fn+' '+ (md if md else '') + ' ' + ln)
print(get_full_name('dima','','prig'))


# # --------- Exercise 02 ------------
# print("\nExercise 02")
res_string=''
abc_to_morse = { 'A':'.-', 'B':'-...',
                    'C':'-.-.', 'D':'-..', 'E':'.',
                    'F':'..-.', 'G':'--.', 'H':'....',
                    'I':'..', 'J':'.---', 'K':'-.-',
                    'L':'.-..', 'M':'--', 'N':'-.',
                    'O':'---', 'P':'.--.', 'Q':'--.-',
                    'R':'.-.', 'S':'...', 'T':'-',
                    'U':'..-', 'V':'...-', 'W':'.--',
                    'X':'-..-', 'Y':'-.--', 'Z':'--..',
                    '1':'.----', '2':'..---', '3':'...--',
                    '4':'....-', '5':'.....', '6':'-....',
                    '7':'--...', '8':'---..', '9':'----.',
                    '0':'-----', ', ':'--..--', '.':'.-.-.-',
                    '?':'..--..', '/':'-..-.', '-':'-....-',
                    '(':'-.--.', ')':'-.--.-'}
morse_to_abc={b:a for a,b in abc_to_morse.items()}
enter_string=input("Enter string: ")
if not enter_string[0] in ['-', '.']:
    res_string="/".join([abc_to_morse[n.upper()] for n in enter_string])
else:
    res_string="".join([morse_to_abc[n] for n in list(enter_string.split('/'))])   

print(res_string)

# # --------- Exercise 03 ------------
# print("\nExercise 03")
def box_printer(*word):
    print_str=''
    with_box=max([len(p) for p in word])+2
    print_str='*' * with_box+'\n'
    for p in word:
        print_str+='*' + p + ' '*(with_box-len(p)-2)+'*\n'
    print_str+='*' * with_box+'\n'
    return print_str

t=box_printer("Hello", "World", "in", "reallylongword", "a", "frame")
print(t)