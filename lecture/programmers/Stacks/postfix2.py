class ArrayStack:

    def __init__(self):
        self.data = []

    def size(self):
        return len(self.data)

    def isEmpty(self):
        return self.size() == 0

    def push(self, item):
        self.data.append(item)

    def pop(self):
        return self.data.pop()

    def peek(self):
        return self.data[-1]


prec = {
    '*': 3, '/': 3,
    '+': 2, '-': 2,
    '(': 1
}

S = "(A+B)*(C+D) + 1"


def valid(S):
    answer = ""
    for i in S:
        if i != " " and not i.isdigit():
            answer += i
    return answer


def solution(S):
    opStack = ArrayStack()
    prec_list = ["*", "/", "+", "-", "(", ")"]

    answer = ''

    # [v] 블로그를 찾다가 공백과 숫자를 제거해야 한다는 글을 보고 구현했으나
    # 현재 알고리즘 문제에서는 조건에 맞지않게 구성 된 수식은 주어지지 않는다고 가정했어서
    # valid 작업이 필요하진 않았다.
    # 하지만 공백이나 숫자를 제거하는 과정이 재밌었어서 남겨둔다.
    S = valid(S)

    print("S:", S)
    print("valid: ", valid(S))

    for i in S:
        if i not in prec_list:  # 피연산자
            answer += i
        else:
            if opStack.isEmpty():  # stack 이 비었을 때
                opStack.push(i)
            elif i == "(":
                opStack.push(i)
            elif "(" in opStack.data:
                if i != ")":
                    opStack.push(i)
                elif i == ")":
                    reversed_Stack = reversed(opStack.data)
                    for j in reversed_Stack:
                        if j != "(":
                            answer += opStack.pop()
                        else:
                            opStack.pop()
                            break
            else:   # 연산자
                peeked = opStack.peek()
                if prec[i] <= prec[peeked]:
                    # [v] 비교하려는 연산자가 스택에 있는 연산자보다 작을 때,
                    # 한번 만 비교하는 게 아니라 그 다음 연산자와도 계속 비교해야함.
                    # 기존에는 한번만 비교를 해서 실패
                    # while 조건을 추가해서 통과
                    while prec[i] <= prec[peeked] and not opStack.isEmpty():
                        answer += opStack.pop()
                    opStack.push(i)
                else:
                    prec[i] > prec[peeked]
                    opStack.push(i)

    while not opStack.isEmpty():
        for i in opStack.data:
            answer += opStack.pop()

    return answer


print(solution(S))
