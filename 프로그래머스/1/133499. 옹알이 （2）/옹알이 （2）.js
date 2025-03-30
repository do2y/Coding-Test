function solution(babbling) {
    let obj = {"aya":1, "ye":2, "woo":3, "ma":4};
    let cnt = 0;
    
    babbling.forEach(word => {
        let newWord = word;
        for(let key in obj){
            newWord = newWord.replaceAll(key, obj[key]);
        }
        if (!/^[1-4]+$/.test(newWord))   
            cnt+=0;
        else if (!/([1-4])\1/.test(newWord))
            cnt+=1;
    });
    
    return cnt;
}


