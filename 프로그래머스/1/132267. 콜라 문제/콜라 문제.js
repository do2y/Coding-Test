function solution(a, b, n) {
    let freeCola=0;  //새 콜라 카운트
    
    while(n>=a){
        let get = Math.floor(n/a) * b; 
        freeCola += get;
        n = get + (n%a);
    }
    
    return freeCola;
}

