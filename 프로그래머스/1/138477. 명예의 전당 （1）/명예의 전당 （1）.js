function solution(k, score) {
    let list = [];  //명예의 전당
    let result = [];  
    
    for(let i=0; i<score.length; i++){
        if (list.length < k) {
            list.push(score[i]);
        }
        
        else {
            let min = Math.min(...list);
            if(min < score[i]){
                list[list.indexOf(min)] = score[i];
            }    
        }
        result.push(Math.min(...list));
    }
    
    return result;
}