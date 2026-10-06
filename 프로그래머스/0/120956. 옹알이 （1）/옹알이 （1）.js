function solution(babbling) {
    
    let answer = 0;
    const pronunciations = ["aya", "ye", "woo", "ma"];
    
    babbling.forEach(babblingWord => {
    
        let index = 0;        
 
        while (index < babblingWord.length) {
            let flag = false;
            
            for (let i = 0; i < pronunciations.length; i++) {
                const pronunciation = pronunciations[i];
                
                if (babblingWord.slice(index, index + pronunciation.length) === pronunciation) {
                    index += pronunciation.length;
                    flag = true;
                    break;
                }
            }
            
            if (!flag) break;
            if (index === babblingWord.length) {
                answer++;
            }
        }
    });
    
    return answer;

}