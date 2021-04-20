def stepOne(new_id: str) -> str:
    return new_id.lower()


def stepTwo(new_id: str) -> str:
    allowed = ["-", "_", "."]
    result = ''
    for i in new_id:
        if i in allowed or i.isalnum() == True:
            result += i
    return result


def stepThree(new_id: str) -> str:
    result = ''
    for i in range(len(new_id)):
        if len(result) and result[-1] == "." and new_id[i] == ".":
            pass
        else:
            result += new_id[i]
    return result


def stepFour(new_id: str) -> str:
    result = new_id
    if new_id[0] == "." or new_id[-1] == ".":
        if new_id[0] == ".":
            result = result[1:]
        if new_id[-1] == ".":
            result = result[:-1]
        return result
    else:
        return new_id


def stepFive(new_id: str) -> str:
    if new_id == "":
        return "a"
    else:
        return new_id


def stepSix(new_id: str) -> str:
    if len(new_id) >= 16:
        return stepFour(new_id[:15])
    else:
        return new_id


def stepSeven(new_id: str) -> str:
    result = new_id
    last = new_id[-1]
    if len(result) <= 2:
        while len(result) < 3:
            result += last
    return result


def solution(new_id: str) -> str:
    answer = ''
    one = stepOne(new_id)
    two = stepTwo(one)
    three = stepThree(two)
    four = stepFour(three)
    five = stepFive(four)
    six = stepSix(five)
    seven = stepSeven(six)
    return seven


print(solution('abcdefghijklmn.p'))
