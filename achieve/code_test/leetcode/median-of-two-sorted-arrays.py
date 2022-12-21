from typing import List


class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        nums = sorted(nums1 + nums2)
        n = len(nums)
        median_index = (n - 1) // 2

        if n % 2 == 0:
            return (nums[median_index] +
                    nums[median_index + 1]) / 2
        else:
            return nums[median_index]


print(Solution.findMedianSortedArrays(None, [1, 2], [3, 4]))
