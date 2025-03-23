function solution(nums) {
    let uniqueSet = new Set(nums);  3,2,4
    let numsLen = nums.length/2
    
    if(uniqueSet.size <= numsLen)
        return uniqueSet.size;
    else
        return numsLen;
    
}