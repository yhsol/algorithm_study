from typing import List

def fifty_nine(inputs: List[List[int]]) -> List[List[int]]:
    for item in inputs:
        item.sort()
    
    for i in range(len(inputs) - 1):
        for j in range(i+1, len(inputs)):
            if inputs[i] and inputs[j]:
                if inputs[i][-1] > inputs[j][0]:
                    inputs[i] = [inputs[i][0], inputs[j][-1]]
                    inputs[j] = None

    for i in range(len(inputs) - 1):
        if not inputs[i]:
            inputs.pop(i)

    return inputs

print(fifty_nine([[1,3],[2,6],[8,10],[15,18]]))