function solution(spell, dic) {
    let str = spell.sort().join("")
    
    let sortedDic = dic.map(word => [...word].sort().join(""));
    return sortedDic.includes(str) ? 1 : 2;
}