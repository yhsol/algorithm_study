pub fn run() -> String {
    let inputs = vec![17, 92, 18, 33, 58, 5, 33, 42];
    let target = vec![18, 33, 900];
    // return sequential_search_with_number_multiple(inputs, 0);
    return sequential_search_student(39);
}

fn sequential_search_with_vec(inputs: Vec<i32>, target: Vec<i32>) -> Vec<usize> {
    let mut results = vec![];

    for i in 0..inputs.len() {
        if target.contains(&inputs[i]) {
            results.push(i);
        }
    }
    return results;
}

fn sequential_search_with_number(inputs: Vec<i32>, target: i32) -> i32 {
    for i in 0..inputs.len() {
        if inputs[i] == target {
            return i as i32;
        }
    }

    return -1;
}

fn sequential_search_with_number_multiple(inputs: Vec<i32>, target: i32) -> Vec<i32> {
    let mut results = vec![];
    for i in 0..inputs.len() {
        if inputs[i] == target {
            results.push(i as i32)
        }
    }

    return results;
}

fn sequential_search_student(target: i32) -> String {
    let stu_no = vec![39, 14, 67, 105];
    let stu_name = vec!["Justin", "John", "Mike", "Summer"];

    for i in 0..stu_no.len() {
        if stu_no[i] == target {
            return stu_name[i].to_string();
        }
    }
    return "?".to_string();
}
