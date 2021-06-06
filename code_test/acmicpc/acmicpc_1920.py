import collections

N = int(input())
A = list(map(int, input().split()))
M = int(input())
M_list = list(map(int, input().split()))


def findN(N: int, nums: int) -> int:
    return 1 if N in nums else 0


print(findN(N, arr))

# def BinarySearch(arr, val, low, high):
#     if low > high:
#         return False

#     mid = (low + high) // 2
#     if arr[mid] > val:
#         return BinarySearch(arr, val, low, mid - 1)
#     elif arr[mid] < val:
#         return BinarySearch(arr, val, mid + 1, high)
#     else:
#         return True

# N = int(input())
# A = list(map(int, input().split()))
# M = int(input())
