arr = list(input().split("."))

for i in arr:
    small = 0
    big = 0

    stack = []
    for j in i:
        stack.append(j)

    if stack.pop == ")":
        small += 1
    elif stack.pop == "(":
        small -= 1
    elif stack.pop == "]":
        big += 1
    elif stack.pop == "[":
        big -= 1

    if small == 0 and big == 0:
        print("yes")
    else:
        print("no")
