data = input()
a = []
for i in range(len(data)):
    a.append(data[i])
a = list(map(int, a))
sorted = sorted(a)
result = ""
for i in range(len(sorted)):
    result += str(sorted[i])

print(result)
