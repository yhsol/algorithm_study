import collections
import itertools
import re

orders = ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"]
course = [2, 3, 5]
result = ["ACD", "AD", "ADE", "CD", "XYZ"]


# 최소 2명 이상에게 주문
# 오름차순 정렬

# 조합 가능한 수를 다 만들어 놓고 비교해야하나?
# 조합 가능한대로 딕셔너리에 추가하고, count 가 2 이상인 경우에 배열에 담아서 리턴?

# 문제 이해를 잘 못해서 더 어렵게 푼 듯. 전체 가능한 조합을 다 계산함. 문제는 그렇지 않고 문자열 단위로 판단하면 되는 듯.
def solution(orders, course):
    answer = []
    orders_dict = collections.defaultdict(int)

    sorted_orders = []
    orders_combinations = []

    for item in orders:
        sorted_orders.append(sorted(item))

    for item in orders:
        # 가능한 모든 조합. 재귀로 풀어야하나?
        for i in range(len(item) + 1):
            r = i + 2
            if r <= len(item):
                course = list(map("".join, itertools.combinations(item, r)))
                for i in course:
                    orders_dict["".join(sorted(i))] += 1
                    # print(i)
                    # orders_combinations.append(i)

    # print(collections.Counter(orders_combinations))
    print(orders_dict)
    return answer


# def solution(orders, course):
#     answer = []
#     orders_dict = collections.defaultdict(int)
#     for i in orders:
#         for j in orders:
#             # 여기서 비교를 좀 더 다양하게 해야함. abd in abcd -> True 가 되어야함.
#             if i in j and i is not j:
#                 if re.findall
#                 orders_dict["".join(sorted(i))] += 1

#     for i in orders_dict:
#         answer.append(i)

#     return sorted(answer)


solution(orders, course)
