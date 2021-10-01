from typing import List

# 앗 요렇게 풀려면 정렬돼있어야 함
# 내부에서 정렬을 하면 인덱스가 꼬여서 또 안됨


def solution(nums: List[int], target: int) -> List[int]:
    front, rear = 0, len(nums) - 1
    result = []

    while front < rear:
        sum = nums[front] + nums[rear]

        if sum < target:
            front += 1
        elif sum > target:
            rear -= 1
        else:
            result = [front, rear]
            break

    return result


def solution_2(nums: List[int], target: int) -> List[int]:
    for i, v in enumerate(nums):
        rest = target - v

        if rest in nums:
            return [i, nums.index(rest)]


def solution_3(nums: List[int], target: int) -> List[int]:
    for i, v in enumerate(nums):
        rest = target - v
        compare_list = nums[i+1:]
        if rest in compare_list:
            return [i, compare_list.index(rest) + (i+1)]


def solution_4(nums: List[int], target: int) -> List[int]:
    nums_dict = {}

    # v 를 key 로, i 를 value 로 갖는 dict 구성
    for i, v in enumerate(nums):
        nums_dict[v] = i

    for i, v in enumerate(nums):
        if target - v in nums_dict and i != nums_dict[target-v]:
            return [i, nums_dict[target-v]]


def solution_5(nums: List[int], target: int) -> List[int]:
    nums_map = {}

    for i, v in enumerate(nums):
        if target - v in nums_map:
            return [nums_map[target-v], i]
        nums_map[v] = i


print(solution_5([2, 7, 11, 15], 9))
