def merge_sort(a):
    n = len(a)
    # 종료 조건
    # 배열의 크기가 1 이하이면 정렬할 필요가 없음
    if n <= 1:
        return a

    # 반으로 나눈 몫을 사용
    mid = n // 2
    # mid 값을 기준으로 두 조각으로 자료를 복사해 리스트를 만듬
    left = merge_sort(a[:mid])
    right = merge_sort(a[mid:])
    result = []

    # 양쪽 조각의 모두 값이 있는 동안 비교 진행
    while left and right:
        if left[0] < right[0]:
            result.append(left.pop(0))
        else:
            result.append(right.pop(0))

    # 한쪽의 정렬이 완료된 경우 다른 조각의 나머지 값을 그대로 배열에 삽입
    while left:
        result.append(left.pop(0))
    while right:
        result.append(right.pop(0))

    return result


d = [2, 4, 5, 1, 3]
print(merge_sort(d))
