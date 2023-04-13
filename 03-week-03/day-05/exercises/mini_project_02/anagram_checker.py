import string


class AnagramChecker():
    def __init__(self) -> None:
        self.anag_list = []
        # with open('sowpods.txt','r') as f:
        with open('/Users/dmitryprigozhin/Desktop/DevIns/00-di-learning/03-week-03/day-05/exercises/mini_project_02/sowpods.txt', 'r') as f:
            for line in f:
                self.anag_list.append(line[:-1])

    @staticmethod
    def is_valid_word(word):
        test_word=word
        good_word = True
        if len(test_word.split()) > 1:
            print("Only one word can be entered")
            good_word = False
        if len(test_word) != sum([i in string.ascii_uppercase for i in test_word]):
            print(
                "Only alphabetic characters are allowed. No numbers or special characters")
            good_word = False
        return good_word

    def get_anagrams(self, word):
        char_set = set(word)
        anagr_list = self.anag_list
        char_dict = {i: word.count(i) for i in char_set}
        anagr_list = [i for i in anagr_list if len(i) == len(word)]
        for k, v in char_dict.items():
            anagr_list = [i for i in anagr_list if i.count(k) == v]
        anagr_list = [i for i in anagr_list if i != word]
        return anagr_list


if __name__ == "__MAIN__":
    a = AnagramChecker()
    print(a.get_anagrams('TABLE'))
    a = '123456'
    print(a[:-1])
