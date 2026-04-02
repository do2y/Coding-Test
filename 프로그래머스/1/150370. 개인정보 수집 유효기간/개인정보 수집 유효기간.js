function solution(today, terms, privacies) {
    
    const termMap = {};

    terms.forEach((v) => {
        const [a, b] = v.split(" ");
        termMap[a] = Number(b);
    });

    const toDelete = [];
    today = today.split(".").map(Number);
    let today_days = today[0] * 12 * 28 + today[1] * 28 + today[2];

    for (let i = 0; i < privacies.length; i++) {
        let [collectedDate, type] = privacies[i].split(" ");
        let expirationMonths = termMap[type];

        let [y, m, d] = collectedDate.split(".").map(Number);
        let total_days = y * 12 * 28 + m * 28 + d + expirationMonths * 28;

        if (total_days - 1 < today_days) toDelete.push(i + 1);
    }
    
    return toDelete;
}

