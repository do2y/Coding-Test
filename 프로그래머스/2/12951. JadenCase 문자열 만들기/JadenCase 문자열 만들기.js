function solution(s) {
    let arr = s.split(" ");
    
    arr.forEach((word, i) => {
        if(!word){
            arr[i] = word;
        }
            
        else {
            let isAlpha = /^[a-zA-Z]/.test(word[0]);
            if(isAlpha) {
                word = word[0].toUpperCase() + word.slice(1).toLowerCase();
            }
            else
                word = word[0] + word.slice(1).toLowerCase();

            arr[i] = word;
        }
        
     });

    return arr.join(" ");
}