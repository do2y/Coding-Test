function solution(n_str) {
    let idx;
    
    for(let i=0; i<n_str.length; i++){
        if(n_str[i] == "0")
            idx = i+1;
        else 
            break;
    }
    
    return n_str.substring(idx);
}