pub fn run() {
    let result = is_palindrome("aaa");
    println!("{}", result);
}

// 문자열의 반복이나, vec 등의 구조에서 pop 과 같은 메서드의 동작에 대해서
// 좀 알아야 깔끔하게 풀 수 있을 듯
fn is_palindrome(s: &str) -> bool {
    let mut strs: Vec<char> = Vec::new();
    let mut reversed: Vec<char> = Vec::new();
    for i in s.to_lowercase().chars() {
        if i.is_alphanumeric() {
            strs.push(i);
            reversed.push(i);
        }
    }

    reversed.reverse();

    for i in 0..strs.len() {
        if strs[i] != reversed[i] {
            return false
        }
    }

    return true
}