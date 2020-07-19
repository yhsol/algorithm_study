def quick_sort_py(a, left, right):
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

    quick_sort_py(a, left, j - 1)
    quick_sort_py(a, j + 1, right)


d = [2, 9, 6, 4, 5, 7, 10, 1, 3, 8]
quick_sort_py(d, 0, len(d) - 1)
print(d)
