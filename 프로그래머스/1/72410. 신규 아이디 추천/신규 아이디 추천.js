function solution(new_id) {
    
    let charset = "~!@#$%^&*()=+[{]}:?,<>/";
    
    new_id = new_id.toLowerCase();  //1단계
    for(let i=0; i<charset.length; i++){        //2단계
        new_id = new_id.split(charset[i]).join("");
    }
    
    new_id = new_id.replace(/\.{2,}/g, '.');    //3단계
    
    if (new_id[0] === ".")     //4단계
        new_id = new_id.substring(1);
    else if (new_id[new_id.length-1] === ".")
        new_id.substring(0, new_id.length-1);
    
    if (new_id === "")   //5단계
        new_id = "a";
    
    if (new_id.length >= 16)   //6단계
        new_id = new_id.substring(0, 15);
    if (new_id[new_id.length-1] === ".")
        new_id = new_id.substring(0, new_id.length-1);
    
    
    while (new_id.length < 3) {
        new_id += new_id[new_id.length - 1];
    }
    
    return new_id;
}