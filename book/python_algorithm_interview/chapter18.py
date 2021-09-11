from typing import List, Set
import bisect

def search_recurcive(nums: List[int], target: int) -> int:
    def binary_search(left, right):
        if left <= right:
            mid = (left + right) // 2
            
            if nums[mid] < target:
                return binary_search(mid+1, right)
            elif nums[mid] > target:
                return binary_search(left, mid - 1)
            else:
                return mid
        
        else:
            return -1

    return binary_search(0, len(nums) - 1)

def search_loop(nums: List[int], target: int) -> int:
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2

        if nums[mid] < target:
            left += 1
        elif nums[mid] > target:
            right = mid - 1
        else:
            return mid
    return -1

def search_bisect(nums: List[int], target: int) -> int:
    index = bisect.bisect_left(nums, target)

    if index < len(nums) and nums[index] == target:
        return index
    else:
        return -1

def search_index(nums: List[int], target: int) -> int:
    try:
        return nums.index(target)
    except ValueError:
        return -1

def search_pivot(nums: List[int], target: int) -> int:
    # 예외 처리
    if not nums:
        return -1

    # 최솟값을 찾아 피벗 설정
    left, right = 0, len(nums) - 1
    while left < right:
        mid = left + (right - left) // 2

        if nums[mid] > nums[right]:
            left = mid + 1
        else:
            right = mid
    pivot = left

    # 피벗 기준 이진 검색
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = left + (right - left) // 2
        mid_pivot = (mid + pivot) % len(nums)

        if nums[mid_pivot] < target:
            left = mid + 1
        elif nums[mid_pivot] > target:
            right = mid - 1
        else:
            return mid_pivot

    return -1

def intersection(nums1: List[int], nums2: List[int]) -> List[int]:
    result: Set = set()
    for n1 in nums1:
        for n2 in nums2:
            if n1 == n2:
                result.add(n1)

    return result 

def intersection_bs(nums1: List[int], nums2: List[int]) -> List[int]:
    result: Set = set()
    nums2.sort()
    for n1 in nums1:
        # 이진 검색으로 일치 여부 판별
        i2 = bisect.bisect_left(nums2, n1)
        if len(nums2) > 0 and len(nums2) > i2 and n1 == nums2[i2]:
            result.add(n1)

    return result

def intersection_two_pointer(nums1: List[int], nums2: List[int]) -> List[int]:
    result: Set = set()
    # 양쪽 모두 정렬
    nums1.sort()
    nums2.sort()
    i = j = 0

    # 투 포인터 우측으로 이동하여 일치 여부 판별
    while i < len(nums1) and j < len(nums1):
        if nums1[i] > nums2[j]:
            j += 1
        elif nums1[i] < nums2[j]:
            i += 1
        else:
            result.add(nums1[i])
            i += 1
            j += 1
    return result

def two_sum(numbers: List[int], target: int) -> List[int]:
    start = 0
    end = len(numbers) - 1

    while (numbers[start] + numbers[end] != target):
        if numbers[start] + numbers[end] > target:
            end -= 1
        elif numbers[start] + numbers[end] < target:
            start += 1
        
        if (numbers[start] + numbers[end] == target):
            return [start + 1, end + 1]
    return -1

def two_sum_in_book(numbers: List[int], target: int) -> List[int]:
    left, right = 0, len(numbers) - 1
    while not left == right:
        if numbers[left] + numbers[right] < target:
            left += 1
        elif numbers[left] + numbers[right] > target:
            right -= 1
        else:
            return [left + 1, right + 1]

print(two_sum([2,7,11,15], 9))
