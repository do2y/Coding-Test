function solution(prices) {
    const answer = Array(prices.length).fill(0);
    const stack = [];  // 스택에는 아직 가격이 안떨어진 시점(인덱스)를 저장

    for (let i = 0; i < prices.length; i++) {

        // 현재 가격이 스택 맨 위 시점의 가격보다 낮다면 해당 시점의 가격이 떨어진 것이므로 처리
        while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
            const prev = stack.pop(); // 가격이 떨어진 시점을 스택에서 제거
            answer[prev] = i - prev;  // 가격이 떨어지기까지 걸린 시간
        }
      
	   // 현재 시점도 이후 가격을 확인해야 하므로 스택에 저장
        stack.push(i);  
    }

   // 끝까지 가격이 떨어지지 않은 시점들의 유지시간 계산
    while (stack.length > 0) {
        const prev = stack.pop();
        answer[prev] = prices.length - 1 - prev;
    }

    return answer;
}