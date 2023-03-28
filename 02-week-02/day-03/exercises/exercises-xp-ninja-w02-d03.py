# --------- Exercise 01 ------------
print("\nExercise 01")
moto_breand="Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
breand_set={}
breand_list=[]
breand_list=moto_breand.split(', ')
print(breand_list)
print(f"The are {len(breand_list)} brends")
breand_list.sort()
print(breand_list[::-1])
print("Brends with 'o':", len([br for br in breand_list if 'o'in br]))
print("Brends with out 'i':", len([br for br in breand_list if not 'i'in br]))
breand_list=["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
breand_set=set(breand_list)
breand_list=list(breand_set)
print(breand_list)
a=" ".join(breand_list)
print(f"{', '.join(breand_list)}. Total {len(breand_list)} breands")
breand_list.sort()
print(', '.join([br[::-1] for br in breand_list]))

