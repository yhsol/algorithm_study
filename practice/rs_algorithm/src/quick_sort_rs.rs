pub fn run() {
    let mut d = [2, 4, 5, 8, 9, 1, 7, 10, 6, 3];
    let n = d.len() - 1;
    quick_sort_rs(&mut d, 0, n);
    println!("{:?}", d);
}

fn quick_sort_rs(a: &mut [i64], start: usize, end: usize) {
    if start >= end {
        return;
    }

    let key = start;
    let mut i = start + 1;
    let mut j = end;

    // 해당 값들을 정확한 위치에서 체크하면 이해에 도움이 될 듯.
    // println!("values of key: {}, i: {}, j: {}", a[key], a[i], a[j]);

    while i <= j {
        while a[i] < a[key] && i <= end {
            i += 1;
        }
        while a[key] <= a[j] && j > start {
            j -= 1;
        }
        if i > j {
            println!("it change key!");
            a.swap(key, j)
        } else {
            println!("it change index!");
            a.swap(i, j)
        }
        println!("{}", a[key]);
        println!("{:?}", a);
    }

    quick_sort_rs(a, start, j - 1);
    quick_sort_rs(a, j + 1, end);
}
