function solution(s)
{  
    const stack = [];
    for (const ch of s) {
        
        if (!stack.length) stack.push(ch);
        else {
            // top과 ch를 비교
            if (stack[stack.length - 1] === ch) stack.pop();
            else stack.push(ch);
        }
    }
    
    return (stack.length === 0) ? 1 : 0;
    
}