pub fn run() {
    let mut d = [2, 4, 5, 1, 3];
    mergesort(&mut d);
    println!("{:?}", d);
}

pub fn mergesort(a: &mut [i32]) {
    let mid = a.len() / 2;
    if mid == 0 {
        return;
    }

    mergesort(&mut a[..mid]);
    mergesort(&mut a[mid..]);

    let mut ret = a.to_vec();

    merge(&a[..mid], &a[mid..], &mut ret[..]);

    a.copy_from_slice(&ret);
}

fn merge(a1: &[i32], a2: &[i32], ret: &mut [i32]) {
    let mut left = 0;
    let mut right = 0;
    let mut index = 0;

    while left < a1.len() && right < a2.len() {
        if a1[left] <= a2[right] {
            ret[index] = a1[left];
            index += 1;
            left += 1;
        } else {
            ret[index] = a2[right];
            index += 1;
            right += 1;
        }
    }

    if left < a1.len() {
        ret[index..].copy_from_slice(&a1[left..]);
    }
    if right < a2.len() {
        ret[index..].copy_from_slice(&a2[right..]);
    }
}
