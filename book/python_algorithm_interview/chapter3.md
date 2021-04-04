# Chapter 3

## 타입힌트

- 파이썬은 대표적인 동적 타이핑 언어임에도, 타입을 지정할 수 있는 타입 힌트가 PEP 484 문서에 추가됐다.  
  이 기능은 파이썬 버전 3.5 부터 사용할 수 있다.
  예:

  ```py
    a: str = "1"
    b: int = 1
  ```

  ```py
    def fn(a: int) -> bool:
        ...
  ```

  - 강제 규약이 아니다 보니, 여전히 동적으로 할당될 수 있으므로 주의가 필요하다.  
    따라서 다음과 같이 문자열에 정수를 할당하는 등의 사용 방식은 절대 지양해야 한다.

    ```
    >>> a: str = 1
    >>> type(a)
    <class 'int'>
    ```

  - 코딩 테스트는 일반적으로 짧은 알고리즘으로 끝나는 경우가 많고, 타입은 지정하지 않아도 한눈에 보일 만큼 명확하기 때문에 굳이 지정하지 않아도 문제는 없다.  
    그러나 코드를 정리할 때만이라도 타입을 모두 지정해서 보기좋게 제출한다면, 코드 리뷰 시 면접관에게 좋은 점수를 받을 수 있을 것이다.

  - 온라인 코딩 테스트 시에는 mypy를 사용하면 타입 힌트에 오류가 없는지 자동으로 확인할 수 있으므로 이를 통해 수정 후 코드를 제출할 수 있다.  
    mypy는 다음과 같이 pip로 설치할 수 있다.
    ```
    $ pip install mypy
    ```
    - 타입 힌트가 잘못 지정된 코드는 Incompatible return value type 오류가 발생한다.

## 리스트 컴프리헨션

- 파이썬은 map, filter 와 같은 함수형(Functioanl) 기능을 지원하며 다음과 같은 람다 표현식도 지원한다.
  ```
  >>> list(map(lamda x: x + 10, [1, 2, 3]))
  [11, 12, 13]
  ```
- 리스트 컴프리헨션(List Comprehension)이란 기존 리스트를 기반으로 새로운 리스트를 만들어내는 구문으로,  
  파이썬 2.0부터 지원되었으며, 하스켈(Haskell) 같은 함수형 언어에서 기능을 차용해온 파이썬의 대표적인 특징이기도 하다.
  'Effective Python 파이썬 코딩의 기술'(길벗, 2016)에서도 1장, '파이썬다운 생각' 중 'Better way 7: map과 filter 대신 리스트 컴프리헨션을 사용하자'  
  는 절이 있을 정도로 리스트 컴프리헨션은 다방면에 유용하게 활용되며, 무엇보다 람다 표현식에 map이나 filter를 섞어서 사용하는 것에 비해 가독성이 훨씬 높다.

  다음은 홀수인 경우 2를 곱해 출력하라는 리스트 컴프리헨션이다.

  ```
  >>> [n * 2 for n in range(1, 10 + 1) if n % 2 == 1]
  [2, 6, 10, 14, 18]
  ```

  만약 리스트 컴프리헨션을 사용하지 않는다면 다음과 같이 길게 풀어서 작성해야 한다.

  ```
  >>> a = []
  >>> for n in range(1, 10 + 1):
          if n % 2 == 1:
              a.append(n * 2)
  >>> a
  [2, 6, 10, 14, 18]
  ```

  풀어서 작성한 코드는 리스트 컴프리헨션에 비해 훨씬 더 길어졌고 a라는 별도의 리스트 변수 또한 필요해졌다.  
  리스트 컴프리헨션과 비교했을 때 라인 수가 많이 증가했다.  
  물론 리스트 컴프리헨션이라고 반드시 리스트만 가능한 것은 아니다.  
  버전 2.7 이후에는 다음과 같이 리스트 외에도 딕셔너리 등이 가능하도록 추가됐다.

  ```py
  a = {}
  for key, value in original.items():
      a[key] = value
  ```

  이와 같은 정의 코드는 다음과 같이 처리할 수 있다.

  ```py
  a = {key: value for key, value in original.items()}
  ```

  이처럼 한 줄로 간결하게 작성할 수 있는 리스트 컴프리헨션은(여기서는 딕셔너리 컴프리헨션)  
  가독성이 좋은 편이지만 이 또한 무리하게 복잡하게 작성할 경우 가독성을 떨어뜨릴 수 있으므로  
  적절히 사용하는게 중요하다. 대체로 표현식은 2개를 넘지 않아야 한다.

## 제너레이터

