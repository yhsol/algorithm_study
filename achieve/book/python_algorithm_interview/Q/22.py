from typing import List


def daily_temperatures_1(temp: List[int]) -> List[int]:
    result = []

    for i in range(len(temp)):
        day = 0
        for j in range(i+1, len(temp)):
            if temp[i] < temp[j]:
                day = j - i
                break
        result.append(day)
    return result


def daily_temperatures_2(T: List[int]) -> List[int]:
    temp = []
    result = []
    # result 에 index 로 값 추가할 수 있게 자리 만들기
    for i in T:
        result.append(0)

    # 한번은 반복을 하면서 살펴보긴 해야함(아마도?)
    for i in range(len(T)):
        # 조건을 걸고 필요한 데이터 추출
        while len(temp) > 0 and T[temp[-1]] < T[i]:
            result[temp[-1]] = i - temp[-1]
            temp.pop()
        # 반복이 끝나고 나면 다시 temp 에 값 추가
        # 위의 while 을 안타더라도 그 경우에도 추가
        # 그러면 temp 에 있는 값들은 값은 현재 값보다 큼
        temp.append(i)
    # 아직 temp 에 남아있는 값이 있을 수 있으나 그 값들은 더 큰 값을 못찾은 값이기 때문에 0이 되게 됨.
    # result 에 먼저 0을 채워뒀기 때문에 그대로 둘 수 있음
    return result


print(daily_temperatures_2([73, 74, 75, 71, 69, 72, 76, 73]))
