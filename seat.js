function pickseat(){
    const hougaku = ["東","南","西","北"];

    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");
    const img3 = document.getElementById("img3");
    const img4 = document.getElementById("img4");

    for(let i = 0; i < 30; i++){
        setTimeout(() => {
            const shuffled = [...hougaku].sort(() => 0.5 - Math.random());

            attachimage(shuffled[0], img1);
            attachimage(shuffled[1], img2);
            attachimage(shuffled[2], img3);
            attachimage(shuffled[3], img4);
        }, i * 40);
    }
}

function attachimage(hougaku,img){
    switch(hougaku){
        case "東":
            img.src = "https://majandofu.com/wp-content/uploads/2014/09/ji1-66-90-s.png";
            break;
        case "南":
            img.src = "https://majandofu.com/wp-content/uploads/2014/09/ji2-66-90-s.png";
            break;
        case "西":
            img.src = "https://majandofu.com/wp-content/uploads/2014/09/ji3-66-90-s.png";
            break;
        case "北":
            img.src = "https://majandofu.com/wp-content/uploads/2014/09/ji4-66-90-s.png";
            break;
        
    }
}