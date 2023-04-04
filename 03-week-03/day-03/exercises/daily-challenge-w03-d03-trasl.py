from deep_translator import GoogleTranslator
french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"] 
trans_dict={}
for p in french_words:
	translated = GoogleTranslator(source='french', target='en').translate(p)
	print(translated)
	trans_dict[p]=translated
print (trans_dict)
