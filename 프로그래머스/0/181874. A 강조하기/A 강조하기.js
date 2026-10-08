function solution(myString) {
    
    let answer = "";
    
    myString.split("").forEach(char => {
        if (char.toLowerCase() === "a") {
            answer += "A";
        } else {
            answer += char.toLowerCase();
        }
    });
    
    return answer;
}