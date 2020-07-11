pub fn run() {
    let mut d = [2, 4, 5, 1, 3];
    selection_sort(&mut d);
    println!("{:?}", d);
}

fn selection_sort(a: &mut [i64]) {
    let n = a.len();

    for i in 0..(n - 1) {
        let mut min_idx = i;

        for j in (i + 1)..n {
            if a[min_idx] > a[j] {
                min_idx = j
            }
        }
        // swap
        // let temp = a[min_idx];
        // a[min_idx] = a[i];
        // a[i] = temp;
        a.swap(min_idx, i)
    }
}
