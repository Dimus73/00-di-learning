import psycopg2


HOSTNAME = 'localhost'
USERNAME = 'dmitryprigozhin'
PASSWORD = ''
DATABASE = 'dvdrental'

connection = psycopg2.connect(
    host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE)
# cursor=connection.cursor()
query = "select fulltext from film limit 5"
# cursor.execute(qwery)
# result=cursor.fetchall()
# print(result)
# connection.close()


def select_columns(columns: list[str], table_name: str) -> str:
    query = 'SELECT '
    for p in columns:
        query+=(p + ', ')
    query=query[0:-2]
    query+= ' FROM ' + table_name + ";"
    return query


with connection.cursor() as cursor:
    cursor.execute(query)
    result = cursor.fetchall()
# print(result)
for k, p in enumerate(result):
    print(f'************ RECORD: {k+1} ****************')
    for n in p:
        print(n)
        
l=['film_id', 'title', 'col1']
ss=select_columns(l,'films')
print('\n\n',ss,'\n\n')

def run_change(ddd):
    with connection.cursor() as cursor:
        cursor.execute(ddd)
        connection.commit()
