import math
from collections import Counter

N = int(input())
a = []

for _ in range(N):
    a.append(int(input()))

# test_a = [4000]


def run(a):
    sum_a = 0
    for i in a:
        sum_a = (sum_a + i)

    average = round(sum_a / N)

    mid = len(a) // 2
    median = sorted(a)[mid]
    test = sorted(a)

    # many = 0
    # many_dict = {}
    # for i in range(0, len(a)):
    #     for j in range(0, len(a)):
    #         if a[i] == a[j]:
    #             if str(a[i]) in many_dict:
    #                 many_dict[str(a[i])] = many_dict[str(a[i])] + 1
    #             else:
    #                 many_dict[str(a[i])] = 1

    many = Counter(sorted(a)).most_common()
    many_num = 0
    if len(many) > 1:
        if many[0][1] == many[1][1]:
            many_num = many[1][0]
    else:
        many_num = many[0][0]
    # print(many)

    # for i in range(0, len(a)):
    # dict 를 반복하면서 정렬하고, 정렬된 키 값을 다시 비교.
    # dict 를 사용하는 방법을 알면 도움될 듯.

    # print(many_dict)

    range_of_a = max(a) - min(a)

    return average, median, many_num, range_of_a


print(run(a))
