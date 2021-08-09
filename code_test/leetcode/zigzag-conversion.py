import collections


def convert(s: str, numRows: int) -> str:
    s_dict = collections.defaultdict(str)
    count = 0
    positive = True
    for i, v in enumerate(s):
        if count == numRows or positive == False:
            count -= 1
        s_dict[count] = s_dict[count] + v
        if positive == True:
            count += 1
            if count == numRows:
                positive = False
        if positive == False and count == 0:
            positive = True

    print(s_dict)


convert("PAHNAPLSIIGYIR", 3)
