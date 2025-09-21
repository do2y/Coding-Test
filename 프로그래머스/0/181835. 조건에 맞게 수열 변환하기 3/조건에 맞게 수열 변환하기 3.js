function solution(arr, k) {

    if(k%2 != 0) {
        arr = arr.map(v => v*k);
    }
    else
        arr = arr.map(v => v+k);
    
    return arr;
}