use std::io;

pub fn run() {
    let list = make_str_array();
    let result = find_same(list);
    println!("{:?}", result);
}

fn make_str_array() -> Vec<String> {
    let mut size = String::new();
    io::stdin()
        .read_line(&mut size)
        .expect("Failed to read line");
    let size = size.trim().parse::<i32>().expect("Please type a number!");

    let mut str_vector = Vec::new();

    for _ in 0..size {
        let mut input = String::new();
        io::stdin()
            .read_line(&mut input)
            .expect("Failed to read line");

        str_vector.push(input)
    }

    return str_vector;
}

fn find_same(arr: Vec<String>) -> Vec<String> {
    println!("{}", arr.len());
    let mut names: Vec<String> = Vec::new();
    let mut sames: Vec<String> = Vec::new();

    for i in arr {
        if names.contains(&i) {
            if !sames.contains(&i) {
                sames.push(i.trim().to_string())
            }
        } else if names.is_empty() {
            names.push(i)
        }
    }
    return sames;
}
