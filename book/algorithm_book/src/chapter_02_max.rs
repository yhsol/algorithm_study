use std::io;

pub fn run() {
    let mut i = String::new();
    io::stdin().read_line(&mut i).expect("Failed to read line");
    let i: u32 = i.trim().parse().expect("Please type a number!");

    println!("i is: {}", i > 5);

    let result = find_max_pos([1, 2, 3, 5, 4].to_vec());
    println!("{}", result);
}

fn find_max(arr: Vec<i32>) -> i32 {
    let mut result = arr[0];

    for i in 0..arr.len() {
        println!("value of loop is: {}", arr[i]);
        if arr[i] > result {
            result = arr[i]
        }
    }

    result
}

fn find_max_pos(arr: Vec<i32>) -> usize {
    let mut result = 0;

    for i in 0..arr.len() {
        if arr[i] > arr[result] {
            result = i
        }
    }
    result
}
