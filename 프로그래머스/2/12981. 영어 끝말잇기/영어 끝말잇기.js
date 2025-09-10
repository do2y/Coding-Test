function solution(n, words) {
    
    let usedWords = new Set();

    
    for(let i=0; i<words.length; i++){
        if (i===0) {
            usedWords.add(words[0]);
            continue;
        }
        
        if (usedWords.has(words[i]) || words[i].length === 1
            || words[i-1].charAt(words[i-1].length-1) !== words[i].charAt(0)) {
            let player = (i%n) + 1;
            let round = Math.floor(i/n) + 1;
            
            return [player, round];
        }    
        usedWords.add(words[i]);
    }
    
    return [0, 0];
    
}