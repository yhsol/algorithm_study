pub fn run() {
    println!("n = 1");
    hanoi(1, 1, 3, 2);
    println!("n = 2");
    hanoi(2, 1, 3, 2);
    println!("n = 3");
    hanoi(3, 1, 3, 2);
}

pub fn hanoi(n: i32, from: i32, to: i32, aux: i32) {
    // 종료 조건
    // 원반 한 개를 옮기는 문제면 그냥 옮기면 됨
    if n == 1 {
        println!("{} -> {}", from, to);
        return;
    }

    hanoi(n - 1, from, aux, to);
    println!("{} -> {}", from, to);

    hanoi(n - 1, aux, to, from);
}
