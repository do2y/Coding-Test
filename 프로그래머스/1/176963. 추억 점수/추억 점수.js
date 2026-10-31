function solution(name, yearning, photo) {
    
    const scores = [];
    
    photo.forEach(photoNames => {
        
        let yearningScore = photoNames
        .reduce((totalScore, personName) => totalScore + (yearning[name.indexOf(personName)] ?? 0), 0);
        
        scores.push(yearningScore);
    });
    
    return scores;
}