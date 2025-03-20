function solution(spell, dic) {
    let str = spell.sort().join("")
    
    let sortedDic = dic.map(word => [...word].sort().join(""));
    if(sortedDic.includes(str)){
        return 1;
    }
    else
        return 2;
}