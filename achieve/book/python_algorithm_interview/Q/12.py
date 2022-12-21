from typing import List
import sys


def stock(nums: List[int]) -> int:
    result = 0

    for i in range(len(nums)):
        result = max(result, max(nums[i:]) - nums[i])

    return result


def maxProfit(prices: List[int]) -> int:
    profit = 0
    min_price = sys.maxsize

    for price in prices:
        min_price = min(min_price, price)
        profit = max(profit, price - min_price)

    return profit


print(stock([7, 1, 5, 3, 6, 4]))
