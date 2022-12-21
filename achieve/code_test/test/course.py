from typing import List
from itertools import combinations


def solution(orders: List[str], course: List[int]) -> List[str]:
    answer = ''
    comb = []

    comb = list(combinations("ABCD", 2))

    print(comb)

    return answer


solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
