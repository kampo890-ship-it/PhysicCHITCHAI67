function calculate(){

    let s = parseFloat(document.getElementById("s").value);
    let u = parseFloat(document.getElementById("u").value);
    let v = parseFloat(document.getElementById("v").value);
    let a = parseFloat(document.getElementById("a").value);
    let t = parseFloat(document.getElementById("t").value);

    let result = "";

    // หา s
    if(isNaN(s)){
        s = ((u + v) / 2) * t;
        result = "s = " + s.toFixed(2) + " m";
    }

    // หา u
    else if(isNaN(u)){
        u = v - a*t;
        result = "u = " + u.toFixed(2) + " m/s";
    }

    // หา v
    else if(isNaN(v)){
        v = u + a*t;
        result = "v = " + v.toFixed(2) + " m/s";
    }

    // หา a
    else if(isNaN(a)){
        a = (v-u)/t;
        result = "a = " + a.toFixed(2) + " m/s²";
    }

    // หา t
    else if(isNaN(t)){
        t = (v-u)/a;
        result = "t = " + t.toFixed(2) + " s";
    }

    else{
        result = "กรุณาเว้นช่องที่ต้องการหาไว้ 1 ช่อง";
    }

    document.getElementById("result").innerText = result;
}