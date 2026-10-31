function solution(n)
{
    // n 자릿수 합 구해서 리턴
    return (n + "").split("").map(v => Number(v)).reduce((a, c) => a+c, 0);
}