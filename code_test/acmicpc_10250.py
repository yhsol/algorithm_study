H, W, N = list(map(int, input().split(" ")))

Y = 0
count = 0

for i in range(1, W+1):
    for j in range(1, H+1):
        Y = str(i)
        if (i < 10):
            Y = "0" + Y
        count += 1
        if count > N - 1:
            print(str(j) + Y)
            break
    if count > N - 1:
        break
