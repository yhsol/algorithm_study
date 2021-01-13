board = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [
    0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]]
moves = [1, 5, 3, 5, 1, 2, 1, 4]


def filter(board):
    for i in board:
        for j in i:
            if j == 0:
                i.pop(0)
    return board


print(filter(board))


def solution(board, moves):
    answer = 0
    box = []
    for i in moves:
        selectShell = board[i-1]
        if len(box) == 0:
            print("initial", selectShell[-1])
            box.append(selectShell[-1])
            selectShell.pop()
        elif selectShell[-1] != box[-1]:
            print("append", selectShell[-1])
            box.append(selectShell[-1])
            selectShell.pop()
        elif selectShell[-1] == box[-1]:
            print("bomb", selectShell[-1])
            box.pop()
            selectShell.pop()
            answer += 1
    return box


# print(solution(board, moves))
