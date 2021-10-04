from typing import List


def solution(nums: List[int]) -> str:
    str_nums = []
    for item in nums:
        str_nums.append(str(item))

    def fn(x):

        return x[0]

    print(sorted(str_nums, key=fn))


print(solution([6, 10, 2]))
