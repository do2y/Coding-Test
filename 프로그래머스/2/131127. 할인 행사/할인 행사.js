function solution(want, number, discount) {
    let answer = 0;
    
    function isSame(buyList, discountList) {
        if (Object.keys(buyList).length !== Object.keys(discountList).length) return false;

        for (let key in buyList) {
            if (buyList[key] !== discountList[key]) return false;
        }
        return true;
    }
    
    
    let mustBuy = {};
    for (let i=0; i<want.length; i++) {
        mustBuy[want[i]] = number[i];
    }
    
    let tenDays = {};
    for (let i=0; i<10; i++) {
        let item = discount[i];
        tenDays[item] = (tenDays[item] || 0) + 1;
    }
    if (isSame(mustBuy, tenDays)) answer++;
     
    for (let i=10; i<discount.length; i++) {
        let outItem = discount[i-10];
        let inItem = discount[i];
        
        tenDays[outItem]--;
        if (tenDays[outItem] === 0) delete tenDays[outItem];
        
        tenDays[inItem] = (tenDays[inItem] || 0) + 1;
        
        //비교
        if (isSame(mustBuy,tenDays))
            answer++;
    }
    
    return answer;

}