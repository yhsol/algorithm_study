a = []
for _ in range(9):
    a.append(int(input()))
maxvalue = max(a)
maxindex = 0

for i in range(9):
    if maxvalue == a[i]:
        maxindex = i


print(maxvalue)
print(maxindex + 1)
