function solution(n, arr1, arr2) {
    let answer = [];
    
    let BinArr1 = arr1.map(v => v.toString(2).length == n ? v.toString(2) : v.toString(2).padStart(n,"0"));
    let BinArr2 = arr2.map(v => v.toString(2).length == n ? v.toString(2) : v.toString(2).padStart(n,"0"));
    
    BinArr1.forEach((v,i) => {  
        let str = "";
        for(let idx=0; idx<v.length; idx++){
            if(v[idx] == "1" || BinArr2[i][idx] =="1")
                str+="#";
            else
                str+=" ";
        }
        answer.push(str);
            
    })
    return answer;
}