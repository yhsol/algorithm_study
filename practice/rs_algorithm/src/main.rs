use std::any::type_name;
use std::io;

// mod selection_sort_rs;
// mod bubble_sort_rs;
// mod insertion_sort_rs;
// mod quick_sort_rs;
// mod merge_sort_rs;
// mod merge_Sort_rs_2;
// mod selection_sort_rs;
// mod quick_sort_practice;
// mod acmicpc_2751;

fn main() {
    // println!("it's main.rs!");
    // println!("Hello, world!");
    // selection_sort_rs::run();
    // bubble_sort_rs::run();
    // insertion_sort_rs::run();
    // quick_sort_rs::run();
    // merge_sort_rs::run();
    // merge_Sort_rs_2::run();
    // selection_sort_rs::run();
    // quick_sort_practice::run()
    // acmicpc_2751::run();

    let mut input = String::new();
    match io::stdin().read_line(&mut input) {
        Ok(n) => {
            // println!("{} bytes read", n);
            // println!("{}", input);
        }
        Err(error) => println!("error: {}", error),
    }
    let trimmed = input.trim();
    // match trimmed.parse::<u32>() {
    //     Ok(i) => {
    //         println!("your integer input: {}", i);
    //     }
    //     Err(..) => println!("this was not an integer: {}", trimmed),
    // };
    let int_input: i32 = trimmed.parse().unwrap();
    let mut a = vec![];
    fn type_of<T>(_: T) -> &'static str {
        type_name::<T>()
    }
    // println!("trimmed: {}", type_of(int_input));
    for i in 0..int_input {
        let mut input = String::new();
        match io::stdin().read_line(&mut input) {
            Ok(n) => {}
            Err(error) => println!("error: {}", error),
        }
        let trimmed = input.trim();
        let int_input: i32 = trimmed.parse().unwrap();
        a.push(int_input);
    }
    mergesort(&mut a);
    for i in a {
        println!("{}", i);
    }
    // println!("{:?}", a);
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
