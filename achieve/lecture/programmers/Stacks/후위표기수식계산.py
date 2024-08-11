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


def splitTokens(exprStr):
    tokens = []
    val = 0
    valProcessing = False
    for c in exprStr:
        if c == ' ':
            continue
        if c in '0123456789':
            val = val * 10 + int(c)
            valProcessing = True
        else:
            if valProcessing:
                tokens.append(val)
                val = 0
            valProcessing = False
            tokens.append(c)
    if valProcessing:
        tokens.append(val)

    return tokens


def infixToPostfix(tokenList):
    prec = {
        '*': 3,
        '/': 3,
        '+': 2,
        '-': 2,
        '(': 1,
    }

    opStack = ArrayStack()
    prec_list = ["*", "/", "+", "-", "(", ")"]

    answer = ''

    postfixList = []

    for i in tokenList:
        if i not in prec_list:  # 피연산자
            # answer += i
            postfixList.append(i)
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
                            # answer += opStack.pop()
                            postfixList.append(opStack.pop())
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
                        # answer += opStack.pop()
                        postfixList.append(opStack.pop())
                    opStack.push(i)
                else:
                    prec[i] > prec[peeked]
                    opStack.push(i)

    while not opStack.isEmpty():
        for i in opStack.data:
            # answer += opStack.pop()
            postfixList.append(opStack.pop())

    return postfixList


def calc(valStack):
    second = valStack.pop()
    first = valStack.pop()
    return first, second


def postfixEval(tokenList):
    valStack = ArrayStack()

    print(tokenList)
    # [1, 2, '+', 3, 4, '+', '*']
    for token in tokenList:
        print(valStack.data)

        if type(token) is int:
            valStack.push(token)
        elif token == "*":
            first, second = calc(valStack)
            valStack.push(first * second)
        elif token == "/":
            first, second = calc(valStack)
            valStack.push(first / second)
        elif token == "+":
            first, second = calc(valStack)
            valStack.push(first + second)
        elif token == "-":
            first, second = calc(valStack)
            valStack.push(first - second)
    return valStack.pop()


def solution(expr):
    tokens = splitTokens(expr)
    postfix = infixToPostfix(tokens)
    val = postfixEval(postfix)
    return val


print(solution('(1 + 2) * (3 + 4)'))
