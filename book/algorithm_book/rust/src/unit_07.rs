pub fn sel_sort(a: &mut [i32]) -> &mut [i32] {
    let n = a.len();

    for i in 0..n-1 {
        let mut min_idx = i;
        for j in i+1..n {
            if a[j] < a[min_idx] {
                min_idx = j;
            }
        };
        a.swap(i, min_idx)
    }
    return a
}