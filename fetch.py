import requests
data = requests.get("https://api.github.com/users/techishant/repos").json()
# print(data[0].keys())

for i in data[0].keys():
    print(i,"--> ", data[0][i])