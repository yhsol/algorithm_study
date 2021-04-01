N = int(input())

arr = []

for _ in range(N):
    arr.append(input())


def run(arr):
    for i in arr:
        sum = 0
        num = 0

        for j in range(len(i) - 1):
            if i[j] == "O" and i[j+1] == "O":
                num += 1
                sum += num
            elif i[j] == "O":
                sum += 1
            elif i[j] == "X":
                num = 0
        print("sum: ", sum)

        # for j in range(len(i) - 1):
        #     for k in range(j+1, len(i)):
        #         if i[j] == i[k]:
        #             print("key: ", i[j], "-", i[k])
        #             print("same")
        #         else:
        #             print("different")


print(run(arr))
