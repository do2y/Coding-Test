function solution(book_time) {
    function time_transfer(time) {
        const [h, m] = time.split(":");
        return Number(h) * 60 + Number(m);
    }

    const times = book_time.map(v => v.map(time => time_transfer(time)));

    times.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    const rooms = [];
    let need_rooms = 0;

    for (const [start, end] of times) {
        const index = rooms.findIndex(time => time <= start);

        if (index !== -1) {
            rooms[index] = end + 10;
        } else {
            rooms.push(end + 10);
            need_rooms++;
        }

        rooms.sort((a, b) => a - b);
    }

    return need_rooms;
}