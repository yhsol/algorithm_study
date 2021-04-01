use std::io;

pub fn run() {
    let mut n = String::new();
    io::stdin().read_line(&mut n).expect("Failed to read line");
    let n: i32 = n.trim().parse().expect("Please type a number!");

    let mut v: Vec<i32> = Vec::new();

    for _ in 0..n {
        let mut i = String::new();
        io::stdin().read_line(&mut i).expect("Failed to read line");
        let i = i.trim().parse::<i32>().expect("Please type a number!");

        v.push(i)
    }

    let result = find_max(v);
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
