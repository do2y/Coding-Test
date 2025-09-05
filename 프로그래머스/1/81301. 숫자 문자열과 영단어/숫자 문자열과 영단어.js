function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven",
    "eight", "nine"];
    
    for(let i in numbers){
        s = s.replaceAll(numbers[i], i);
    }
    
    return Number(s);
    
}