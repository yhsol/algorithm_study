from typing import List


def find_min_idx(arr):
    n = len(arr)
    min_idx = 0
    for i in range(1, n):
        if arr[i] < arr[min_idx]:
            min_idx = i
    return min_idx


def selection_sort(arr: List[int]) -> List[int]:
    result = []
    while arr:
        min_idx = find_min_idx(arr)
        value = arr.pop(min_idx)
        result.append(value)

    return result


def sel_sort(a: List[int]) -> List[int]:
    n = len(a)
    for i in range(0, n-1):
        min_idx = i
        for j in range(i+1, n):
            if a[j] < a[min_idx]:
                min_idx = j
        a[i], a[min_idx] = a[min_idx], a[i]
    return a


d = [2, 4, 5, 1, 3]
print(sel_sort(d))
