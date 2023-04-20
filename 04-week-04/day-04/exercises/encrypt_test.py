my_str="abcd"
enc_str=("".join([chr(ord(a)+1) for a in my_str]))

print (enc_str)