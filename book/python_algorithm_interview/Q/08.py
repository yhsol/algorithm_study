from typing import List

# 뭔가 더 단축할 수 있을 것 같은데
class Solution:
    def trap(self, height: List[int]) -> int:
        result = 0
        maxL, maxR = height[0], height[len(height) - 1]
        maxLIndex, maxRIndex = 0, len(height) - 1

        while maxLIndex < maxRIndex:
            value = 0
            if maxL < maxR:
                maxLIndex += 1
                value = maxL - height[maxLIndex]
                maxL = max(maxL, height[maxLIndex])
            else:
                maxRIndex -= 1
                value = maxR - height[maxRIndex]
                maxR = max(maxR, height[maxRIndex])
            
            if value > 0:
                result += value

            
        return result

print(Solution().trap([0,1,0,2,1,0,1,3,2,1,2,1]))