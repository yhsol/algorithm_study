T = int(input())

arr = []

for _ in range(T):
    arr.append(list(input()))


def validation_checker(arr):
    for i in arr:
        if i[0] == "(" and i[-1] == ")":
            print("YES")
        else:
            print("NO")


validation_checker(arr)


def validation_checker(arr):
    for x in arr:
        close_cnt = 0

        while(len(x) != 0):
            if (close_cnt < 0):
                break
            res = x.pop()

            if(res == "("):
                close_cnt -= 1
            if (res == ")"):
                close_cnt += 1

        if (close_cnt == 0):
            print("YES")
        else:
            print("NO")


# validation_checker(arr)
