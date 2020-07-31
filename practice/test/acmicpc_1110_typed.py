data = input()
key = data
count = 0
_sum = 0

if int(key) < 10:
    key = "0" + key

while 1:
    _sum = int(key[0]) + int(key[1])
    _sum = str(_sum)
    if int(_sum) < 10:
        _sum = "0" + _sum
    key = key[1] + _sum[1]
    count += 1
    if int(data) == int(key):
        break

print(count)
