from typing import List


def solution(n: int, lost: List[int], reserve: List[int]) -> int:
    answer = n - len(lost)

    for item in sorted(lost):
        if reserve:
            if item in reserve:
                answer += 1
                reserve.pop(reserve.index(item))
            elif item + 1 in reserve:
                answer += 1
                reserve.pop(reserve.index(item+1))
            elif item - 1 in reserve:
                answer += 1
                reserve.pop(reserve.index(item-1))

    return answer


print(solution(5, [2, 4], [1, 3, 5]))
