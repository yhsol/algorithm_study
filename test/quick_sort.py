def partition(arr, start, end):
    pivot = arr[start]
    left = start + 1
    right = end
    done = False
    while not done:
        while left <= right and arr[left] <= pivot:
            left += 1
        while left <= right and pivot <= arr[right]:
            right -= 1
        if right < left:
            done = True
        else:
            arr[left], arr[right] = arr[right], arr[left]
        arr[start], arr[right] = arr[right], arr[start]
        return right


def quick_sort(arr, start, end):
    if start < end:
        pivot = partition(arr, start, end)
        quick_sort(arr, start, pivot - 1)
        quick_sort(arr, pivot + 1, end)
    return arr


def quick_sort_2(a, left, right):
    if (left >= right):
        return

    key = left
    i = left + 1
    j = right

    while (i <= j):
        while (i <= right and a[i] < a[key]):
            i += 1
        while (j > left and a[j] >= a[key]):
            j -= 1
        if (i > j):
            a[j], a[key] = a[key], a[j]
        else:
            a[i], a[j] = a[j], a[i]

    quick_sort_2(a, left, j - 1)
    quick_sort_2(a, j + 1, right)
