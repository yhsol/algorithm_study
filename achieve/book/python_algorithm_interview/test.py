class ListNode:
    def __init__(self, item):
        self.val = item
        self.next = None

def insertionSortList(self, head: ListNode) -> ListNode:
    curr = parent = ListNode(0)
    while head:
        while curr.next and curr.next.val < head.val:
            curr = curr.next
        
        curr.next, head.next, head = head, curr.next, head.next

        if head and curr.val > head.val:
            curr = parent
    
    return curr.next

def to_swap(n1: int, n2: int) -> bool:
    return str(n1) + str(n2) < str(n2) + str(n1)

# i <- 1
# while i < length(A)
#     j <- i
#     while j > 0 and A[j-1] > A[j]
#         swap A[j] and A[j-1]
#         j <- j - 1
#         end while
#         i <- j + 1
#     end while

# def largestNumber(self, number: List[int]) -> str:
#     i = 1
#     while i < len(nums):
#         j = i
#         while j > 0 and self.to_swap(nums[j-1], nums[j]):
#             nums[j], nums[j-1] = nums[j-1], nums[j]
#             j -= 1
#         i += 1

class Solution:
    # 문제에 적합한 비교 함수
    @staticmethod
    def to_swap(n1: int, n2: int) -> bool:
        return str(n1) + str(n2) < str(n2) + str(n1)
    
    # 삽입 정렬 구현
    def largestNumber(self, nums: List[int]) -> str:
        i = 1
        while i < len(nums):
            j = i
            while j > 0 and self.to_swap(nums[j-1], nums[j]):
                nums[j], nums[j-1] = nums[j-1], nums[j]
                j -= 1
            i += 1

        return str(int(''.join(map(str, nums))))

def anagram(s: str, t: str) -> bool:
    return sorted(s) == sorted(t)

# three-way-partition(A: array of values, mid: value):
#     i <- 0
#     j <- 0
#     k <- size of A

#     while j < k:
#         if A[j] < mid:
#             swap A[i] and A[j]
#             i <- i + 1
#             j <- j + 1
#         else if A[j] > mid:
#             k <- k - 1
#             swap A[j] and A[k]
#         else:
#             j <- j + 1

def sortColors(self, nums: List[int]) -> None:
    red, white, blue = 0, 0, len(nums)

    while white < blue:
        if nums[white] < 1:
            nums[red], nums[white] = nums[white], nums[red]
            white += 1
            red += 1
        elif nums[white] > 1:
            blue -= 1
            nums[white], nums[blue] = nums[blue], nums[white]
        else:
            white += 1
            