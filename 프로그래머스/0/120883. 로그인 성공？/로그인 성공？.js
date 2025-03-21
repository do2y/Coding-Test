function solution(id_pw, db) {
    if(db.some(info => info.length === id_pw.length && info.every((v, idx) => v === id_pw[idx])))
        return "login";
    else{
        return db.map( arr => arr = arr[0]).includes(id_pw[0]) ? "wrong pw" : "fail";
    }
        
}