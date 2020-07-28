pub fn run() {
    let mut d = [2, 4, 5, 1, 3];
    selection_sort(&mut d);
    println!("{:?}", d);
}

fn selection_sort(a: &[i64]) {
    let n = a.len();

    for i in 0..n - 1 {
        let mut min_idx = i;
        for j in i + 1..n {
            if a[min_idx] > a[j] {
                min_idx = j;
            }
        }
        a.swap(i, min_idx);
    }
}
