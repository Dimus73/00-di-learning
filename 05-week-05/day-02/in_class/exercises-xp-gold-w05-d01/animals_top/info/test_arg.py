def test_f(aa=1,bb="ww",cc=4):
    print (f"aa={aa},  bb={bb},  cc={cc}")

test_f()
test_f(aa=10,bb="??",cc=40)

args={'aa':100,'bb':'**','cc':400}
# print (type(args))

test_f(**args)

