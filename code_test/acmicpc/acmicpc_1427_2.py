data = input()
a = []
for i in range(len(data)):
    a.append(int(data[i]))
sorted_a = sorted(a)
sorted_a.reverse()
result = ""
for i in range(len(data)):
    result = result + str(sorted_a[i])
print(result)
