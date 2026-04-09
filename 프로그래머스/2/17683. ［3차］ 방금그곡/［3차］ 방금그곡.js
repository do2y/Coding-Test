function solution(m, musicinfos) {
    
    const matchedSongs = [];
    for (let i=0; i < musicinfos.length; i++) {
        let [start, end, title, melody] = musicinfos[i].split(",");
        
        const toMin = (t) => {
            const [h, m] = t.split(":").map(Number);
            return h * 60 + m;
        };
        let playTime = toMin(end) - toMin(start);

        melody = convert(melody);
        m = convert(m);
        let melodyCnt = melody.length;
        let played = "";
        for (let i = 0; i < playTime; i++) {
            played += melody[i % melodyCnt];
        }

        if (played.includes(m)) matchedSongs.push( {title, playTime}) ;
    }

    if (matchedSongs.length === 0) return "(None)";
    else {
        matchedSongs.sort((a, b) => {
            if (b.playTime === a.playTime) return 0;
            return b.playTime - a.playTime; 
        });
                          
        return matchedSongs[0].title;
    }
}

function convert(melody) {
    return melody
        .replace(/C#/g, "c")
        .replace(/D#/g, "d")
        .replace(/F#/g, "f")
        .replace(/G#/g, "g")
        .replace(/A#/g, "a");
}