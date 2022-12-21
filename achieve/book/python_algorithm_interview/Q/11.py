from typing import List


def solution(nums: List[int]) -> List[int]:
    results = []
    for i in range(len(nums)):
        left, right = 0, len(nums) - 1
        left_multiple, right_multiple = 1, 1
        while left < i:
            left_multiple *= nums[left]
            left += 1
        while right > i:
            right_multiple *= nums[right]
            right -= 1
        results.append(left_multiple * right_multiple)
    return results


def productExceptSelf(nums: List[int]) -> List[int]:
    out = []
    p = 1
    for i in range(0, len(nums)):
        out.append(p)
        p = p * nums[i]

    p = 1
    for i in range(len(nums) - 1, 0 - 1, -1):
        out[i] = out[i] * p
        p = p * nums[i]

    return out


print(solution([1, 2, 3, 4]))
