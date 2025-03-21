function solution(k, m, score) {
    score.sort((a,b) => b-a); //내림차순 정렬
    let boxes = [];
    
    for(let i=0; i+m<=score.length;i=i+m){
        boxes.push(score.slice(i,i+m));
    }
    
    let sum = 0;
    boxes.forEach(box => {
        sum+=box[m-1]*m;
    })
    ;
    return sum;
}

