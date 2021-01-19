import time

start = time.time()

board = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [
    0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]]
moves = [1, 5, 3, 5, 1, 2, 1, 4]


def solution(board, moves):
    answer = 0
    box = []
    print(time.time() - start)
    filtered_board = list(
        map(lambda x: list(filter(lambda y: y != 0, x)), board))
    print(time.time() - start)

    for i in moves:
        print(time.time() - start)
        selectShell = filtered_board[i-1]
        if len(selectShell) == 0:
            continue
        if len(box) == 0:
            box.append(selectShell.pop())
        if selectShell[-1] != box[-1]:
            box.append(selectShell.pop())
        if selectShell[-1] == box[-1]:
            box.pop()
            selectShell.pop()
            answer += 2
    print(time.time() - start)
    return answer


solution(board, moves)
