def merge_sort_2(a):
    n = len(a)
    if n <= 1:
        return

    mid = n // 2
    left = a[:mid]
    right = a[mid:]
    merge_sort_2(left)
    merge_sort_2(right)
    i_left = 0
    i_right = 0
    i_a = 0

    # 각 조각에 값이 남아있는 동안
    while i_left < len(left) and i_right < len(right):
        # 각 조각의 앞자리 값을 비교해 작은 값을 결과 배열에 삽입
        # 이동이 있었던 조각의 index 를 다음 자리로 옮기고,
        # 결과 배열의 index 도 다음 자리로 옮긴다.

        if left[i_left] < right[i_right]:
            a[i_a] = left[i_left]
            i_left += 1
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


d = [2, 4, 5, 1, 3]
merge_sort_2(d)
print(d)
