pub fn run() {
    let mut d = [2, 4, 5, 1, 3];
    merge_sort(&mut d);
    println!("{:?}", d);
}

fn merge_sort(a: &mut [i32]) {
    // 배열의 길이
    let n = a.len();
    // 배열의 길이가 1보다 작다면 그대로 return
    if n <= 1 {
        return;
    };

    // 중간값: 배열을 반으로 나눈 값
    let mid = n / 2; // 여기서 floor 와 같은 동작이 필요함
                     // let left = &mut a[..mid];
                     // let right = &mut a[mid..];
                     // 배열의 처음부터 중간값까지, 중간값부터 끝까지의 slice 를 재귀 호출
    merge_sort(&mut a[..mid]);
    merge_sort(&mut a[mid..]);

    // 결괏값 배열은 추가가 가능하도록 vec 로 변환
    let mut results = a.to_vec();

    // 두 조각, 즉 왼쪽의 조각과 오른쪽의 조각, 둘을 합해서 담을 결괏값 배열
    merge(&a[..mid], &a[mid..], &mut results[..]);

    // a 즉 기존 배열에 결괏값 배열을 복사해서 담는다.
    a.copy_from_slice(&results);
}

fn merge(left: &[i32], right: &[i32], results: &mut [i32]) {
    // 각 배열의 맨 앞.
    let mut i_left = 0;
    let mut i_right = 0;
    let mut i_a = 0;

    // 즉 두 조각에 값이 존재할 때.
    while i_left < left.len() && i_right < right.len() {
        // 왼쪽의 현재 index 값이 더 작다면 왼쪽값을 결괏값의 현재 index 에 담고,
        // 왼쪽 배열과 결괏값 배열의 index 를 한칸 옮긴다.
        if left[i_left] < right[i_right] {
            results[i_a] = left[i_left];
            i_a += 1;
            i_left += 1;
        // 오른쪽의 현재 index 값이 더 작다면 오른쪽값을 결괏값의 현재 index 에 담고,
        // 오른쪽 배열과 결괏값 배열의 index 를 한칸 옮긴다.
        } else {
            results[i_a] = right[i_right];
            i_a += 1;
            i_right += 1;
        };
    }

    // 위의 while 문을 통과했을 때, 즉 둘 중 한쪽의 정렬이 끝났을 때.
    // 양 쪽의 조각은 정렬이 다 된 상태이므로 그대로 결괏값 배열에 담는다.
    // while 을 이용해 하니씩 담아도 되고,
    // if 을 이용해 각 배열의 나머지 부분을 그대로 담아도 된다.
    // 왼쪽의 조각이 남았을 경우.
    // while i_left < left.len() {
    //     results[i_a] = left[i_left];
    //     i_left += 1;
    //     i_a += 1;
    // }
    if i_left < left.len() {
        results[i_a..].copy_from_slice(&left[i_left..]);
    }
    // 오른쪽의 조각이 남았을 경우.
    // while i_right < right.len() {
    //     results[i_a] = right[i_right];
    //     i_right += 1;
    //     i_a += 1;
    // }
    if i_right < right.len() {
        results[i_a..].copy_from_slice(&right[i_right..])
    }
}
