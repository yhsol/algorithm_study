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


print(sumTwoNumInBook3([2, 7, 11, 15], 9))
