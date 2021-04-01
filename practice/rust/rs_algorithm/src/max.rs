pub fn run() {
    println!("{}", min_num([1, 2, 3, 4, 5]))
}

fn max_num(arr: [i32; 5]) -> i32 {
    let mut result = arr[0];
    for i in 1..arr.len() {
        if result < arr[i] {
            result = arr[i]
        }
    }

    return result;
}

fn index_of_max_num(arr: [i32; 5]) -> usize {
    let mut result = 0;
    for i in 1..arr.len() {
        if arr[result] < arr[i] {
            result = i
        }
    }

    return result;
}

fn min_num(arr: [i32; 5]) -> i32 {
    let mut result = arr[0];

    for i in 1..arr.len() {
        if result > arr[i] {
            result = arr[i]
        }
    }

    return result;
}
