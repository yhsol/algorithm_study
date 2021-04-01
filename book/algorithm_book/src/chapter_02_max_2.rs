use std::io;

pub fn run() {
    // let mut n = String::new();
    // io::stdin().read_line(&mut n).expect("Failed to read line");
    // let n: u32 = n.trim().parse().expect("Please type a number!");

    // let mut v: Vec<i32> = Vec::new();

    // for _ in 0..n {
    //     let mut input = String::new();
    //     io::stdin()
    //         .read_line(&mut input)
    //         .expect("Failed to read line");
    //     let input = input.trim().parse::<i32>().expect("Please type a number!");
    //     v.push(input);
    // }

    // println!("i is: {}", n);
    // println!("v is: {:?}", v);

    // let result = find_max(v);
    // println!("{}", result);

    println!("{}", find_min())
}

fn find_max(arr: Vec<i32>) -> i32 {
    let mut result = arr[0];

    for i in 0..arr.len() {
        println!("[chapter_02_max_2] value of loop is: {}", arr[i]);
        if arr[i] > result {
            result = arr[i]
        }
    }

    return result;
}

fn find_min() -> i32 {
    let mut n = String::new();
    io::stdin().read_line(&mut n).expect("Failed to read line");
    let n: i32 = match n.trim().parse() {
        Ok(num) => num,
        Err(_) => 0,
    };
    let mut v: Vec<i32> = vec![];

    for _ in 0..n {
        let mut i = String::new();
        io::stdin().read_line(&mut i).expect("Failed to read line");
        let i = match i.trim().parse::<i32>() {
            Ok(num) => num,
            Err(_) => 0,
        };

        v.push(i)
    }

    let mut result = v[0];

    for i in 0..v.len() {
        if result > v[i] {
            result = v[i]
        }
    }

    result
}
