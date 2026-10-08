function solution(video_len, pos, op_start, op_end, commands) {
    
    //초단위로 변환하는 함수
    function transformTime(str) {
        const [min, sec] = str.split(":").map(Number);
        return min * 60 + sec;
    }
    
    //시간 포맷 맞추는 함수
    function formatTime(time) {
        const min = Math.floor(time / 60);
        const sec = time % 60;

        return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
    }
    
    video_len = transformTime(video_len);
    pos = transformTime(pos);
    op_start = transformTime(op_start);
    op_end = transformTime(op_end);
    
    //초기 위치가 오프닝 구간이라면 오프닝 끝나는 곳으로
    if (pos >= op_start && pos < op_end) pos = op_end;

    for (const command of commands) {
        if (command === "next") {
            pos = Math.min(pos + 10, video_len);
        } else {
            pos = Math.max(pos - 10, 0);
    }

        if (pos >= op_start && pos < op_end) pos = op_end;
    }
    
    return formatTime(pos);
    
}