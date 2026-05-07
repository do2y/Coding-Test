function solution(numbers) {
    let digitNumbers = numbers.map((num) => String(num));

    let answer = digitNumbers.sort((a, b) => b + a - (a + b)).join("");
    
    return answer[0] === "0" ? '0' : answer;
}


