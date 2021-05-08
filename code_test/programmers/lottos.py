dict = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6
}


def solution(lottos, win_nums):
    yes = 0
    zero = 0

    for i in lottos:
        if i == 0:
            zero += 1
        elif i in win_nums:
            yes += 1

    high = dict[yes + zero]
    low = dict[yes]

    return [high, low]


print(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]))
