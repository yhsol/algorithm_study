data = []
for _ in range(10):
    data.append(int(input()))

# print(data)

# data = [39, 40, 41, 42, 43, 44, 82, 83, 84, 85]
rest = []

for i, value in enumerate(data):
    rest_value = value % 42
    rest.append(rest_value)

print(len(set(rest)))
