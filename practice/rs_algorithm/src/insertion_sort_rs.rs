pub fn run() {
    let mut d = [2, 4, 5, 1, 3];
    insertion_sort_2(&mut d);
    println!("{:?}", d);
}

fn insertion_sort(a: &mut [i64]) {
    for i in 0..a.len() {
        let mut j = i;
        while j > 0 && a[j - 1] > a[j] {
            println!("{}", j);
            a.swap(j - 1, j);
            j -= 1;
        }
    }
}

fn insertion_sort_2(a: &mut [i64]) {
    for i in 1..a.len() {
        let key = a[i];
        let mut j = i;
        while j > 0 && a[j - 1] > key {
            println!("{}", j);
            a[j] = a[j - 1];
            j -= 1;
            a[j] = key
        }
    }
}
