import json, time
from urllib.request import urlopen
data_str = ''
data_format = []

with open('file.json', 'r') as f:
    data_str = json.load(f)

print(data_str)
data_format = json.dumps(data_str, indent=1)
print(data_format)

while True:
      with urlopen("http://api.open-notify.org/iss-now.json") as resp:
        sourse = json.loads(resp.read())
        print(sourse)
      time.sleep(5)
data_format=json.dumps(sourse, indent=2)
print(data_format)
