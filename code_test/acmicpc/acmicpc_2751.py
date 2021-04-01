N = int(input())
a = []

for _ in range(N):
    a.append(int(input()))


def quick_sort(a, i_left, i_right):
    if i_left >= i_right:
        return

    key = i_left
    i = i_left + 1
    j = i_right

    while i <= j:
        while (i <= i_right and a[i] < a[key]):
            i += 1
        while (j >= i_left and a[j] > a[key]):
            j -= 1
        if (i > j):
            a[key], a[j] = a[j], a[key]
        else:
            a[i], a[j] = a[j], a[i]
    quick_sort(a, i_left, j - 1)
    quick_sort(a, j + 1, i_right)


quick_sort(a, 0, len(a) - 1)

for i in a:
    print(i)
