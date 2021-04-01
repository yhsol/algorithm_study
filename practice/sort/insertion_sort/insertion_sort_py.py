def insertion_sort(a):
    n = len(a)
    for i in range(n):
        j = i
        while j > 0 and a[j - 1] > a[j]:
            a[j - 1], a[j] = a[j], a[j - 1]
            j -= 1


def insertion_sort_2(a):
    for i in range(1, len(a)):
        key = a[i]
        j = i - 1
        while j >= 0 and a[j] > key:
            a[j+1] = a[j]
            j -= 1
            a[j+1] = key


d = [2, 4, 5, 1, 3]
insertion_sort(d)
print(d)
