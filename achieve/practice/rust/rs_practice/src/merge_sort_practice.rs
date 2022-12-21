pub fn run() {
    let mut d = [2, 4, 5, 1, 3];
    merge_sort(&mut d);
    println!("{:?}", d);
}

fn merge_sort(a: &mut [i32]) {
    let n = a.len();
    if n <= 1 {
        return;
    };

    let mid = n / 2;
    merge_sort(&mut a[..mid]);
    merge_sort(&mut a[mid..]);

    let mut results = a.to_vec();

    merge(&a[..mid], &a[mid..], &mut results[..]);
    a.copy_from_slice(&results)
}

fn merge(left: &[i32], right: &[i32], results: &mut [i32]) {
    let mut i_left = 0;
    let mut i_right = 0;
    let mut i_a = 0;

    while i_left < left.len() && i_right < right.len() {
        if left[i_left] < right[i_right] {
            results[i_a] = left[i_left];
            i_left += 1;
            i_a += 1;
        } else {
            results[i_a] = right[i_right];
            i_right += 1;
            i_a += 1;
        }
    }

    // if i_left < left.len() {
    //     results[i_a..].copy_from_slice(&left[i_left..])
    // }

    // if i_right < right.len() {
    //     results[i_a..].copy_from_slice(&right[i_right..])
    // }

    while i_left < left.len() {
        results[i_a] = left[i_left];
        i_left += 1;
        i_a += 1;
    }

    while i_right < right.len() {
        results[i_a] = right[i_right];
        i_right += 1;
        i_a += 1;
    }
}
