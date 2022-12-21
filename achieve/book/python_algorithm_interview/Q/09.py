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

def threeSumTest(nums: List[int]) -> List[List[int]]:
    results = []
    nums.sort()

    for i, v in enumerate(nums):
        # 첫번째 자리의 중복을 피하기 위해 이전에 검사한 값과 같을 경우 건너뛴다.
        if i > 0 and nums[i-1] == v:
            continue

        l, r = i+1, len(nums) - 1

        while l < r:
            threeSum = v + nums[l] + nums[r]

            # 합이 0 보다 작으면 l 을 올려서 합을 키운다.
            if threeSum < 0:
                l += 1
            # 합이 0 보다 크면 r 을 낮춰서 합을 줄인다.
            elif threeSum > 0:
                r -= 1
            else:
                # 합이 0 일 경우 결과 배열에 담는다.
                results.append([v, nums[l], nums[r]])

                # l, r 값이 중복일 경우 다시 검사할 필요 없기 때문에 while 을 통해 건너뛴다.
                while l < r and nums[l] == nums[l-1]:
                    l += 1
                while l < r and nums[r] == nums[r+1]:
                    r -= 1
                
                # 어차피 0 을 만들어야하고, l, r 중 하나에 따라 다른 한쪽도 고정되기 때문에 둘 다 옮겨줘도 된다.
                l += 1
                r -= 1
    
    return results