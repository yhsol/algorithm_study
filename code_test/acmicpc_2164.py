N = int(input())

arr = []

for i in range(1, N+1):
    arr.append(i)


def find_last_card(arr):
    n = arr
    while len(n) > 1:
        n.pop(0)
        x = n.pop(0)
        n.append(x)
    return n[0]


print(find_last_card(arr))
