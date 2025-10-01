function solution(arr1, arr2) {
    let answer = [];
    
    let k = arr1.length; 
    let m = arr1[0].length;  
    let n = arr2[0].length;
    
    for (let i=0; i<k; i++) {
        let row = [];
        for (let j=0; j<n; j++) {
            let sum = 0;
            for (let t=0; t<m; t++) {
                sum += arr1[i][t] * arr2[t][j];
            }
            row.push(sum);
        }
        answer.push(row);
    }
    
    return answer;
}