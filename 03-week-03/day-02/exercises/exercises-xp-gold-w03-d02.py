class BankAccount():
    def __init__(self, username, password) -> None:
        self.balance = 0
        self.username = username
        self.password = password
        self.authenticated = False

    def deposit(self, value):
        if self.authenticated:
            if value > 0:
                self.balance += value
            else:
                print("The value for contributions must be greater than zero")
        else:
            print("No authentication")

    def withdraw(self, value):
        if self.authenticated:
            if value > 0:
                self.balance -= value
            else:
                print("The value must be greater than zero")
        else:
            print("No authentication")

    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self.authenticated = True
        else:
            print("Authentication failed")


class MinimumBalanceAccount(BankAccount):
    def __init__(self, username, password, minimum_balance=0) -> None:
        super().__init__(username, password)
        self.minimum_balance = minimum_balance

    def withdraw(self, value):
        if self.balance-value > 0:
            super().withdraw(value)
        else:
            print("Insufficient funds for the operation")


class ATM():
    def __init__(self, account_list, try_limit=3) -> None:
        self.curent_try = 0
        self.account_list = [n for n in account_list if isinstance(
            n, BankAccount) or isinstance(n, MinimumBalanceAccount)]
        if len(self.account_list) == 0:
            print("No bank accounts available")
        try:
            if type(try_limit) != int and try_limit < 1:
                raise TryNotNumber
            else:
                self.try_limit = try_limit
        except:
            self.try_limit = 2

    def show_main_menu(self):
        while self.curent_try <= self.try_limit:
            name = input("Enter UN: ")
            pw = input("Password:")
            self.log_in(name, pw)
        exit()

    def search_account(self, name):
        account_found = None
        for account in self.account_list:
            if account.username == name:
                account_found = account
                break
        return account_found
    
    def log_in(self, name, pw):
        user_bank_account = self.search_account(name)

        if user_bank_account:
            if user_bank_account.password == pw:
                self.show_account_menu(name, pw, user_bank_account)
            else:
                self.curent_try += 1

    def show_account_menu(self, name, pw, user_bank_account):
        user_bank_account.authenticate(name,pw)
        chose=0
        while chose!=3:
            chose=input("(1)-deposit  (2) - withdraw   (3) - quit")
        quit()


class TryNotNumber(Exception):
    pass


a = MinimumBalanceAccount('Name1', '1qaz')
a.authenticate('Name1', '1qaz')
a.deposit(500)
a.withdraw(100)
a.withdraw(100)
a.withdraw(400)
print(a.balance)

b = MinimumBalanceAccount('Name2', '1qaz')
b.authenticate('Name2', '1qaz')
b.deposit(500)

c = MinimumBalanceAccount('Name3', '1qaz')
c.authenticate('Name3', '1qaz')
c.deposit(500)


atm=ATM([a,b,c])
atm.show_main_menu()