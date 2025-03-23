function solution(name, yearning, photo) {
    let answer = [];
    
    for(let i=0; i<photo.length; i++){
        let result = 0;
        for(let j=0; j<photo[i].length; j++){
            let index = name.indexOf(photo[i][j]);
            if(index != -1){
                result += yearning[index]; 
            }
        }
        answer.push(result);   
    }
    return answer;
}