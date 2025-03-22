function solution(chicken) {
    let service = 0;
    let coupon = chicken;

    while (coupon >= 10) {
        let extra = Math.floor(coupon / 10);
        service += extra;
        coupon = coupon % 10 + extra;
    }

    return service;
}
