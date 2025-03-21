function solution(board, moves) {
    let stack = [];   //인형 바구니
    let cnt = 0;
    
    for(let i=0; i<moves.length; i++){
        let move = moves[i]-1;
        
        for(let j=0; j<board.length; j++){
            let toy = board[j][move];
            //console.log(toy);
           
            if(toy !== 0){ 
                if(stack.length == 0 || stack[stack.length-1] !== toy){ 
                    stack.push(toy);   
                }
                else {      
                    stack.pop();
                    cnt+=2;
                }
                board[j][move] = 0;
                break;
            }
        }
        
    }
    
    
    return cnt;
}

// 00000
// 00103
// 02501
// 42442      
// 35131      //4 (3 (1 1) 3) 2 4 