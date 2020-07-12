pub fn run() {
    let mut d = [2, 4, 5, 1, 3];
    bubble_sort(&mut d)
}

fn bubble_sort(a: &mut [i64]) {
    for i in 0..(a.len() - 1) {
        for j in 0..(a.len() - 1 - i) {
            if a[j] > a[j + 1] {
                a.swap(j, j + 1);
            }
        }
    }
    for i in 0..a.len() {
        println!("{:?}", a[i]);
    }
}
