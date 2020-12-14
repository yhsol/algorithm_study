T = int(input())

arr = []

for _ in range(T):
    arr.append(input())

isvalid = False

for i in arr:
    rightstack = []
    for j in range(len(i)):
        if i[len(i) - 1 - j] == ")":
            rightstack.append(i)
        if i[len(i) - 1 - j] == "(":
            if len(rightstack) == 0:
                isvalid = False
                break
            rightstack.pop()

        if len(rightstack) == 0:
            isvalid = True

    if isvalid == True:
        print("YES")
    else:
        print("NO")
