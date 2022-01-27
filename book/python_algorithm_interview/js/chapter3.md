# 선형 자료구조

## 7장 배열

- 배열은 **리스트와 비슷한 객체**로서 순회와 변형 작업을 수행하는 메서드를 갖습니다. JavaScript 배열은 길이도, 각 요소의 자료형도 고정되어 있지 않습니다. 배열의 길이가 언제든지 늘어나거나 줄어들 수 있고 데이터를 연속적이지 않은 곳에 저장할 수 있으므로, JavaScript 배열은 밀집성을 보장하지 않습니다. 보통 이런 성질들은 편리하지만, 사용하려는 목적에 맞지 않으면 형식화 배열(typed array)을 사용하는 것을 고려해보세요.

- 배열은 (연관 배열과 달리) 요소 인덱스로 문자열을 사용할 수 없으며 무조건 정수만 허용합니다. 대괄호 구문 또는 속성 접근자를 사용해 정수가 아닌 키에 접근할 경우 배열의 요소가 아니라 배열의 객체 속성 컬렉션에 연결된 변수를 바라보게 됩니다. 순회 및 변형 작업 또한 이런 속성에 적용할 수 없습니다.

- 자주 사용하는 연산

      - 배열 만들기
          - `let fruits = ['사과', '바나나']`
      - 인덱스로 배열의 항목에 접근하기
          - `let first = fruits[0]`
          - `let last = fruits[fruits.length - 1]`
      - 배열의 항목들을 순환하며 처리하기
          -
          ```js
          fruits.forEach(function (item, index, array) {
                console.log(item, index)
              }
          )
          ```
      - 배열 끝에 항목 추가하기
          - `let newLength = fruits.push('오렌지')`
      - 배열 끝에서부터 항목 제거하기
          - `let last = fruits.pop() // 끝에있던 '오렌지'를 제거`
      - 배열 앞에서부터 항목 제거하기
          - `let first = fruits.shift() // 제일 앞의 '사과'를 제거`
      - 배열 앞에 항목 추가하기
          - `let newLength = fruits.unshift('딸기') // 앞에 추가`
      - 배열 안 항목의 인덱스 찾기
          - `let pos = fruits.indexOf("바나나")`
      - 인덱스 위치에 있는 항목 제거하기
          - `let removedItem = fruits.splice(pos, 1) // 항목을 제거하는 방법`
      - 인덱스 위치에서부터 여러개의 항목 제거하기
          ```js
          let removedItems = vegetables.splice(pos, n)
              // 배열에서 항목을 제거하는 방법
              // pos 인덱스부터 n개의 항목을 제거함
          ```
      - 배열 복사하기
        - `let shallowCopySpread = [...fruits]`

- 배열 길이와 숫자형 속성의 관계

  - length를 직접 늘려도 요소에 변화는 없습니다.

    ```js
    fruits.length = 10;
    console.log(fruits); // ['바나나', '사과', '복숭아', 비어 있음 x 2, '망고', 비어 있음 x 4]
    console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
    console.log(fruits.length); // 10
    console.log(fruits[8]); // undefined
    ```

    - 하지만, length 속성을 감소시키면 요소가 지워집니다.

    ```js
    fruits.length = 2;
    console.log(Object.keys(fruits)); // ['0', '1']
    console.log(fruits.length); // 2
    ```

- 배열 복사하기

  - 배열을 새로운 변수에 할당해도 배열이 복사되지는 않습니다. 새로운 변수에는 원본 배열을 가리키는 참조만 할당되며, 원본 배열의 값을 바꾸면 새 변수에서도 그 변경점이 반영됩니다.

  ```js
  let array1 = [1, 2, 3];
  let array1Reference = array1;
  array1[1] = 9;
  console.log(array1Reference);
  // Array [1,9,3] - array1의 변화가 array1Reference에도 나타남 - 복사본이 아님
  ```

  - 전개 구문:
    - `let shallowCopySpread = [...fruits]`
  - Array.slice():
    - `let shallowCopySlice = fruits.slice()`
  - Array.from():

    - `let shallowCopyFrom = Array.from(fruits)`

  - 위의 세 코드는 모두 '얕은 복사'를 생성합니다. 얕은 복사란 배열의 최상위 요소가 원시 값일 경우 복사하지만, 중첩 배열이나 객체 요소일 경우에는 원본 배열의 요소를 참조하는 것입니다게 됩니다.

  - 모든 요소의 '깊은 복사', 즉 중첩 배열과 객체 요소 또한 동일한 형태로 복사하는 방법 중 하나는 JSON.stringify()를 사용해 배열을 JSON 문자열로 변환한 후, JSON.parse()로 다시 배열을 구성하는 것입니다.
    - `let deepCopy = JSON.parse(JSON.stringify(fruits));`

- 정적 메서드

  - Array.isArray()
    - 만약 매개변수가 배열이면 참을, 아니면 거짓을 반환합니다.

- 인스턴스 메서드

  - Array.prototype.entries()

    - 배열의 각 인덱스에 대한 키/값 쌍을 가지는 새로운 배열 반복자 객체를 반환합니다.

      ```js
      const array1 = ["a", "b", "c"];

      const iterator1 = array1.entries();

      console.log(iterator1.next().value);
      // expected output: Array [0, "a"]

      console.log(iterator1.next().value);
      // expected output: Array [1, "b"]
      ```

      ```js
      const a = ["a", "b", "c"];

      for (const [index, element] of a.entries()) console.log(index, element);

      // 0 'a'
      // 1 'b'
      // 2 'c'
      ```

      ```js
      var a = ["a", "b", "c"];
      var iterator = a.entries();

      for (let e of iterator) {
        console.log(e);
      }
      // [0, 'a']
      // [1, 'b']
      // [2, 'c']
      ```

  - Array.prototype.flat()

    - 배열 내의 모든 중첩 배열을 지정한 깊이까지 재귀적으로 이어붙인 새로운 배열을 반환합니다.

    ```js
    const arr1 = [1, 2, [3, 4]];
    arr1.flat();
    // [1, 2, 3, 4]
    ```

    - 배열 구멍 제거
      - flat 메서드는 배열의 구멍도 제거합니다.
      ```js
      const arr5 = [1, 2, , 4, 5];
      arr5.flat();
      // [1, 2, 4, 5]
      ```

  - Array.prototype.toString()

    - 배열과 그 요소를 나타내는 문자열을 반환합니다. Object.prototype.toString() 메서드를 재정의합니다.

    ```js
    const array1 = [1, 2, "a", "1a"];

    console.log(array1.toString());
    // expected output: "1,2,a,1a"
    ```

    ```js
    var monthNames = ["Jan", "Feb", "Mar", "Apr"];
    var myVar = monthNames.toString(); // 'Jan,Feb,Mar,Apr'을 myVar에 할당.
    ```
