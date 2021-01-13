N = int(input())

arr = []

for _ in range(N):
    arr.append(int(input()))


def selection_sort(arr):
    n = len(arr)
    for i in range(n-1):
        min_idx = i
        for j in range(i+1, n):
            if arr[min_idx] > arr[j]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]

    for i in arr:
        print(i)

    return arr


selection_sort(arr)
