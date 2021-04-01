pub fn run() {
    let N = 10;
    println!("{}", fibo(N));
}

fn fibo(n: i32) -> i32 {
    if n <= 1 {
        return n;
    }

    fibo(n - 1) + fibo(n - 2)
}
