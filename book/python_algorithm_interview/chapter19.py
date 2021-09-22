from typing import List


def single_number(nums: List[int]) -> int:
    result = 0
    for num in nums:
        result ^= num
    return result


def single_number_two(nums: List[int]) -> int:
    result = 0
    for i, v in enumerate(nums):
        if i < len(nums) / 2:
            result += v
        else:
            result -= v
    return abs(result)


print(
    single_number_two([4, 1, 2, 1, 2, 5, 5])
)
