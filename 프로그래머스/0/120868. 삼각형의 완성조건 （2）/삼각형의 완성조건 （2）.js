function solution(sides) {
    //1. 가장 긴 변이 sides[0]   sides[1] + newSide > sides[0];
    //2. 가장 긴 변이 newSides   sides[0] + sides[1] > newSide
    let cnt = 0;
    sides.sort((a,b) => a-b);
    
    for(let newSide = sides[1]-sides[0]+1; newSide<sides[1]; newSide++){
        cnt++;    
    }
    for(let newSide = sides[1]; newSide<sides[1]+sides[0]; newSide++){
        cnt++;    
    }
    
    return cnt;
}