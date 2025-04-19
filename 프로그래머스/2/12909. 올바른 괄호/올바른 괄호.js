function solution(s){
    let check = 0;
    
    for(let i=0; i<s.length; i++){
        if(s[i] === "(")
            check+=1;
        else if(check >= 1 && s[i] === ")")
            check-=1;
        else 
            return false;
    }
    
    return check == 0;
}