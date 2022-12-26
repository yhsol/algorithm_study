class MaxHeap:
    def __init__(self):
        self.data = [None]

    def insert(self, item):
        self.data.append(item)
        index = len(self.data) - 1

        # # while 풀이
        # while index > 1:
        #     parent = index // 2
        #     if self.data[index] > self.data[parent]:
        #         self.data[index], self.data[parent] = self.data[parent], self.data[index]
        #         index = parent
        #     else:
        #         break

        # for 풀이
        for _ in self.data:
            parent = index // 2
            if index and parent and index > 1:
                if self.data[index] > self.data[parent]:
                    self.data[index], self.data[parent] = self.data[parent], self.data[index]
                    index = parent
                else:
                    break

    def remove(self):
        if len(self.data) > 1:
            self.data[1], self.data[-1] = self.data[-1], self.data[1]
            data = self.data.pop(-1)
            self.maxHeapify(1)
        else:
            data = None
        return data

    def maxHeapify(self, i):
        left = 2 * i
        right = 2 * i + 1
        smallest = i
        print(self.data, smallest, left, right)
        if left < len(self.data) and self.data[left] > self.data[smallest]:
            print('left: ', left)
            smallest = left
        if right < len(self.data) and self.data[right] > self.data[smallest]:
            print('right: ', right)
            smallest = right
        if smallest != i:
            print('swap')
            self.data[i], self.data[smallest] = self.data[smallest], self.data[i]
            self.maxHeapify(smallest)


H = MaxHeap()
H.insert(3)
H.insert(2)
H.insert(5)
H.insert(1)
H.insert(4)
H.remove()
