from typing import List


# Given an integer array nums of 2n integers, 
# group these integers into n pairs (a1, b1), (a2, b2), ..., 
# (an, bn) such that the sum of min(ai, bi) 
# for all i is maximized. 
# Return the maximized sum.

# Explanation: All possible pairings (ignoring the ordering of elements) are:
# 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
# 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
# 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
# So the maximum possible sum is 4.

# 두개씩 묶어 조합을 만들고, 거기서 min 연산 수행.
# min 연산 수행의 값을 다 더했을 때 가장 큰 수가 나오도록 알고리즘.
# 그러려면, min 의 값을 크게 만들어야함.
# 정렬해서 차례대로 묶어주면 될 듯.
# 근데 이러면 애초에 min 연산 수행할 필요 없이
# 정렬하고, 홀수번째 수들을 더해주면 될 듯.
# 홀수번째니까, 배열 인덱스에서는 짝수번 인덱스.

class Solution(object):
    def arrayPairSum(self, nums: List[int]) -> int:
        results = 0

        nums.sort()

        for i, v in enumerate(nums):
            if (i % 2 == 0):
                results += v

        return results
    
    def arrayPairSumPythonic(self, nums):
        return sum(sorted(nums)[::2])

nums = [1,4,3,2]
print(Solution().arrayPairSum(nums))

# => 4