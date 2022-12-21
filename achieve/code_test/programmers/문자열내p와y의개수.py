def solution(s):
    answer = True

    text = s.lower()
    p = 0
    y = 0

    for i in text:
        if i == "p":
            p += 1
        if i == "y":
            y += 1

    if (p == y):
        answer = True
    else:
        answer = False

    return answer
