from typing import List
import collections


def solution(participant, completion):
    answer = ''
    part_dict = {}
    comp_dict = {}
    for part in participant:
        if part in part_dict:
            part_dict[part] += 1
        else:
            part_dict[part] = 0

    for comp in completion:
        if comp in comp_dict:
            comp_dict[comp] += 1
        else:
            comp_dict[comp] = 0

    for i in participant:
        if i not in comp_dict:
            return i
        elif part_dict[i] != comp_dict[i]:
            return i


def solution2(participant, completion):
    answer = ''
    part_dict = {}
    for part in participant:
        if part in part_dict:
            part_dict[part] += 1
        else:
            part_dict[part] = 1

    for comp in completion:
        if comp not in part_dict:
            return comp
        else:
            part_dict[comp] -= 1

    for i in part_dict:
        if part_dict[i] != 0:
            return i


def solution3(participant: List[int], completion: List[int]):
    participant_dict = collections.Counter(participant)
    completion_dict = collections.Counter(completion)
    answer = participant_dict - completion_dict
    return list(answer.keys())[0]


participant = ["kiki", "kiki", "eden"]
completion = ["eden", "kiki"]
print(solution3(participant, completion))
