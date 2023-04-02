class Phone:
    number = ""
    # call_history = []
    # mes_history = []
    mes_history_keys = ['to', 'from', 'text']

    def __init__(self, number) -> None:
        self.number = number
        self.call_history = []
        self.mes_history = []

    def call(self, call_phone):
        self.call_history.append(call_phone)
        print(f"Calling to {call_phone.number}")

    def show_call_history(self):
        print("You have call to:")
        for p in self.call_history:
            print(p.number)
            
    def send_message(self, message_phone, message):
        self.mes_history.append(dict(zip(self.mes_history_keys,[message_phone.number, self.number, message])))
        message_phone.mes_history.append(dict(zip(self.mes_history_keys,[message_phone.number, self.number, message])))
        a=2
        
    def show_outgoing_messages(self):
        print("Outgoing message (to, from,number): ")
        for p in self.mes_history:
            if p['from']==self.number:
                print (p['to'], p['from'],p['text'])

    def show_incoming_messages(self):
        print("Incomming message (to, from,number): ")
        for p in self.mes_history:
            if p['to']==self.number:
                print (p['to'], p['from'], p['text'])


my_n=Phone('0552942465')
num1=Phone('0552942466')
num2=Phone('0552942467')
num3=Phone('0552942468')
num4=Phone('0552942469')

my_n.call(num1)
my_n.call(num1)
my_n.call(num2)
my_n.call(num3)
my_n.call(num4)
my_n.call(num2)
my_n.show_call_history()


my_n.send_message(num2,"text text0 text text text")
my_n.send_message(num3,"text text1 text text text")
my_n.send_message(num4,"text text2 text text text")
my_n.send_message(num2,"text text3 text text text")
my_n.show_outgoing_messages()

num1.send_message(my_n,"ddd text0 text text text")
my_n.show_incoming_messages()

print(id(my_n.mes_history),id(num1.mes_history),id(num2.mes_history))
