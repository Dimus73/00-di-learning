import psycopg2


class MenuItem:
    __connection = ""
    __table_name = ""

    @classmethod
    def set_db_connection(cls, hostname, username, password, database, table_name):
        cls.__connection = psycopg2.connect(
            host=hostname, user=username, password=password, dbname=database)
        cls.__table_name = table_name

    @classmethod
    def check_for_item(cls, name) -> bool:
        query = f"select * from {cls.__table_name} where name = '{name}'"
        with cls.__connection.cursor() as cursor:
            cursor.execute(query)
            result = cursor.fetchall()
            if result:
                return True
            else:
                return False

    @classmethod
    def load_data(cls) -> list:
        query = f"select name, price from {cls.__table_name}"
        with cls.__connection.cursor() as cursor:
            cursor.execute(query)
            result = cursor.fetchall()
        return result

    def __init__(self, name, price) -> None:
        self.name = name
        self.price = price

    def save(self)->bool:
        if not self.check_for_item(self.name):
            query = f"INSERT INTO {self.__table_name} (name,price) VALUES ('{self.name}', {self.price})"
            with self.__connection.cursor() as cursor:
                cursor.execute(query)
                self.__connection.commit()
            return True
        else:
            return False
        
    def delete(self):
        if self.check_for_item(self.name):
            query=f"DELETE FROM {self.__table_name} WHERE name='{self.name}'"
            with self.__connection.cursor() as c:
                c.execute(query)
                self.__connection.commit()
            return True
        else:
            return False 
    def update(self):
        if self.check_for_item(self.name):
            query=f"UPDATE {self.__table_name} SET price={self.price} WHERE name='{self.name}'"
            with self.__connection.cursor() as c:
                c.execute(query)
                self.__connection.commit()
            return True
        else:
            return False 


if __name__ == "__main__":
    MenuItem.set_db_connection(
        'localhost', 'dmitryprigozhin', '', 'exer-w04-d04', 'items')
    a=MenuItem('Burger1',60)
    b=MenuItem('Burger2',160)
    c=MenuItem('Burger3',260)
    a.save()
    b.save()
    c.save()
    l=MenuItem.load_data()
    print(l)
