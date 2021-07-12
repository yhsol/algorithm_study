from typing import List
import sys


def best_time_to_by_and_sell_stock(data: List[int]) -> int:
    max_data = 0
    for i, v in enumerate(data):
        if i < len(data) - 1:
            rest_max = sorted(data[i+1:])[-1]
            profit = rest_max - v
            max_data = max(profit, max_data)

    return max_data


def maxProfit(prices: List[int]) -> int:
    profit = 0
    min_price = sys.maxsize

    # min_price 값을 처읍 값부터로 잡아두고, 다음 값과 비교하고 다음값이 작으면 min_price 로 넣고,
    # 그 min_price 랑 profit 을 다시 비교하면서 한번의 반복만으로
    # 최대 profit 값을 찾아갈 수 있음

    # 최솟값과 최댓값을 계속 갱신
    for price in prices:
        print('price: ', price)
        min_price = min(price, min_price)
        print('min_price: ', min_price)
        profit = max(profit, price - min_price)
        print('profit: ', profit)

    return profit


print(maxProfit([1, 2]))