제너레이터는 루프의 반복(Iteration) 동작을 제어할 수 있는 루틴 형태를 말한다.
예를 들어 임의의 조건으로 숫자 1억 개를 만들어내 계산하는 프로그램을 작성한다고 가정해보자.
이 경우 제너레이터가 없다면 메모리 어딘가에 만들어낸 숫자 1억 개를 보관하고 있어야 한다.
그러나 제너레이터를 이용하면, 단순히 제너레이터만 생성해두고 필요할 때 언제든 숫자를 만들어낼 수 있다.
만약에 1억 개 중 100개 정도만 쓰인다면 차이는 더욱 클 것이다.  
이때 yield 구문을 사용하면 제너레이터를 리턴할 수 있다.
기존의 함수는 return 구문을 맞닥뜨리면 값을 리턴하고 모든 함수의 동작을 종료한다.
그러나 yield는 제너레이터가 여기까지 실행 중이던 값을 내보낸다는(단어의 사전적 의미처럼 '양보하다') 의미로,
중간값을 리턴한 다음 함수는 종료되지 않고 계속해서 맨 끝에 도달할 때까지 실행된다.
물론 다음 코드의 경우처럼 while True 구문은 종료 조건이 없으므로 계속해서 값을 내보낼 수 있다.

```
>>> def get_natural_number():
        n = 0
        while True:
            n += 1
            yield n
```

이 경우 함수의 리턴 값은 다음과 같이 제너레이터가 된다.

```
>>> get_natural_number()
<generator object get_natural_number at 0x10d31390>
```

만약 다음 값을 생성하려면 next() 로 추출하면 된다.
예를 들어 100개의 값을 생성하고 싶다면 다음과 같이 100번 동안 next()를 수행하면 된다.

```
>>> g = get_natural_number()
>>> for _ in range(0, 100):
        print(next(g))

1
2
3
...
98
99
100
```

아울러 제너레이터는 다음과 같이 여러 타입의 값을 하나의 함수에서 생성하는 것도 가능하다.

```
>>> def generator():
       yield 1
       yield 'string'
       yield True
>>> g = generator()
>>> g
<generator object generator at 0x10a47c678>
>>> next(g)
1
>>> next(g)
'string'
>>> next(g)
True
```

## range

제너레이터의 방식을 활용하는 대표적인 함수로 range()가 있다. 주로 for 문에서 쓰이는 range() 함수의 쓰임은 다음과 같다.

```
>>> list(range(5))
[0, 1, 2, 3, 4]
>>> range(5)
range(0, 5)
>>> type(range(5))
<class 'range'>
>>> for i in range(5):
        print(i, end=' ')

0 1 2 3 4
```

이 코드에서 range()는 range 클래스를 리턴하며,
for 문에서 사용할 경우 내부적으로는 제너레이터의 next()를 호출하듯
매번 다음 숫자를 생성해내게 된다.
참고로 파이썬 2.x 버전까지는 range() 함수가 지금과 같은 형태가 아니었다.
숫자를 미리 생성해서 리스트로 리턴하는 방식이었고(파이썬 3.x의 list(range(x)) 결과와 동일하다)
제너레이터를 리턴하는 방식은 xrange()라고 따로 존재했다. 그러다가 버전 3 이후, range() 함수가 제너레이터 역할을 하는 range 클래스를 리턴하는 형태로 변경됐고 xrange() 함수는 사라졌다.
(hs: 중략부분에서 파이썬 2에 대한 이야기가 나오는데 실제로 vs code 에서 파이썬을 실행해서 터미널에서 해보면 python 2.7 버전이 작동 되어 python3 와 다르게 나온다.)  
만약 생성할 숫자가 100만 개쯤 된다면 어떻게 될까?
메모리에서 적지 않은 공간을 차지할 것이고 생성 시간도 오래 걸릴 것이다.
그러나 제너레이터를 리턴하듯 range 클래스만 리턴하면 그렇지 않다.
생성 조건만 정해두고 나중에 필요할 때 생성해서 꺼내 쓸 수 있다.
다음은 숫자 100만 개를 생성하는 2가지 방법이다.

```
>>> a = [n for n in range(1000000)]
>>> b = range(1000000)
```

실제로 다음과 같이 len()으로 길이 비교를 해보면 둘 다 동일한 100만 개가 출력되며,
비교 연산자에서도 True 를 리턴한다.

```
>>> len(a)
1000000
>>> len(b)
1000000
>>> len(a) == len(b)
True
```

그러나 a에는 이미 생성된 값이 담겨 있고,
b 는 생성해야 한다는 조건만 존재한다.

