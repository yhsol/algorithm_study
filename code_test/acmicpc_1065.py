N = int(input())


def solve(data):
    result = []
    for i in range(1, data + 1):
        if len(str(i)) > 1:
            if str(i)[0] == str(i)[1]:
                result.append(i)
        else:
            result.append(i)
    return len(result)


print(solve(N))
