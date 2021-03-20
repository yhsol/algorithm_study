def solution(participant, completion):
    answer = ''
    for i in participant:
        if i in completion:
            completion.remove(i)
        elif i not in completion:
            answer = i
    return answer