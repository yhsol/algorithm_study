N = int(input())
a = []
for _ in range(N):
    a.append(int(input()))


def merge_sort(a):
    n = len(a)
    if n <= 1:
        return a

    mid = n // 2
    left = merge_sort(a[:mid])
    right = merge_sort(a[mid:])
    results = []

    while left and right:
        if left[0] < right[0]:
            results.append(left.pop(0))
        else:
            results.append(right.pop(0))

    while left:
        results.append(left.pop(0))
    while right:
        results.append(right.pop(0))

    merge_sort

    return results


result = merge_sort(a)
for i in result:
    print(i)
