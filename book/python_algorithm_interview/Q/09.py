from typing import List

# brute force


def three_num_for_zero(nums: List[int]) -> List[List[int]]:
    result = []
    n = len(nums)

    for i in range(n-2):
        for j in range(i+1, n-1):
            for k in range(j+1, n):
                if nums[i] + nums[j] + nums[k] == 0:
                    key_nums = sorted([nums[i], nums[j], nums[k]])
                    if key_nums not in result:
                        result.append(key_nums)

    return result


def threeSum(nums: List[int]) -> List[List[int]]:
    results = []
    nums.sort()

    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i-1]:
            continue
        for j in range(i+1, len(nums) - 1):
            if j > i + 1 and nums[j] == nums[j-1]:
                continue
            for k in range(j+1, len(nums)):
                if k > j + 1 and nums[k] == nums[k-1]:
                    continue
                if nums[i] + nums[j] + nums[k] == 0:
                    results.append([nums[i], nums[j], nums[k]])

    return results

# two pointer


def threeSumTwoPointer(nums: List[int]) -> List[List[int]]:
    results = []
    nums.sort()

    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue

        left, right = i + 1, len(nums) - 1

        while left < right:
            sum = nums[i] + nums[left] + nums[right]
            if sum < 0:
                left += 1
            elif sum > 0:
                right -= 1
            else:
                results.append([nums[i], nums[left], nums[right]])

                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                while left < right and nums[right] == nums[right - 1]:
                    right += 1
                left += 1
                right -= 1

    return results


print(threeSumTwoPointer([-1, 0, 1, 2, -1, -4]))
