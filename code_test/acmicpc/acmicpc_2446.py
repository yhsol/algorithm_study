N = int(input())

printlist = []
line = 2*N-1
num = line

for i in range(line):
    if i < N:
        printlist.append(" " * i + "*" * num)
        num -= 2
    else:
        if i == N:
            num += 2
        num += 2
        printlist.append(" " * (line - i - 1) + "*" * num)

for i in range(0, len(printlist)):
    print(printlist[i])
