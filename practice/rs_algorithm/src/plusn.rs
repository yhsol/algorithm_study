pub fn run() {
    println!("{}", plusn2(10))
}

fn plusn(n: i32) -> i32 {
    let mut result = 0;

    for i in 1..n + 1 {
        result += i
    }

    return result;
}

fn plusn2(n: i32) -> i32 {
    return n * (n + 1) / 2;
}
