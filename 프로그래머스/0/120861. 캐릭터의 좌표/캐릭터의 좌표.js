function solution(keyinput, board) {
    let directions = {
        "left":  [-1, 0],  
        "right": [+1, 0],  
        "up":    [0, +1],  
        "down":  [0, -1]   
    };
    
    let answer = [0,0];  

    keyinput.forEach(direction => {
        let [dx, dy] = directions[direction];
        
        if(Math.abs(answer[0]+dx) <= Math.floor(board[0]/2)){
            answer[0] += dx;
        }
        if(Math.abs(answer[1]+dy) <= Math.floor(board[1]/2)){
            answer[1] += dy;
        }
    });
    
    // answer.forEach((v, i) => {
    //     if(v >= 0){
    //         answer[i] = Math.min(Math.floor(board[i]/2), v);
    //     }
    //     else
    //         answer[i] = Math.max(-Math.floor(board[i]/2), v);
    // });
    
    return answer;
}