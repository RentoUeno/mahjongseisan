function mahjong_calc(){
    const point1 = Number(document.getElementById("point1").value) * 100;
    const point2 = Number(document.getElementById("point2").value)* 100;
    const point3 = Number(document.getElementById("point3").value)* 100;

    const uma = Number(document.getElementById("uma").value);

    const oka_moti = Number(document.getElementById("oka_moti").value);
    const oka_kaesi = Number(document.getElementById("oka_kaesi").value);

    const result1_el = document.getElementById("result1");
    const result2_el = document.getElementById("result2");
    const result3_el = document.getElementById("result3");

    if(point1 + point2 + point3 !== 105000){
        alert("点数が正しく入力されていません。");
        return;
    }

    let result1 = uma + (oka_kaesi - oka_moti) * 3 / 1000 + point1 / 1000 - oka_kaesi / 1000;
    let result2 = - oka_kaesi / 1000 + point2 / 1000;
    let result3 = -(result1 + result2);

    let sizumiuma = 0;

    if(point2 < 40000){
        sizumiuma += 10;
        result2 -= 10;
    }
    result1 += sizumiuma;

    result1_el.textContent = result1.toFixed(1);
    result2_el.textContent = result2.toFixed(1);
    result3_el.textContent = result3.toFixed(1);

    const rate = Number(document.getElementById("rate").value);

    const money1_el = document.getElementById("money1");
    const money2_el = document.getElementById("money2");
    const money3_el = document.getElementById("money3");

    const money1 = result1 * rate;
    const money2 = result2 * rate;
    const money3 = result3 * rate;

    money1_el.textContent = money1.toFixed(0);
    money2_el.textContent = money2.toFixed(0);
    money3_el.textContent = money3.toFixed(0);
}

function fill3point(){
    const point1 = Number(document.getElementById("point1").value);
    const point2 = Number(document.getElementById("point2").value);

    const point3 = 1050 - (point1 + point2);

    const point3_el = document.getElementById("point3");
    
    point3_el.value = point3.toFixed(0);
}