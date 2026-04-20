function mahjong_calc(){
    const point1 = Number(document.getElementById("point1").value) * 100;
    const point2 = Number(document.getElementById("point2").value)* 100;
    const point3 = Number(document.getElementById("point3").value)* 100;
    const point4 = Number(document.getElementById("point4").value)* 100;

    const uma_upper = Number(document.getElementById("uma_upper").value);
    const uma_lower = Number(document.getElementById("uma_lower").value);

    const oka_moti = Number(document.getElementById("oka_moti").value);
    const oka_kaesi = Number(document.getElementById("oka_kaesi").value);

    const result1_el = document.getElementById("result1");
    const result2_el = document.getElementById("result2");
    const result3_el = document.getElementById("result3");
    const result4_el = document.getElementById("result4");

    if(point1 + point2 + point3 + point4 != 100000){
        alert("点数が正しく入力されていません。");
        return;
    }

    const result1 = uma_upper + (oka_kaesi - oka_moti) * 4 / 1000 + point1 / 1000 - oka_kaesi / 1000;
    const result2 = uma_lower - oka_kaesi / 1000 + point2 / 1000;
    const result3 = -uma_lower - oka_kaesi / 1000 + point3 / 1000;
    const result4 = -(result1 + result2 + result3);

    result1_el.textContent = result1.toFixed(1);
    result2_el.textContent = result2.toFixed(1);
    result3_el.textContent = result3.toFixed(1);
    result4_el.textContent = result4.toFixed(1);

    const rate = Number(document.getElementById("rate").value);

    const money1_el = document.getElementById("money1");
    const money2_el = document.getElementById("money2");
    const money3_el = document.getElementById("money3");
    const money4_el = document.getElementById("money4");

    const money1 = result1 * rate;
    const money2 = result2 * rate;
    const money3 = result3 * rate;
    const money4 = result4 * rate;

    money1_el.textContent = money1.toFixed(0);
    money2_el.textContent = money2.toFixed(0);
    money3_el.textContent = money3.toFixed(0);
    money4_el.textContent = money4.toFixed(0);
}

function fill4point(){
    const point1 = Number(document.getElementById("point1").value);
    const point2 = Number(document.getElementById("point2").value);
    const point3 = Number(document.getElementById("point3").value);

    const point4 = 1000 - (point1 + point2 + point3);

    const point4_el = document.getElementById("point4");
    
    point4_el.value = point4.toFixed(0);
}