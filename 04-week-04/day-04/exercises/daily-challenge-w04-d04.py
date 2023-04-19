import requests
import json
import psycopg2
import random

HOSTNAME = 'localhost'
USERNAME = 'dmitryprigozhin'  # postgres
PASSWORD = ''
DATABASE = 'exer-w04-d04'
TABLENAME = 'contry'

with open('contry_code.txt', 'r') as f:
    contry_code = f.read()
contry_code = contry_code.split(',')

recvest_count = 10
iteration_count = 0
contry_info_list = []
while recvest_count > 0:
    iteration_count += 1
    req_str = 'https://restcountries.com/v3.1/alpha/' + \
        contry_code[random.randint(0, len(contry_code)-1)]
    # print(req_str)
    respons = requests.get(req_str)
    if respons.status_code != 200:
        if iteration_count > 100:
            print('Unable to get data from the server. The program has been stopped.')
            exit()
        continue
    data = respons.text
    c = json.loads(data)
    contry_info_list.append({'name': c[0]['name']['common'],
                             'capital': c[0]['capital'][0],
                             'flag': c[0]['flags']['png'],
                             'subregion': c[0]['subregion'],
                             'population': int(c[0]['population'])})
    recvest_count -= 1
print("\nRandomly, we have chosen the following 10 countries:\n")
for p in contry_info_list:
    print(p['name'])

connection = psycopg2.connect(
    host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE)
with connection.cursor() as cur:
    for p in contry_info_list:
        query = f"INSERT INTO {TABLENAME} (\"name\", capital, \"flag\", subregion, population) " + \
                          f"VALUES ('{p['name']}','{p['capital']}','{p['flag']}','{p['subregion']}',{p['population']})"
        # print(query)
        cur.execute(query)
        connection.commit()
print("\n\nData written to the database")
