function solution(name, yearning, photo) {
    
    const scoreMap = new Map(
        name.map((person, index) => [person, yearning[index]])
    );
    
    return photo.map(photoNames =>
        photoNames.reduce(
            (sum, person) => sum + (scoreMap.get(person) ?? 0),
            0
        )
    );
}