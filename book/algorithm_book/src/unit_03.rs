pub fn run() -> Vec<String> {
    let names = ["Tom", "Mike", "Tom"].to_vec();
    same_name(names)
}

fn same_name(names: Vec<&str>) -> Vec<String> {
    let mut same_names = Vec::new();

    for i in 0..(names.len() - 1) {
        for j in (i+1)..names.len() {
            if names[i] == names[j] {
                same_names.push(String::from(names[i]))
            }
        }
    }

    return same_names;
}