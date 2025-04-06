function solution(n, lost, reserve) {

    let needUniform = lost.filter(student => !reserve.includes(student)).sort((a,b) => a-b);
    let canLend = reserve.filter(student => !lost.includes(student));
    
    let reserveSet = new Set(canLend);
    let maxStudent = n - needUniform.length;
    
    needUniform.forEach(student => {
        
        if(reserveSet.has(student-1)){
            maxStudent++;
            reserveSet.delete(student-1);
        }
        
        else if(reserveSet.has(student+1)){
            maxStudent++;
            reserveSet.delete(student+1);
        }
 
    });
    return maxStudent;
}