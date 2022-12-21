# info
# 각 요소는 공백으로 구분
# lang = cpp | java | python
# group = backend | frontend
# career = junior | senior
# soulfood = chicken | pizza
# score = 1 <= x <= 10000

# query
# 'and' 로 구분
# '-' 표시는 해당 조건을 고려하지 않겠다는 의미

# query 를 분류하고, includes 를 활용하면 되지 않으려나?
# 리스트에 담아서 비교하고 있는데 뭔가 잘 안됨. 복잡하기도 하고
# 딕셔너리에 담아서 해야되나


def solution(info, query):
    answer = []

    info_list = []
    query_list = []

    # for i in info:
    #     splited_info = i.split(" ")
    #     info_dict = {}
    #     for index, item in enumerate(splited_info):
    #         info_dict[index] = item
    #     info_list.append(info_dict)

    for i in query:
        splited_by_and = i.split("and")  # 각 조건 분리
        query_dict = {}
        for index, item in enumerate(splited_by_and):  # 쿼리 딕셔너리 생성
            if index == 3:  # 소울 푸드랑 점수 구분
                soulfood_and_score = item.strip().split(" ")
                query_dict[3] = soulfood_and_score[0]
                query_dict[4] = soulfood_and_score[1]
            else:
                query_dict[index] = item.strip()
        query_list.append(query_dict)  # 생성한 쿼리 딕셔너리를 리스트에 추가

    for query_item in query_list:
        passed = 0
        for info_item in info:
            if query_item[0] == "-" or query_item[0] in info_item:
                if query_item[1] == "-" or query_item[1] in info_item:
                    if query_item[2] == "-" or query_item[2] in info_item:
                        if query_item[3] == "-" or query_item[3] in info_item:
                            if query_item[4] == "-" or int(query_item[4]) <= int(info_item.split(" ")[-1]):
                                passed += 1
            # if condition:
            #     passed += 1
        answer.append(passed)

    print(answer)
    return answer


# def solution(info: List[str], query: List[str]) -> List[int]:
#     answer = []

#     splited_query = []

#     for i in query:
#         query = []
#         splited_by_and = i.split("and")  # 각 조건 분리
#         for index, item in enumerate(splited_by_and):
#             if index == len(splited_by_and) - 1:  # 소울 푸드랑 점수 구분
#                 for item in item.split(" "):
#                     query.append(item.strip())
#             else:
#                 query.append(item.strip())
#         splited_query.append(query)

#     for conditions in splited_query:
#         qualified_info = info[:]
#         for condition_index, condition_item in enumerate(conditions):
#             for info_index, info_item in enumerate(qualified_info):
#                 if condition_item == "-":
#                     pass
#                 elif condition_index == 5:  # 숫자 비교
#                     if int(info_item[-3:]) > int(condition_item):
#                         # print(int(info_item[-3:]), int(condition_item))
#                         qualified_info.pop(info_index)
#                 else:
#                     if condition_item not in info_item:
#                         qualified_info.pop(info_index)
#         # print(conditions, len(qualified_info))

#     return answer


info = ["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150",
        "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"]

query = ["java and backend and junior and pizza 100", "python and frontend and senior and chicken 200",
         "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100", "- and - and - and - 150"]

solution(info, query)
