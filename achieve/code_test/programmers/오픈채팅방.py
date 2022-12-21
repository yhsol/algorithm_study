# uid 별로 dict 를 만들어서 정리하고 바로 치환할 수 있게 하면 좋을 듯?

# 맞는 uid 찾아서 해당 name 다 바꿔줘야 할 듯
# 그러려면 uid 기반으로 매핑되어 있어야 하긴 함.
# 어떻게 매핑을 하는게 좋을까
# 객체 형태로 들고있는다고 하면..
# uid 랑 name 만 묶여있으면 되긴하겠다.
# 일단 이름을 바꾸고, 문장은 다시 다른 반복문을 해봐야하나..

from typing import List

STATUS = {
    "Leave": "Leave",
    "Change": "Change",
    "Enter": "Enter"
}

ACTION_BY_STATUS = {
    "Leave": "님이 나갔습니다.",
    "Enter": "님이 들어왔습니다."
}


def solution(record: List[str]) -> List[str]:
    answer = []
    uid_dict = {}  # dict = {[uid]: uid: str, name: str}

    # 전체 반복하면서 이름 설정
    for item in record:
        splited = item.split(" ")
        status = splited[0]

        if status != STATUS["Leave"]:
            uid = splited[1]
            name = splited[2] if len(splited) > 2 else ''

            uid_dict[uid] = {
                "name": name
            }

    # 전체 반복하면서 문장 생성
    for item in record:
        splited = item.split(" ")
        status = splited[0]
        uid = splited[1]

        if status != STATUS["Change"]:
            answer.append(uid_dict[uid]['name'] + ACTION_BY_STATUS[status])

    return answer


record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo",
          "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]

# result = ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]

print(solution(record))

# print("Enter uid1234 Muzi".split(" "))
