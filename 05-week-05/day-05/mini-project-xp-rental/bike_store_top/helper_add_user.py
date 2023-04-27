import os
import django
from faker import Faker
import random
import datetime

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bike_store.settings')
django.setup()

from rent.models import *


faker = Faker()

# This for rnd peaple
# if __name__ == '__main__':
#     i=0
#     while i<100:
#         n=faker.name().split()
#         p = faker.phone_number()
#         print (i, n[0], n[1], p)
#         try:
#             a=Customer(first_name=n[0],
#                     last_name=n[1],
#                     email=faker.email(),
#                     phone_number = p,
#                     address = faker.address(),
#                     city = faker.city(),
#                     country = faker.country())
#             a.save()
#             i+=1
#         except TypeError:
#             pass

# This is for vehicle
# vt = VehicleType.objects.all()
# vs = VehicleSize.objects.all()
# v_count=0

# for t in vt:
#     for s in vs:
#         v_count=random.randint(3,6)
#         for c in range(v_count):
#             d1=datetime.datetime.strptime('2019-01-01', '%Y-%m-%d')
#             d2=datetime.datetime.strptime('2023-01-01', '%Y-%m-%d')
#             v_date=faker.date_between(d1.date(), d2.date())
#             v_price=random.randint(1000,5000)
#             v = Vehicle(vehicle_type=t, date_created=v_date, real_cost=v_price, size=s)
#             v.save()
#             print(t, v_date, v_price, s)

# This is for rents


def is_d_in(d_f, d_t, d_check):
    return True if d_f <= d_check <= d_t else False


d1 = datetime.datetime.strptime('2019-01-01', '%Y-%m-%d')
d2 = datetime.datetime.strptime('2023-04-15', '%Y-%m-%d')
customer_list = Customer.objects.all()
vehicle_list = Vehicle.objects.all()
k_s=0
for v in vehicle_list:
    rent_count = random.randint(1, 5)
    i = 0
    is_rent_end = True if random.randint(0, 7) > 0 else False

    while i < rent_count:
        flag = True
        end_rent_flag = True

        start_rent = faker.date_between(v.date_created, d2.date())
        end_rent = start_rent + datetime.timedelta(days = random.randint(1, 10))
        customer_rent = random.choice(customer_list)

        v_rent_list = Rental.objects.filter(vehicle=v)
        for vrl in v_rent_list:
            if vrl.return_date is None:
                flag = False if (vrl.rental_date < start_rent) or (
                    vrl.rental_date < end_rent) else True
            else:
                flag = False if is_d_in(vrl.rental_date, vrl.return_date, start_rent) or is_d_in(
                    vrl.rental_date, vrl.return_date, end_rent) else True
            end_rent_flag = False if start_rent < vrl.rental_date else True

        c_rent_list = Rental.objects.filter(customer=customer_rent)
        for crl in c_rent_list:
            if crl.return_date is None:
                flag = False if (crl.rental_date < start_rent) or (
                    crl.rental_date < end_rent) else True
            else:
                flag = False if is_d_in(crl.rental_date, crl.return_date, start_rent) or is_d_in(
                    crl.rental_date, crl.return_date, end_rent) else True
            end_rent_flag = False if start_rent < crl.rental_date else True

        flag = False if v.date_created < start_rent else True

        flag = False if not is_rent_end and not end_rent_flag else True
        k_s += 1
        if flag:
            r = Rental(rental_date=start_rent, return_date = end_rent if is_rent_end else None,
                       customer=customer_rent, vehicle=v)
            r.save()
            print(is_rent_end, end_rent_flag, k_s, start_rent, end_rent if is_rent_end else None, customer_rent, v)
            i+=1

