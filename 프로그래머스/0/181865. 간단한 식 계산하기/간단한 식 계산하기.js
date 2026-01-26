function solution(binomial) {
    let arr = binomial.split(" ");
    let a = Number(arr[0]);
    let b = Number(arr[2]);
    let op = arr[1];
    
    if (op === "+")
        return a+b;
    else if (op == "-")
        return a-b;
    else
        return a*b;
}