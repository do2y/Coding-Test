function solution(s) {
    let arr = s.split(" ");
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== "Z"){
            sum += Number(arr[i]);
        }
        else
            sum -= arr[i-1];
    }
    return sum;
}