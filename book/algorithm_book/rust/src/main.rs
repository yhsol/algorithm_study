mod unit_07;

fn main() {
    println!("here is main.rs");
    let mut d = vec![2,4,5,1,3];
    println!("result is here: {:?}", unit_07::sel_sort(&mut d));
}
