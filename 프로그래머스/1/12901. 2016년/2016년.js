function solution(a, b) {
    let month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let days = ["FRI" ,"SAT", "SUN" , "MON" , "TUE" , "WED" , "THU"];
    
    let sumMonth = month.slice(0,a).reduce((a,c) => a+c, 0);
    let NumberOfdays = sumMonth+b-1;
    
    return days[NumberOfdays%7];

}