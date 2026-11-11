function solution(clothes) {
  
    const clothesDict = {};
    
    clothes.forEach(([name, type]) => {
        if (!clothesDict[type]) clothesDict[type] = [];
        clothesDict[type].push(name);
    });
    
    let product = 1;

    Object.values(clothesDict).forEach(v => {
        const count = v.length;
        product *= (count + 1);
    });

    return product - 1;
    
}