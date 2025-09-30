function solution(brown, yellow) {

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