class Door():
    def __init__(self, is_opened) -> None:
            self.is_opened=False
    def open_door(self):
          print("Door open")
          self.is_opened=True
    def close_door(self):
          print("Door close")
          self.is_opened=False
            
class BlockedDoor(Door):
    def open(self):
          func_name=open.__name__
          raise TypeError(f"{func_name} Block door can not be opened!")
    def close(self):
          # func_name=open.__name__
          raise TypeError(f"{func_name} Block door can not be opened!")

blocked=BlockedDoor
blocked.open()