from typing import List

class Solution:
    def trap(self, height: List[int]) -> int:
        if not height: return 0

        result = 0
        left, right = 0, len(height) - 1
        maxL, maxR = height[left], height[right]

        while left < right:
            value = 0
            if maxL < maxR:
                left += 1
                value = maxL - height[left]
                maxL = max(maxL, height[left])
            else:
                right -= 1
                value = maxR - height[right]
                maxR = max(maxR, height[right])
            
            if value > 0:
                result += value

            
        return result

    # 이해가 잘 안됨. 그림을 그려보자.
    def trap_stack(self, height: List[int]) -> int:
        stack = []
        volume = 0

        for i in range(len(height)):
            # 변곡점을 만나는 경우
            while stack and height[i] > height[stack[-1]]:
                # 스택에서 꺼낸다
                top = stack.pop()

                if not len(stack):
                    break

                # 이전과의 차이만큼 물 높이 처리
                distance = i - stack[-1] - 1
                waters = min(height[i], height[stack[-1]]) - height[top]

                volume += distance * waters
            
            # 초기에 여기서 채움
            stack.append(i)
        
        return volume

print(Solution().trap([0,1,0,2,1,0,1,3,2,1,2,1]))