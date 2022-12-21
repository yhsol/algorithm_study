# 문자열 조작

1.  유효한 팰린드롬
    문제: 주어진 문자열이 팰린드롬인지 확인하라. 대소문자를 구분하지 않으며, 영문자와 숫자만을 대상으로 한다.

        - 풀이 1:
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

## 문법 문자열 슬라이싱

- ## '안녕하세요'
  ```
  0  1  2  3  4
  안 녕 하 세 요
  -5 -4 -3 -2 -1
  ```
  - S[1:4] == 녕하세:  
     인덱스 1에서(0부터 시작) 4 이전까지(4는 포함하지 않는다) 표현한다.
    4개를 의미하는 게 아니므로 유의
  - S[1:-2] == 녕하:  
     인덱스 1에서 -2 이전까지(-2는 포함하지 않는다) 표현한다.
    뒤에서부터는 음수로 접근이 가능하다.
  - S[1:] == 녕하세요:  
     문자열의 시작 또는 끝은 생략 가능하다.
  - S[:] == 안녕하세요:  
     둘 다 생략하면 사본을 리턴한다.
    파이썬은 a = b와 같은 형태로 할당하면 변수의 값이 할당되는 것이 아니라 a 변수가 b 변수를 참조하는 형태가 된다.
    참조가 아닌 값을 복사하기 위해 [:]를 사용할 수 있으며,
    이 방식은 문자열이나 리스트를 복사하는 파이썬다운 방식(Pythonic Way)이기도 하다.
  - S[1:100] == 녕하세요:  
     인덱스가 지나치게 클 경우 문자열의 최대 길이만큼만 표현된다.
    S[1:]과 동일하다.
  - S[-1] == 요: 마지막 문자(뒤에서 첫번째)
  - S[-4] == 녕: 뒤에서 4번째
  - S[:-3] == 안녕: 뒤에서 3개 글자 앞까지
  - S[-3:] == 하세요: 뒤에서 3번재 문자에서 마지막까지
  - S[::1] == 안녕하세요: 1은 기본값으로 동일하다.
  - S[::-1] == 요세하녕안: 뒤집는다.
  - S[::2] == 안하요: 2칸씩 앞으로 이동한다.

2. 문자열 뒤집기
   문제: 문자열을 뒤집는 함수를 작성하라. 입력값은 문자 배열이며, 리턴 없이 리스트 내부를 직접 조작하라.
   풀이1: 투 포인터(Two Pointer)를 이용한 전통적인 방식  
    단어 그대로 2개의 포인터를 이용해 범위를 조정해가며 풀이하는 방식
   여기서는 점점 더 범위를 좁혀 가며 스왑하는 형태로 풀이할 수 있다.

   ```py
   def reverseString(self, s: List[str]) -> None:
       left, right = 0, len(s) - 1
       while left < right:
           s[left], s[right] = s[right], s[left]
           left += 1
           right -= 1
   ```

   풀이2: 파이썬다운 방식
   무엇보다 이 문제는 파이썬의 기본 기능을 이용하면 단 한 줄로 쉽게 풀이할 수 있다.
   이러한 방식들을 흔히 파이썬다운 방식(Pythonic way)이라 부른다.
   reverse() 함수를 사용

   ```py
   def reverseString(self, s: List[str]) -> None:
       s.reverse()
   ```

   reverse()는 리스트에만 제공된다.
   만약 입력값이 문자열이라면 앞서 살펴본 바와 같이 문자열 슬라이싱을 사용할 수 있다.
   슬라이싱은 리스트에도 사용할 수 있으며, 성능 또한 매우 좋다.

   ```py
   s = s[::-1]
   ```

   그러나 이 풀이는 리트코드에서는 오류가 발생한다.
   원래는 [::-1]도 정상적으로 처리되어야 하지만 이 문제의 경우 처리되지 않는데,
   이 문제는 공간 복잡도를 O(1)로 제한하다 보니 변수 할당을 처리하는 데 다소 제약이 있다.
   이때 다음과 같은 트릭을 사용하면 잘 동작한다.

   ```py
   s[:] = s[::-1]
   ```

   이런 트릭은 쉽게 알아내기 어려우며, 실제 코딩 테스트 시에도 이 같은 문제가 발생하면 디버깅에 상당히 애를 먹을 수 있으므로 플랫폼의 특징에 대해 충분한 숙지가 필요하다.
   사실 이 문제는 지나치게 제약이 있는 문제이기도 하다.
   혹시 리트코드 서비스가 아닌 해커랭크나 코딜리티 코딩 플랫폼으로 테스트를 치러야 할 때는 또 다르게 동작할 수 있으므로,
   시험을 치르기에 앞서 각 플랫폼의 특징에 대해 충분히 숙지해둬야 한다.

