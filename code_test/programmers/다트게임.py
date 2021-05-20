def solution(dartResult):
    queue = []
    calced_queue = []
    bonused_queue = []
    answer = 0
    star = 0
    sharp = 0

    for item in dartResult:
        print(calced_queue)
        if item in ['S', 'D', 'T']:  # 연산
            # 큐에서 꺼내서 작업
            # 큐에서 꺼내서 작업하고 다시 큐에 담아놔야 할 듯?
            if item == 'S':
                calced_queue.append(queue.pop() * 1)
            if item == 'D':
                calced_queue.append(queue.pop() * 2)
            if item == 'T':
                calced_queue.append(queue.pop() * 3)
        elif item in ['*', '#']:  # 보너스
            # 큐에서 꺼내서 작업
            if item == '*':
                if calced_queue:
                    if star:
                        bonused_queue.append(calced_queue.pop() * 2 * 2)
                    if sharp:
                        bonused_queue.append(calced_queue.pop() * -2 * -2)
                    else:
                        bonused_queue.append(calced_queue.pop() * 2)
                calced_queue.append(calced_queue.pop() * 2)
                star += 1
            if item == '#':
                if calced_queue:
                    queue.append(calced_queue.pop() * -2)
                queue.append(queue.pop() * 2)
        else:   # 숫자
            if calced_queue:
                answer += int(calced_queue.pop())
            if bonused_queue:
                answer += int(bonused_queue.pop())
            queue.append(int(item))
    return answer


print(solution('1S2D*3T'))
