d = {"justin": 10, "john": 20, "mike": 30}
d["summer"] = 40
# print(d)
d["summer"] = 50
# print(d)

list = ["mike", "tome", "mike"]


# 반복문이 겹치지 않고 따로 작동하기 때문에 O(n) 에 해당하게 된다.
# 반복문이 여러번 나올 때는 서로 겹치느냐 겹치지 않느냐에 따라 계산 복잡도가 많이 달라진다.
def same_name(list):
    name_dict = {}
    for i in list:
        if i in name_dict:
            name_dict[i] += 1
        else:
            name_dict[i] = 1
    result = set()
    for i in name_dict:
        if name_dict[i] >= 2:
            result.add(i)
    return result


print(same_name(list))
