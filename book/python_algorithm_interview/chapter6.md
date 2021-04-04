# 문자열 조작

1.  유효한 팰린드롬

    - 풀이 1:
      문제: 주어진 문자열이 팰린드롬인지 확인하라. 대소문자를 구분하지 않으며, 영문자와 숫자만을 대상으로 한다.
      풀이: - 전처리

          ```py
          strs = []
          for char in s:
              if char.isalnum():
                  strs.append(char.lower())
          ```

              - 여기서 isalnum()는 영문자, 숫자 여부를 판별하는 함수로,
                이를 이용해 해당하는 문자만 추가
              - 대소문자를 구분하지 않으므로 lower()로 모두 소문자로 변환

          - 이제 다음과 같이 팰린드롬 여부를 판별해보자.

          ```py
          while len(strs) > 1:
              if strs.pop(0) != strs.pop():
                  return False
          ```

          모두 통과했다면 True 를 리턴한다.

    - 풀이 2:
      데크 자료형을 이용한 최적화

      ```py
      def isPalindrome(self, s: str) -> bool:
          # 자료형 데크로 선언
          strs: Deque = collections.deque()

          for char in s:
              if char.isalnum():
                  strs.append(char.lower())

          while len(strs) > 1:
              if strs.popleft() != strs.pop():
                  return False

          return True
      ```

      - 풀이 #1 대비 거의 5배 가까이 더 속도를 높일 수 있었다.
        이는 리스트의 pop(0)이 O(n)인 데 반해, 데크의 popleft()는 O(1)이기 때문이다. 각각 n번씩 반복하면, 리스트 구현은 O(n\*\*2), 데크 구현은 O(n)으로 성능 차이가 크다.

    - 풀이 3:  
      슬라이싱을 이용한 문제 풀이 코드

      ```py
      def isPlalindrome(self, s: str) -> bool:
          s = s.lower()
          # 정규식으로 불필요한 문자 필터링
          s = re.sub('[^a-z0-9]', '', s)

          return s == s[::-1] # 슬라이싱
      ```

      여기서는 별달리 알고리즘이라 부를 만한 게 없다.
      정규식으로 불필요한 문자를 필터링하고, 문자열을 조작할 수 있는 파이썬의 슬라이싱(Slicing)을 사용했다. 앞서 풀이에서는 isalnum()으로 모둔 문자를 일일이 점검했다.

      여기서는 문자열 전체를 한 번에 영숫자(Alphanumeric)만 걸러내도록 정규식으로 처리했다.
      또한 파이썬은 문자열을 배열이나 리스트처럼 자유롭게 슬라이싱할 수 있는 좋은 기능을 제공하며,
      [::-1]을 이용하면 뒤집을 수 있다.
      코드가 훨씬 더 줄어듦은 물론, 내부적으로 C로 빠르게 구현되어 있어 훨씬 더 좋은 속도를 기대할 수 있다.
      이 경우 실행 속도은 36밀리초로, 앞선 풀이 #2에 비해 약 2배 정도 더 속도를 높일 수 있었다.
