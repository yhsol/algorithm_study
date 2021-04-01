def bubble_sort(a):
    n = len(a)
    for i in range(0, n):
        for j in range(0, n-1-i):
            print(j)
            if a[j] > a[j+1]:
                a[j], a[j+1] = a[j+1], a[j]
    for i in range(0, len(a)):
        print(a[i])


d = [2, 4, 5, 1, 3]
bubble_sort(d)
