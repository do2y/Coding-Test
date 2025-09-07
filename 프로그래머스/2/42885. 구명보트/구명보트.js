function solution(people, limit) {
    let boat = 0;
    
    people.sort((a,b) => a-b); 
    let left = 0;
    let right = people.length - 1;
    
    while (left <= right) {
        if(left === right) {
            boat++;
            break;
        }
        
        else {
            if (people[left] + people[right] <= limit) {
                left++; right--;
                boat++;
            }
    
            else {
                right--;
                boat++;
            }   
        }
            
    }
    
    return boat;
}