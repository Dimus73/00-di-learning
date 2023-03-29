import datetime
import calendar
from datetime import date
bd=input("Enter your birthdate DD/MM/YYYY:")
dd=int(bd[0:2])
mm=int(bd[3:5])
yy=int(bd[6:10])
born=datetime.date(yy,mm,dd)
today = date.today()
years=today.year - born.year - ((today.month, today.day) < (born.month, born.day))
candls=0
if years%10!=0:
    candls=years%10
else:
    candls=10
candls_string="    " + '_'*int((11-candls)/2) + 'i'*candls + '_'*(11-int((11-candls)/2)-candls)
cake_list=['    ___iiiii___    ','   |:H:a:p:p:y:|   ',' __|___________|__ ','|^^^^^^^^^^^^^^^^^|','|:B:i:r:t:h:d:a:y:|','|                 |','~~~~~~~~~~~~~~~~~~~']
cake_list[0]=candls_string
for i in cake_list:
    print(i)
if calendar.isleap(yy):
    print()
    print()
    for i in cake_list:
        print(i)
