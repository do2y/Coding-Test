function solution(x, n) {
    //x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트 리턴
    
    const arr = [];
    
    for (let i=0; i<n; i++) {
        arr.push(x + x * i);
    }
    
    return arr;
}