function solution(number) {
  const sum = number.split("").reduce((a, c) => a + Number(c), 0);
    
  return sum % 9;
}
