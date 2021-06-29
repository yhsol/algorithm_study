class MaxHeap:

    def __init__(self):
        self.data = [None]

    def insert(self, item):
        self.data.append(item)
        index = len(self.data) - 1

        # while 풀이
        while index > 1:
            parent = index // 2
            if self.data[index] > self.data[parent]:
                self.data[index], self.data[parent] = self.data[parent], self.data[index]
                index = parent
            else:
                break

        # for 풀이
        for _ in self.data:
            parent = index // 2
            if index and parent and index > 1:
                if self.data[index] > self.data[parent]:
                    self.data[index], self.data[parent] = self.data[parent], self.data[index]
                    index = parent
                else:
                    break


def solution(x):
    return 0


H = MaxHeap()
H.insert(1)