```
>>> b
range(0, 1000000)
>>> type(b)
<class 'range'>
```

이제 둘 사이의 메모리 점유율을 비교해보면 range 클래스를 리턴하는 방식의 장점이 쉽게 와닿을 것이다.

```
>>> sys.getsizeof(a)
8697464
>>> sys.getsizeof(b)
48
```

똑같이 숫자 100만 개를 갖고 있으나 range 클래스를 이용하는 b 변수의 메모리 점유율이 훨씬 더 작다.
100만 개가 아니라 1억 개라도 b 변수의 메모리 점유율은 동일하다.
생성 조건만 보관하고 있기 때문이다.
게다가 미리 생성하지 않은 값은 인덱스에 접근이 안 될 거라 생각할 수 있으나,
인덱스로 접근 시에는 바로 생성하도록 구현되어 있기 때문에 다음과 같이 리스트와 거의 동일한 느낌으로 불편 없이 사용할 수 있다.

```
>>> b[999]
999
```

## enumerate

enumerate()는 '열거하다'는 뜻의 함수로,
여러 가지 자료형(list, set, tuple 등)을 인덱스를 포함한 enumerate 객체로 리턴한다.
사용 방법은 다음과 같다.

```
>>> a = [1,2,3,2,45,2,5]
>>> a
[1, 2, 3, 2, 45, 2, 5]
>>> enumearte(a)
<enumerate object at 0x1010f83f0>
>>> list(enumerate(a))
[(0, 1), (1, 2), (2, 3), (3, 2), (4, 45), (5, 2), (6, 5)]
```

이처럼 list()로 결과를 추출할 수 있는데,
인덱스를 자동으로 부여해주기 때문에 매우 편리하게 활용할 수 있다.

그렇다면 a = ['a1', 'b2', 'c3']가 있을 때 이 리스트의 인덱스와 값을 함께 출력하려면 어떻게 해야 할까?

```py
for i in range(len(a)):
    print(i, a[i])
```

먼저 위 코드와 같은 형태를 생각할 수 있을 것이다.
그러나 값을 가져오기 위해 불필요한 a[i] 조회 작업과
전체 길이를 조회하여 루프를 처리하는 형태가 깔끔해 보이지 않는다.
굳이 range()를 사용하지 않고, 다음과 같이 구현할 수도 있겠다.

```py
i = 0
for v in a:
    print(i, v)
    i += 1
```

값은 깔끔하게 처리했으나 이 경우 인덱스를 위한 변수를 별도로 관리하는 형태라 이 또한 깔끔하지 않다.
가장 깔끔한 방식은 다음과 같이 enumerate()를 활용하는 방법이다.

```py
for i, v in enumerate(a):
    print(i, v)
```

엦 인덱스와 값 모두 한 번에 깔끔하게 처리된다.

## // 나눗셈 연산자

- /: 나눗셈을 한 그대로를 보여줌. 내림하지 않음. -> float
- //: 정수형을 나눗셈할 때 동일한 정수형을 결과로 리턴하면서 내림(Floor Division) 연산자의 역할을 한다. 다시 말해 몫(Quotient)을 구하는 연산자다. -> int
- &: 나머지를 구하는 연산자
- divmod(): 몫과 나머지를 동시에 구하기
  ```
  >>> divmod(5, 3)
  (1, 2)
  ```

## print

- 디버깅을 할 때 가장 자주 쓰는 명령
- 실무에서는 print()를 활용하는 디버깅 방법은 추천하지 않음.
- 하지만 코딩 테스트 시에는 디버거를 사용하거나 TDD 방식으로 접근하기도 어렵기 때문에, 사실상 print()가 디버깅을 위해 제공되는 유일한 기능이기도 하다.
- 콤마(,)로 구분. 한 칸 공백이 디폴트
  - `print('A1', 'B2')`
- sep: sep 파라미터로 구분자를 콤마(,)로 지정해줄 수도 있다.
  - `print('A1', 'B2', sep=',')`
- end: end 파라미터를 공백으로 처리하여 줄바꿈을 하지 않도록 제한할 수 있다.
  - `print('aa', end=' ')`
  - `print('bb')`
  - aa bb
- join: 리스트를 출력할 때는 join()으로 묶어서 처리
  ```
  >>> a = ['A', 'B']
  >>> print(' '.join(a))
  A B
  ```
