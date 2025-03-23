function solution(dots) {
    let width = [...new Set(dots.map(v => v[0]))].sort((a,b) => b-a);
    let height = [...new Set(dots.map(v => v[1]))].sort((a,b) => b-a);
    
    return (width[0]-width[1]) * (height[0]-height[1]);
}