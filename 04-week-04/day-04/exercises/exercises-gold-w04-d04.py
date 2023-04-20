import psycopg2

HOSTNAME = 'localhost'
USERNAME = 'dmitryprigozhin'  # postgres
PASSWORD = ''
DATABASE = 'exer-w04-d04'
TABLENAME = 'users'


def load_data(connection):
    print(id(connection), TABLENAME)
    with connection.cursor() as cur:
        cur.execute(f'SELECT login,pw FROM {TABLENAME}')
        result=cur.fetchall()
    # for p in result:
    #     users=dict(result)
    return dict(result)

def add_user_to_base(connection, login, pw):
    with connection.cursor() as cur:
        cur.execute(f"INSERT INTO {TABLENAME} (login, pw) VALUES ('{login}','{pw}')")
        connection.commit()

connection=psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE)
users=load_data(connection)
# users={'Login1':'pw001','Login2':'pw002','Login3':'pw003'}
while True:
    enter=input("Enter login or exit: ")
    if enter == 'exit':
        break
    elif enter == 'login':
        login=input('Enter login: ')
        pw=input('Enter passwod: ')
        if login in users.keys():
            if users[login] == pw:
                print("You have successfully logged in")
                logged_in=login
        else:
            like_singup=input("Would you like to register? (y/n): ")
            if like_singup == 'y':
                pw=input("Please enter your new password: ")
                add_user_to_base(connection,login,pw)
                print("Account created successfully.")

    