- format
  - 다음과 같이 idx와 fruit이 정의되어 있다고 할 때,
  ```
  >>> idx = 1
  >>> fruit = "Apple"
  ```
  idx 값에 1을 더해서 fruit와 함께 출력하는 방법은 어떤 방법이 있을까?
  ```
  print('{0}: {1}'.format(idx + 1, fruit))
  2: Apple
  ```
  이런 형태로 인덱스와 함께 사용 가능하다. 또한 다음과 같이 인덱스를 생략할 수 있다.
  ```
  print('{}: {}'.format(idex + 1, fruit))
  2: Apple
  ```
  내가 가장 선호하는 방법은 f-string(formated string literal)이다.
  변수를 뒤에 별도로 부여할 필요 없이 마치 템플릿을 사용하듯 인라인으로 삽입할 수 있어 편리하게 사용할 수 있다.
  무엇보다 기존의 %를 사용하거나 .format을 부여하는 방식에 비해 훨씬 간결하고 직관적이며 속도도 빠르다.
  ```
  >>> print(f'{idx + 1}: {fruit}')
  2: Apple
  ```
  아쉬운 점은 f-string은 파이썬 3.6+에서만 지원한다는 점이다.
  그 이하 버전에서는 동작하지 않으니 이 점에 유의해야 한다.

## pass

```py
class MyClass(object):
    def method_a(self):

    def method_b(self):
        print("Method B")

c = MyClass()
```

-> 인덴트 오류 발생
-> method_a()가 아무런 처리를 하지 않았기 때문에 엉뚱하게 method_b()에서 오류가 발생
-> pass는 이런 오류를 막는 역할을 한다.

```py
class MyClass(object):
    def method_a(self):
        # 여기에 pass 추가
        pass

    def method_b(self):
        print("Method B")

c = MyClass()
```

- pass 는 널 연산(Null Operation)
- 아무것도 하지 않는 기능
- 목업(mockup) 인터페이스부터 구현한 다음에 추후 구현을 진행할 수 있게 함.
- 온라인 코딩 테스트 시에도 무척 유용하게 활용 가능.

## locals

- locals()는 로컬 심볼 테이블 딕셔너리를 가져오는 메소드로 업데이트 또한 가능
- 여기서는 딕셔너리를 가져오는 부분에 집중해서 살펴보자면,
- 로컬에 선언된 모든 변수를 조회할 수 있는 강력한 명령 -> 디버깅에 많은 도움
- 로컬 스코프에 제한해 정보를 조회할 수 있기 때문에 클래스의 특정 메소드 내부에서나
  함수 내부의 로컬 정보를 조회해 잘못 선언한 부분이 없는지 확인하는 용도로 활용할 수 있다.
- 변수명을 일일이 찾아낼 필요 없이 로컬 스코프에 정의된 모둔 변수를 출력하기 때문에 편리함.
- 리트코드(LeetCode) 문제 풀이 중에도 코드 내부에 출력해 활용할 수 있다.

```
import pprint
pprint.pprint(locals())
```

- pprint로 출력하면 보기 좋게 줄바꿈 처리를 해줘서 가독성이 높다.

```
{'__annotations__': {},
 '__builtins__': <module 'builtins' (built-in)>,
 '__cached__': None,
 '__doc__': None,
 '__file__': 'chapter3.py',
 '__loader__': <_frozen_importlib_external.SourceFileLoader object at 0x0157DD50>,
 '__name__': '__main__',
 '__package__': None,
 '__spec__': None,
 'g': <generator object generator at 0x0177F830>,
 'generator': <function generator at 0x01760A08>,
 'get_natural_number': <function get_natural_number at 0x01760978>,
 'i': 4,
 'lambda_fn': <function lambda_fn at 0x016994B0>,
 'list_comprehension_fn': <function list_comprehension_fn at 0x016996F0>,
 'normal_fn': <function normal_fn at 0x01760930>,
 'pprint': <module 'pprint' from 'C:\\Users\\user\\AppData\\Local\\Programs\\Python\\Python37-32\\lib\\pprint.py'>,
 'print_100_nums': <function print_100_nums at 0x017609C0>}
```

- 클래스 메소드 내부의 모든 로컬 변수를 출력해 주기 때문에 디버깅에 많은 도움이 된다.

## 코딩 스타일

