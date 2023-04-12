import requests
import json
url='https://api.giphy.com/v1/gifs/search'
parametr={'api_key':'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My','q':'love','rating':'g','limit':200}
respose=requests.get(url,params=parametr)
# print(respose.text)
# print(respose.headers)
fd=respose.json()
# d=json.dumps(fd,indent=2)
# print (d)
print(respose.status_code)
print(f"Count: {fd['pagination']['count']}")
print(list(fd))
print(type(fd['data']), len(fd['data']))
print(type(fd['data'][0]), len(fd['data'][0]), fd['data'][0].keys())
print(fd['data'][0]['images']['original']['height'])
print(fd['data'][0]['images']['original']['width'])

for p in fd['data']:
    print (p['images']['original']['url'])
    print (f"Height: {p['images']['original']['height']}, Width: {p['images']['original']['width']}")