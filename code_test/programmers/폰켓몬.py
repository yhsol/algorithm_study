def solution(nums):
    answer = 0
    n = len(nums)
    limit = n // 2
    list = []
    for i in nums:
        if i not in list:
            list.append(i)
    length = len(list)
    if (length < limit):
        answer = length
    else:
        answer = limit
    return answer
