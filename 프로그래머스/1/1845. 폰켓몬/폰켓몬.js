function solution(nums) {
    let uniqueSet = new Set(nums);  
    let numsLen = nums.length/2;
    
    if(uniqueSet.size <= numsLen)
        return uniqueSet.size;
    else
        return numsLen;
    
}