N = int(input())

def get_sum(s):
    result = 0
    for i in s:
        if i >= "0" and i <= "9":
            result += int(i)
    return result

arr = []

for _ in range(N):
    arr.append(input())

arr.sort(key=lambda data: (len(data), get_sum(data), data))

for i in arr:
    print(i)
