arr = []

for _ in range(2):
    arr.append(int(input()))


def find_position(arr):
    x, y = arr
    if x > 0 and y > 0:
        return print(1)
    elif x < 0 and y > 0:
        return print(2)
    elif x < 0 and y < 0:
        return print(3)
    elif x > 0 and y < 0:
        return print(4)


find_position(arr)
