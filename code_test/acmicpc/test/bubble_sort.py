arr = [5, 4, 3, 2, 1]


def bubble_sort(arr):
    n = len(arr) - 1
    for i in range(n):
        print("i: ", i, "arr[i]: ", arr[i])
        for j in range(n - i):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

    return arr


def bubble_sort_2(arr):
    n = len(arr)
    for i in range(n-1):
        for j in range(n - 1 - i):
            if arr[j] > arr[j+1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

    return arr


def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i+1, n):
            if arr[min_idx] > arr[j]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]

    print("arr: ", arr)
    return arr


print("bubble_sort_2: ", bubble_sort_2(arr))
print("selection_sort: ", selection_sort(arr))
