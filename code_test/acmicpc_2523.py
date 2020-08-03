N = int(input())

length = 2 * N - 1
printstar = []

for i in range(length + 1):
    if i <= N:
        printstar.append("*" * i)
    else:
        printstar.append("*" * (N - (i-N)))

for i in range(1, len(printstar)):
    print(printstar[i])
