pub fn run() {
    println!("sum one to n is: {}", sum_one_to_n_2(10));
    println!("multiple on to n is: {}", multiple_one_to_n(10));
}

fn sum_one_to_n(n: i32) -> i32 {
    let mut result = 0;

    for i in 1..n + 1 {
        result = result + i;
    }
    return result;
}

fn sum_one_to_n_2(n: i32) -> i32 {
    return (1 + n) * n / 2;
}

fn multiple_one_to_n(n: i32) -> i32 {
    let mut result = 1;

    for i in 1..n + 1 {
        result = result + (i * i)
        // result = result * (i + i)
        // 처음에 코드를 위와 같이 짰다.
        // 그랬더니 'attempt to multiply with overflow' 라는 메시지와 함께 에러가 났다.
        // `result = result * (i + i)` 가 `i32` 에 맞지 않기 때문인 듯 하다.
        // 타입을 i64 로 변경할 경우 잘 작동한다.
        // 타입별로 저장할 수 있는 공간의 차이를 짐작해 볼 수 있었다.
    }

    return result;
}
