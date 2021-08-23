pub fn run() -> i32 {
    fact(5)
}

pub fn fact(n: i32) -> i32 {
    let mut f = 1;
    for i in 1..(n + 1) {
        f *= i
    }
    return f;
}
