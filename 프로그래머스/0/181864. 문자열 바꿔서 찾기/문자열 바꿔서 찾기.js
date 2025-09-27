function solution(myString, pat) {
    
    const newPat = [...pat].reduce((a,c) => {
        if(c === "A")
            a += "B";
        else
            a += "A";
        return a;
    }, "");
    
    return myString.includes(newPat) ? 1: 0;
}