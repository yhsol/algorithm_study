import math
A, B, V = list(map(int, input().split()))

# print(data)
# (A - B) * (i - 1) + A >= V
# i >= (V - A) // (A - B) + 1
# print(A, B, V)
# A = data[0]
# B = data[1]
# V = data[2]
# if (V - A) % (A - B) == 0:
#     print((V - A) // (A - B) + 1)
# else:
#     print((V - A) // (A - B) + 2)
i = 1
move = A - B
distance = V - A
dalpang = distance / move
# print(math.ceil((V - A)/(A-B)) + 1)
# print(math.ceil((V - A)/(A-B) + 1))
while A != V:
    if i >= dalpang:
        i += 1
        break
    i += 1

print(i)
