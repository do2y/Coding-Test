function solution(brown, yellow) {
    
    /* 
    1. 가로 * 세로 = yellow를 만족하고 
      (2*가로) + (2*세로) + 4 = brown을 만족하는 가로 세로 찾기
      -> 그런데 이때 가로 >= 세로  
    */
    
    let width = 1;
    let height = 1;
    
    for (height=1; height <= Math.sqrt(yellow); height++) {
        
        width = yellow / height;
        
        if (Number.isInteger(width)) {
            if (( 2 * width ) + ( 2 * height ) + 4 === brown)
                break;
            else
                continue;
        }
    
    }
    return [ width + 2, height + 2 ];
}