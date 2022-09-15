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

print(Solution().trap([0,1,0,2,1,0,1,3,2,1,2,1]))