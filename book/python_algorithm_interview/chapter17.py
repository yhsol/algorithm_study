from typing import List


def fifty_nine(inputs: List[List[int]]) -> List[List[int]]:
    for item in inputs:
        item.sort()

    for i in range(len(inputs) - 1):
        for j in range(i + 1, len(inputs)):
            if inputs[i] and inputs[j]:
                if inputs[i][-1] > inputs[j][0]:
                    inputs[i] = [inputs[i][0], max(inputs[i][-1], inputs[j][-1])]
                    inputs[j] = None

    for i in range(len(inputs) - 1):
        if not inputs[i]:
            inputs.pop(i)

    return inputs


def merge(intervals: List[List[int]]) -> List[List[int]]:
    merged = []
    for i in sorted(intervals, key=lambda x: x[0]):
        if merged and i[0] <= merged[-1][1]:
            # 오 위의 풀이는 이 과정이 없었어서 아마 통과 안됐을 듯.
            # 추가함.
            merged[-1][1] = max(merged[-1][1], i[1])
        else:
            merged += (i,)
    return merged


def biggest_num(inputs: List[int]) -> str:
    # 첫번째 시도 hs
    # nums = []
    # for item in inputs:
    #     nums.append(str(item))

    # 여기에 더해서, 앞자리 수가 같을 경우 두자리 이상의 숫자에서 두번째 자리 숫자가 첫번재 자리 숫자보다 크면
    # 그 숫자가 앞에 와야함
    # sorted 를 해버리지 말고 반복문을 돌면서 스트링 붙여나가는 방식으로 해야되려나?
    # sorted_nums = sorted(nums, key=lambda x: x[0])[::-1]
    # print(sorted_nums)

    # 두번째 시도 hs
    # str_nums = []
    # for item in inputs:
    #     str_item = str(item)
    #     if len(str_nums) == 0:
    #         str_nums.append(str_item)
    #     else:
    #         # 흠.. 반복이 어쩔 수 없이 한번 더 필요한건가....
    #         if str_item[0] > str_nums[-1][0]

    # 세번째 시도 hs
    # str_nums = []
    # for i in range(len(inputs) - 1):
    #     for j in range(i+1, len(inputs)):
    #         max = str(inputs(i))
    #         # 일단 배열에 값이 없으면 채움 hs
    #         if len(str_nums) == 0:
    #             str_nums.append(max)
    #         else:
    #             if max

    # 첫번째 시도를 활용한 네번째 시도 hs
    nums = []
    for item in inputs:
        nums.append(str(item))

    # 여기에 더해서, 앞자리 수가 같을 경우 두자리 이상의 숫자에서 두번째 자리 숫자가 첫번재 자리 숫자보다 크면
    # 그 숫자가 앞에 와야함
    # sorted 를 해버리지 말고 반복문을 돌면서 스트링 붙여나가는 방식으로 해야되려나?
    sorted_nums = sorted(nums, key=lambda x: x[0])[::-1]

    temp = []

    for i in range(len(sorted_nums) - 1):
        for j in range(i + 1, len(sorted_nums)):
            if sorted_nums[i][0] == sorted_nums[j][0]:
                if len(sorted_nums[j]) > 1:
                    if sorted_nums[i][0] < sorted_nums[j][1]:
                        print("here 1")
                        temp.insert(0, sorted_nums[j][1])
                if len(sorted_nums[i]) > 1:
                    if sorted_nums[j][0] < sorted_nums[i][1]:
                        print("here 2")
                        temp.insert(0)

    print(sorted_nums)

    return ""


print(biggest_num([3, 30, 34, 5, 9]))
