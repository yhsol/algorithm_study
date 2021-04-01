data = input()
a = []
for i in range(len(data)):
    a.append(int(data[i]))
sorted = sorted(a)
sorted.reverse()
result = ""
for i in range(len(sorted)):
    result += str(sorted[i])
print(result)