3. 로그 파일 재정렬
   문제: 로그를 재정렬하라. 기준은 다음과 같다.

   1. 로그의 가장 앞 부분은 식별자다.
   2. 문자로 구성된 로그가 숫자 로그보다 앞에 온다.
   3. 식별자는 순서에 영향을 끼치지 않지만, 문자가 동일한 경우 식별자 순으로 한다.
   4. 숫자 로그는 입력 순서대로 한다.

   풀이1: 람다와 + 연산자를 이용

   - 문자로 구성된 로그가 숫자 로그보다 이전에 오며, 숫자 로그는 입력 순서대로 둔다.
   - 그렇다면 문자와 숫자를 구분하고, 숫자는 나중에 귿로 이어 붙인다.
   - 로그 자체는 숫자 로그도 모두 문자열로 지정되어 있으므로, 타입을 확인하면 모두 문자로 출력됨.
   - 따라서 다음과 같이 isdigit()을 이용해서 숫자 여부인지를 편별해 구분해본다.

   ```py
   if log.split()[1].isdigit():
       digits.append(log)
   else:
       letters.append(log)
   ```

   - 이 경우 숫자로 변환 가능한 로그는 digits에, 그렇지 않은 경우 문자 로그는 letters에 추가됨.
   - 이제 문자 로그는 letters에 모두 모였으므로 다음고 ㅏ같이 이를 제대로 정렬하기만 하면 됨.
   - 정렬: `letters.sort(key=lambda x: (x.split()[1:], x.split()[0]))`
   - 여기서는 식별자를 제외한 문자열 [1:]을 키로 하여 정렬하며,
     동일한 경우 후순위로 식별자 [0]를 지정해 정렬되도록,
     람다 표현식(Lambda Expression)을 이용해 정렬했다(람다 표현식에 대해서는 다음 페이지의 박스 설명을 참고하자).
     이제 모두 이어 붙여서 다음과 같이 리턴한다.
     - `return letters + digits`

## 문법 람다 표현식

람다 표현식이란 식별자 없이 실행 가능한 함수를 말하며,
함수 선언 없이도 하나의 식으로 함수를 단순하게 표현할 수 있다.
그러나 이 책에서는 3장에서 언급한 것처럼 람다 표현식보다 훨씬 더 간결하고 가독성이 높은 리스트 컴프리헨션(List Comprehension)을 주로 사용할 예정이다.
그러나 꼭 필요한 경우에는 람다 표현식을 사용하게 되는데,
이 문제 3에서처럼 람다로 풀이하는 게 더 편할 경우에 한해 일부 사용해본다.
앞서 문제 풀이에서는 다음과 같이 2개의 키를 람다 표현식으로 정렬하는 문법을 살펴봤다.

```py
s.sort(key=lambda x: (x.split()[1], x.split()[0]))
```

만약 s가 ['2 A', '1 B', '4 C', '1 A']라면
sorted()로 정렬한 결과는 다음과 같다.

```
>>> s = ['2 A', '1 B', '4 C', '1 A']
>>> sorted(s)
['1 A', '1 B', '2 A', '4 C']
```

그러나 우리가 원하는 결과는 각 요소의 번호 순 정렬이 아닌 그 뒤의 문자 순 정렬을 원하며,
문자가 동일한 경우에만 그 앞 번호순으로 정렬되는 형태를 희망한다.
이때 리스트의 각 요소를 풀어서 별도 처리를 해줘야 하는데,
이럴 때 람다 표현식을 사용할 수 있다.
쉽게 말해 람다는 간단한 함수를 쉽게 선언하는 방법이라 할 수 있다.
만약 람다를 사용하지 않고 직접 함수를 선언한다면 다음과 같은 형태가 된다.

```
>>> def func(x):
        return x.split()[1], x.split()[0]
>>> s.sort(key=func)
>>> s
['1 A', '2 A', '1 B', '4 C']
```

이제 람다 표현식을 사용하면, 다음과 같이 별도 함수를 선언하지 않고도 간단한 함수를 선언한 것처럼 쉽게 처리할 수 있다.

```
>>> s.sort(key=lambda x: (x.split()[1], x.split()[0]))
>>> s
['1 A', '2 A', '1 B', '4 C']
```

그러나 람다 표현식은 코드가 길어지고 map이나 filter와 함께 섞어서 사용하기 시작하면 가독성이 매우 떨어질 수 있으므로 주의가 필요하다.

