function solution(n, m, section) {
    let cnt = 1; //칠하는 횟수
    let paintEnd = (section[0]-1)+m; //칠해지는 끝부분
    let idx = 1;
    
    for(let i=1; i<=section.length; i++){
        if(paintEnd < section[i]){
            cnt++;
            paintEnd = (section[i]-1)+m;
        }
    }
    return cnt;
    
}