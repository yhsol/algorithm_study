import sys

a = [int(sys.stdin.readline())
     for i in range(int(sys.stdin.readline()))]


def merge_sort(a):
    n = len(a)
    if n <= 1:
        return

    mid = n // 2
    left = a[:mid]
    right = a[mid:]
    merge_sort(left)
    merge_sort(right)
    i_left = 0
    i_right = 0
    i_a = 0

    while i_left < len(left) and i_right < len(right):
        if left[i_left] < right[i_right]:
            a[i_a] = left[i_left]
            i_left += 1
            i_a = + 1
        else:
            a[i_a] = right[i_right]
            i_right += 1
            i_a += 1

    while i_left < len(left):
        a[i_a] = left[i_left]
        i_left += 1
        i_a += 1
    while i_right < len(right):
        a[i_a] = right[i_right]
        i_right += 1
        i_a += 1


merge_sort(a)
for i in a:
    print(i)
