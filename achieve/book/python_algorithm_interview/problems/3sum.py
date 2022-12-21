def F(nums):
    nums.sort()
    res = []

    for curr in range(len(nums)-1):
        # 양수/중복스킵
        if (nums[curr] > 0) or (curr > 0 and nums[curr] == nums[curr-1]):
            continue

        left, right = curr+1, len(nums)-1
        while left < right:

            # right 중복스킵
            if right < len(nums)-1 and nums[right] == nums[right+1]:
                right -= 1
                continue

            # left 중복스킵 (하지만 시작 시점에서는 스킵 제외)
            if left > curr+1 and nums[left] == nums[left-1]:
                left += 1
                continue

            # 투포인터
            curSum = nums[curr]+nums[left]+nums[right]
            if curSum == 0:
                res.append([nums[curr], nums[left], nums[right]])
                left += 1
                right -= 1
            elif curSum < 0:
                left += 1
            else:
                right -= 1

    return res


nums = [-5, -5, -4, -4, -2, -2, 0, 0, 0, 1, 1, 1, 3, 4, 4]
print("result: ", F(nums))
# => [[-5, 1, 4], [-4, 0, 4], [-4, 1, 3], [-2, -2, 4], [-2, 1, 1], [0, 0, 0]]
