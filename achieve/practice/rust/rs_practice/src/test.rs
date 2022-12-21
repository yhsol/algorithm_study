pub fn run() {
    iterate_mut_ref_vector();
}

fn iterate_vector() {
    let mut v = vec![100, 32, 57];
    for i in v {
        println!("{}", i);
    }
}

fn iterate_mut_ref_vector() {
    let mut v = vec![100, 32, 57];
    for i in &mut v {
        *i += 50;
    }
    println!("{:?}", v)
}
