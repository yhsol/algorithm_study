from typing import List


def production_of_array_except_self(input_data: List[int]) -> List[int]:
    results = []
    for i, iv in enumerate(input_data):
        multiples = 1
        for j, jv in enumerate(input_data):
            if j != i:
                multiples *= jv
        results.append(multiples)
    return results


def productionOfArrayExceptSelf(nums: List[int]):
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


print(production_of_array_except_self([1, 2, 3, 4]))
