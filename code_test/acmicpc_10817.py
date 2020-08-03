data = list(input().split(" "))
for i in range(len(data)):
    data[i] = int(data[i])
print(int(sorted(data)[-2]))