- 추천
  - 책추천
    - 'Clean Code 클린 코드'(로버트 C.마틴 지음, 박재호 외 옮김, 인사이트, 2013)
    - '프로그래밍 수련법'(브라이언 W.커니핸, 롭 파이크 지음, 김정민 옮김, 인사이트, 2008)
  - 그 외
    - 파이썬의 PEP 8(https://www.python.org/dev/peps/pep-0008/)
    - 구글의 파이썬 스타일 가이드(http://google.github.io/styleguide/pyguide.html)

## 변수명과 주석

- 코드 내에 변수명을 아무렇게나 지정하고 주석도 없이 작성한 코드
  - 변수명이 무엇을 의미하는지를 이해하기 어려움
  - 알고리즘에 대한 주석이 없어서 어떻게 동작하는지 파악하기도 쉽지 않음.
  - 물론 엉클 밥은 'Clean Code 클린 코드'책에서 코드에 주석을 달지 말라고 주장하지만,
    특히 자바가 아닌 다른 언어에서 주석을 달지 않는 코드를 작성하는 건 여전히 논란의 여지가 있다.
  - 나는 주석을 상세히 다는 방식을 선호하며,
    코딩 테스트에서도 제출한 결과물에 대해 주석 여부를 확인하고 인터뷰 시에는
    해당 주석에 대해 꼭 함께 논의해보는 편이다.

## 리스트 컴프리헨션

- 파이썬의 매우 강력한 기능 중 하나며, 파이썬을 대표하는 특징 중 하나다.
- 하지만 특유의 문법과 의미를 축약하여 나타내는 특징 탓에 지나치게 남발하게 되면 파이썬의 가독성을 떨어트리는 요인이 되기도 함.
  - 예
    ```py
    strls = [strl[i:i + 2].lower() for i in range(len(strl) - 1) if re.findall('[a-z]{2}', strl[i: i + 2].lower())]
    ```
- 역할별로 줄 구분을 하면 훨씬 더 가독성이 높아지고 이해하기 쉬워진다.
  - 예
    ```py
    strls = [
      strl[i:i + 2].lower() for i in range(len(strl) - 1)
      if re.findall('[a-z]{2}', strl[i: i + 2].lower())
    ]
    ```
- 람다 표현식보다는 낫지만 그래도 리스트 컴프리헨션은 여전히 풀어쓰는 것에 비해서는 가독성이 떨어진다.

```py
strls = []
for i in range(len(strl) - 1):
    if re.findall('[a-z]{2}', strl[i:i + 2].lower()):
      strl.append(strl[i:i + 2].lower())
```

- 차라리 이처럼 모두 풀어서 쓰는 것도 가독성을 위해서라면 나쁘지 않다.
- 코드를 읽는 방향이 위에서 아라까지 차례대로 정방향이기 때문에 훨씬 더 이해하기 쉽다.
- 굳이 짧은 줄 수를 고집할 필요는 없다.
- 경우에 따라서는 가독성을 위해 모두 풀어쓰는 것도 검토해 볼 만하다.
- 리스트 컴프리헨션은 대체로 표현식이 2개를 넘지 않아야 한다.
- 다음과 같이 여러 표현식을 여러 줄에 걸쳐 표현하면 가독성이 지나치게 떨어진다.

```py
return [(x, y, z)
        for x in range(5)
        for y in range(5)
        if x != y
        for z in range(5)
        if y != z]
```

## 구글 파이썬 스타일 가이드

- 가독성을 높이기 위한 지침들이 많다.

  - 함수의 기본 값으로 가변 객체(Mutable Object)를 사용하지 않아야 한다.
    함수가 객체를 수정하면(리스트에 아이템을 추가한다든지 등) 기본값이 변경되기 때문이다.
    따라서 다음과 같이 기본값으로 []나 {}를 사용하는 것은 지양

    ```
    No: def foo(a, b=[]):
      ...
    No: def foo(a, b: Mapping = {}):
    ```

    대신 불변 객체(Immutable Object)를 사용.
    Node을 명시적으로 할당하는 것도 좋은 방법

    ```
    Yes: def foo(a, b=None):
             if b is None:
                 b = []
    Yes: def foo(a, b Optional[Sequence] = None):
             if b is None:
                 b = []
    ```

  - True, False를 판별할 때는 암시적(Implicit)인 방법을 사용하는 편이 간결하고 가독성이 높다.
    즉 굳이 False임을 if foo != []: 같은 형태로 판별할 필요가 없다.
    if foo:로 충분하다.
    이외에도 몇 가지 더 정리해보면 다음과 같다.

    ```
    Yes: if not users: # not users 로 충분
             print('no users')

         if foo == 0: # 정수를 처리할 때는 암시적으로 거짓 여부를 판별하기 보다는 비교 대상이 되는 정수값을 직접 비교하는 편이 덜 위험하다.
             self.handle_zero()

         if i % 10 == 0: # i % 10 == 0로 명시적으로(Explicitly) 값을 비교하는 편이 좋다.
             self.handle_multiple_of_ten()

    No: if len(users) == 0:
            print('no users')

        if foo is None and not foo:
            self.handle_zero()

        if not i % 10:
            self.handle_multiple_of_ten()
    ```
