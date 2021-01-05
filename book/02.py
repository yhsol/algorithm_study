# 최댓값 찾기

arr = [5, 4, 3, 2, 1, 6, 7, 8, 9, 10]


def find_max_method(arr):
    return max(arr)


def find_max(arr):
    n = len(arr)
    max = arr[0]
    for i in range(n - 1):
        for j in range(i+1, n):
            print("find_max")
            if max < arr[j]:
                max = arr[j]
    return max


def find_max_2(arr):
    max = arr[0]
    for i in range(1, len(arr)):
        print("find_max_2")
        if max < arr[i]:
            max = arr[i]
    return max


def find_max_index(arr):
    max_index = 0
    for i in range(1, len(arr)):
        if arr[max_index] < arr[i]:
            max_index = i
    return max_index


def find_min_index(arr):
    min_index = 0
    for i in range(1, len(arr)):
        if arr[min_index] > arr[i]:
            min_index = i
    return min_index


print("index: ", find_min_index(arr), "value: ", arr[find_min_index(arr)])
