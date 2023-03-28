# --------- Challenge 01 ------------
print("\Challenge 01")
user_word=input("Enter the word: ")
letter_dict={}
i=0
for p in user_word:
    if p not in letter_dict.keys():
        letter_dict[p]=[i]
    else:
        letter_dict[p].append(i)
    i+=1
print(letter_dict)

# --------- Challenge 02 ------------
print("\Challenge 02")
#--------------------
items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}

wallet = "$300"
#--------------------
affords=[]

wallet=int(wallet.replace('$',' '))
for p in items_purchase.keys():
		items_purchase[p]=items_purchase[p].replace('$',' ')
		items_purchase[p]=int(items_purchase[p].replace(',',''))

for p in items_purchase.keys():
    if wallet-items_purchase[p]>=0:
        affords.append([p])
        wallet-=items_purchase[p]
affords.sort()
if len(affords)==0:
    print("Nothing")
else:
    print(affords)

