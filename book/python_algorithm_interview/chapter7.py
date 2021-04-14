from typing import List


def sumTwoNum(nums: List[int], target: int) -> List[int]:
    for i in range(0, len(nums) - 1):
        for j in range(i+1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]


def sumTwoNumInBook(nums: List[int], target: int) -> List[int]:
    # 와우
    # enumerate 를 쓰면 index 랑 item 을 쓸 수 있게 구성해줌
    for i, n in enumerate(nums):
        complement = target - n

        if complement in nums[i + 1:]:
            return [nums.index(n), nums[i + 1:].index(complement) + (i + 1)]


def sumTwoNumInBook2(nums: List[int], target: int) -> List[int]:
    nums_map = {}
    for index, value in enumerate(nums):
        nums_map[value] = index

    for index, value in enumerate(nums):
        if target - value in nums_map and index != nums_map[target-value]:
            return [index, nums_map[target - value]]


def sumTwoNumInBook3(nums: List[int], target: int) -> List[int]:
    nums_map = {}
    for index, value in enumerate(nums):
        if target - value in nums_map:
            return [nums_map[target - value], index]
        nums_map[value] = index


def raindrop(heights: List[int]) -> int:
    result = 0
    pass_num = 0
    for i in range(0, len(heights) - 1):
        # 비교를 시작할 '현재 변수'를 찾기 위해 그 전까지는 pass 를 실행
        if i < pass_num:
            continue
        else:
            # 현재 높이가 다음 높이보다 높거나, 같은 동안 반복
            if heights[i] >= heights[i+1]:
                # 현재 높이 다음 높이부터 반복을 시작하고 마지막은 그걸 감쌀 높이가 없기 때문에 제외
                for j in range(i+1, len(heights) - 1):
                    if heights[i] > heights[j]:
                        # 현재 높이가 최고 높이일 경우 그걸 감쌀 수 없기 때문에 제외
                        if heights[i] is max(heights) and i != 0 and i != len(heights) - 1:
                            pass
                        else:
                            print(heights[i], heights[j])
                            # 현재 높이에서 비교 대상의 높이를 뺀 값을 결과에 더함
                            # 현재 높이가 배열의 최고 높이일 경우 감쌀 수 있는 범위는 그 다음으로 큰 높이 만큼이기 때문에
                            # 현재 높이(최고 높이) - 비교 높이 - (최고 높이와 다음 최고 높이의 차이) 를 해줘야 감쌀 수 있는 범위 만큼을 설정할 수 있음.
                            diff = heights[i] - heights[j]
                            if heights[i] is max(heights):
                                diff_second = heights[i] - \
                                    sorted(heights[i:], reverse=True)[0]
                                diff = diff - diff_second
                            result += diff
                    else:
                        # 현재 높이보다 높은 높이를 만났을 때 다음 현재 높이는 그 높이가 될 수 있도록 값을 지정해 줌
                        # 이렇게 해주는 이유는 반복 변수 i 를 조작할 수 없어서인데,
                        # 예를 들어 자바스크립트의 for 문 같이 `let i` 와 같이 사용한다면 i 의 값을 바로 늘렸을 것.
                        # 파이썬에서 이것을 하는 방법을 몰라서 pass_num 이라는 변수를 생성해서 비슷하게 동작하도록 구현
                        pass_num = j
                        break

    return result


# 투 포인터
def trap(height: List[int]) -> int:
    if not height:
        return 0

    volume = 0
    left, right = 0, len(height) - 1
    left_max, right_max = height[left], height[right]

    while left < right:
        left_max, right_max = max(height[left], left_max), max(
            height[right], right_max)

        if left_max <= right_max:
            print('left_max <= right_max: ', left_max, right_max,
                  height[left], left_max - height[left])
            volume += left_max - height[left]
            left += 1
        else:
            print('else: ', left_max, right_max,
                  height[right], right_max - height[right])
            volume += right_max - height[right]
            right -= 1

    return volume


# 스택
def trap2(height: List[int]) -> int:
    stack = []
    volume = 0

    for i in range(len(height)):
        while stack and height[i] > height[stack[-1]]:
            top = stack.pop()

            if not len(stack):
                break

            distance = i - stack[-1] - 1
            waters = min(height[i], height[stack[-1]]) - height[top]

            volume += distance * waters

        stack.append(i)
    return volume


def sumThreeNum(nums: List[int]) -> List[List[int]]:
    nums.sort()
    size = len(nums)
    results = []

    for i in range(0, size-2):
        if i > 0 and nums[i] == nums[i-1]:
            continue
        for j in range(i+1, size-1):
            if j > i+1 and nums[j] == nums[j-1]:
                continue
            for k in range(j+1, size):
                if k > j+1 and nums[k] == nums[k-1]:
                    continue
                if nums[i] + nums[j] + nums[k] == 0:
                    results.append([nums[i], nums[j], nums[k]])
    return results


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


def threeSumTwoPointer(nums: List[int]) -> List[List[int]]:
    results = []
    nums.sort()

    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i-1]:
            continue

        left, right = i+1, len(nums)-1
        while left < right:
            sum = nums[i] + nums[left] + nums[right]
            if sum < 0:
                left += 1
            elif sum > 0:
                right -= 1
            else:
                results.append([nums[i], nums[left], nums[right]])

                # 움직일 때 중복값이 있다면 중복값이 있는 만큼 중복값은 건너뛰고 이동
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1
                left += 1
                right -= 1

    return results


def test(nums: List[int]) -> List[List[int]]:
    results = []
    nums.sort()

    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i-1]:
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
                    right -= 1

                left += 1
                right -= 1

    return results


def arrayPartition(arr: List[int]) -> int:
    arr.sort()
    result = 0
    for i in range(len(arr)):
        if i % 2 != 0:
            continue
        else:
            result += arr[i]

    return result


def arrayParitionBook(nums: List[int]) -> int:
    sum = 0
    pair = []
    nums.sort()

    for n in nums:
        pair.append(n)
        if len(pair) == 2:
            sum += min(pair)
            pair = []

    return sum


def arrayPartitionBook2(nums: List[int]) -> int:
    sum = 0
    nums.sort()

    for i, n in enumerate(nums):
        if i % 2 == 0:
            sum += n

    return sum


def arrayPartitionBook3(nums: List[int]) -> int:
    return sum(sorted(nums)[::2])


def multipleOthers(nums: List[int]) -> List[int]:
    results = []
    for i in range(len(nums)):
        rest = nums[:]
        rest.pop(i)
        mult = 1
        for v in rest:
            mult *= v
        results.append(mult)
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


def stock(nums: List[int]) -> List[int]:
    result = 0
    for i in range(len(nums) - 1):
        for j in range(i+1, len(nums)):
            if nums[j] - nums[i] > result:
                result = nums[j] - nums[i]
    return result


print(stock([7, 1, 5, 3, 6, 4]))
