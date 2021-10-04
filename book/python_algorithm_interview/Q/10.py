from typing import List


def list_partition(nums: List[int]) -> int:
    nums.sort()
    result = 0
    for i, v in enumerate(nums):
        if i % 2 == 0:
            result += v
    return result


def arrayPairSumPythonic(nums: List[int]) -> int:
    return sum(sorted(nums)[::2])


print(arrayPairSumPythonic([1, 4, 3, 2]))