4. 가장 흔한 단어
   문제: 금지된 단어를 제외한 가장 흔하게 등장하는 단어를 출력하라. 대소문자 구분을 하지 않으며,
   구두점(마침표, 쉼표 등) 또한 무시한다.
   풀이1: 리스트 컴프리헨션, Counter 객체 사용

   - 데이터 클렌징(Data Cleansing)이라 부르는 입력값에 대한 전처리(Preporcessing) 작업이 필요.
   - 좀 더 편리하게 처리하기 위해 정규식을 섞어 쓰면 다음과 같이 처리할 수 있다.

   ```py
   words = [word for word in re.sub(r'[^\w]', ' ', paragraph).lower().split() if word not in banned]
   ```

   - 정규식에서 \w는 단어 문자(Word Character)를 뜻하며, ^은 not을 의미한다.
     따라서 위 정규식은 단어 문자가 아닌 모든 문자를 공백으로 치환(Substitute)하는 역할
   - 아울리 리스트 컴프리헨션의 조건절에는 banned에 포함되지 않은 단어만을 대상으로 한다.
   - 따라서 words에는 소문자, 구두점을 제외하고 banned를 제외한 단어 목록이 저장된다.
   - 이제 다음과 같이 각 단어의 개수를 헤아려 보자.
     ```py
     counts = collections.defaultdict(int)
     for word in words:
         counts[word] += 1
     ```
   - 개수를 담아두는 변수는 딕셔너리를 사용하며 defaultdict()를 사용해 int 기본 값이 자동으로 부여되게 함.
   - 따라서 여기서는 키 존재 유무를 확인할 필요 없이 즉시 counts[word] += 1을 수행할 수 있다.  
     ```return max(counts, key=counts.get)`
   - 딕셔너리 변수인 counts에서 값이 가장 큰 키를 가져온다.
     즉 수학에서 argmax와 동일하다. 그런데 파이썬의 기본 타입은 argmax를 지원하지 않는다.
     과학 계산 라이브러리인 넘파이(NumPy)는 이를 잘 지원하지만, 아쉽게도 코딩 테스트에서는 어떠한 외부 라이브러리도 사용할 수 없다. 따라서 이처럼 max() 함수에 key를 지정해 argmax를 간접적으로 추출할 수 있다. 개수를 처리하는 부분은 Counter 모듈을 사용하면 좀 더 깔끔하게 처리할 수 있다.
   - 다음 코드는 words에서 가장 흔하게 등장하는 단어의 첫 번째 값을 most_common(1)으로 추출한다.
     문제의 입력값에서는 [('ball', 2)]가 되며, 이 값의 [0][0]을 추출해서 최종적으로 첫 번째 인덱스의 키를 추출하게 된다.
     이렇게 추출한 키인 ball은 가장 흔한 단어가 되므로, 이제 이 값을 리턴한다.
     ```py
     counts = collections.Counter(words)
     return counts.most_common(1)[0][0]
     ```
     이처럼 Counter 객체를 이용해 비교적 간단히 구현할 수 있었으며, 모두 정리하면 전체 코드는 다음과 같다.
     ```py
     def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
         words = [word for word in re.sub(r'[^\w]', ' ', paragraph)
             .lower().split()
                     if word not in banned]
         counts = collections.Counter(words)
         # 가장 흔하게 등장하는 단어의 첫 번째 인덱스 리턴
         return counts.most_common(1)[0][0]
     ```

5. 그룹 애너그램
   문제: 문자열 배열을 받아 애너그램 단위로 그룹핑하라.
   풀이1: 정렬하여 딕셔너리에 추가
   - 정렬하여 비교
   - 애너그램 관계인 단어들을 정렬하면, 서로 같은 값을 갖게 됨.
   - sorted()는 문자열도 잘 정렬하며, 결과를 리스트 형태로 리턴
   - 이를 다시 키로 사용하기 위해 join()으로 합쳐 이 값을 키로 하는 딕셔너리로 구성
   - 애너그램끼리는 같은 키를 갖게 되고 따라서 여기에 append()하는 형태
   - `anagrams[''.join(sorted(word))].append(word)`
   - 만약 존재하지 않는 키를 삽입하려 할 경우 KeyError가 발생
   - 에러가 나지 않도록 다음과 같이 항상 디폴트를 생성해주는 defaultdict()로 선언
   - 매번 키 존재 여부를 체크하지 않고 비교 구문을 생략해 간결하게 구성  
     `anagrams = collections.defaultdict(list)`

## 파이썬 정렬 알고리즘과 팀소트

(...)
대부분의 경우 정렬이 필요할 때는 파이썬의 정렬 함수를 사용하는 편이 가장 빠르다.
그 이유는 실제 데이터에 적합한 팀소트를 사용하면서도,
파이썬의 내장 함수로서 저수준의 언어(CPython에서는 C 언어)를 이용해 매우 신중하게 작성되었기 때문이다.
따라서 온라인 코딩 테스트 시에는 별다른 제약사항이 없는 한,
가급적 파이썬의 내장 함수를 사용하는 편이 실행 속도가 가장 빠르다.
(...)

6. 가장 긴 팰린드롬 부분 문자열
   문제: 가장 긴 팰린드롬 부분 문자열을 출력하라.