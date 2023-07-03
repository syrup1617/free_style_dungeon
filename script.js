

    // オーディオを配列で取得
let rhythm_machine = new Audio("リズムマシーンA1.wav");

let sounds = [
    guitar1 = new Audio("ギター1.wav"),
    guitar2 = new Audio("ギター2.wav"),
    guitar3 = new Audio("ロックギターリフ.wav"),
    guitar4 = new Audio("ギター3.wav"),
    cutting = new Audio("カッティング.wav"),
    Oh = new Audio("Oh.wav"),
    house_drum = new Audio("ハウスドラム.wav"),
    handClap = new Audio("ハンド.wav"),
    bass = new Audio("ベース.wav"),
    read = new Audio("リード.wav"),
    nigiyakashi = new Audio("賑やかし.wav"),
    organ = new Audio("オルガン.wav"),
];


    // ボタンを配列で取得
let buttons = [];
    for (let i = 1; i < 13; i++) {
        buttons.push(document.getElementById("button" + i));
    };



    //オンオフボタンのIDを取得
let switch_on = document.getElementById("switch_on");
let switch_off = document.getElementById("switch_off");
let donut = document.getElementById("donut");
let donut2 = document.getElementById("donut2");




    // オンオフボタン クリックしたらリズムマシーンを再生する
let switchOn = switch_on.onclick = () => {
    rhythm_machine.play();  //サウンドを再生
    rhythm_machine.currentTime = 0;  //再生開始位置を先頭に戻す
    
    donut.classList.add("donut_active");
    switch_on.classList.add("switch_on_active");
    switch_off.classList.add("switch_off_active");

    setTimeout(() => {
        donut.classList.remove("donut_active");
        switch_on.classList.remove("switch_on_active");
        switch_off.classList.remove("switch_off_active");
        }, 128000);
};
let switchOff = switch_off.onclick = () => {
    rhythm_machine.pause();  //サウンドを停止

    donut.classList.remove("donut_active");
    switch_on.classList.remove("switch_on_active");
    switch_off.classList.remove("switch_off_active");
};


// キーを押したらリズムマシーンを再生する
document.addEventListener("keydown", (e) => {
    const key = e.keyCode;
    
    if (key === 32) {
        switchOn();
    }
    if (key === 8) {
        switchOff();
    }});



// ボタンをクリックしたらオーディオを再生
for (let i = 0, j = 1; i < 12, j < 13; i++, j++) {
    buttons[i].onclick = () => {
        sounds[i].currentTime = 0;
        sounds[i].play();

        donut2.classList.add("donut2_active");
        buttons[i].classList.add('button' + j + '_active');

        setTimeout(() => {
            donut2.classList.remove("donut2_active");
            buttons[i].classList.remove('button' + j + '_active');
        }, 10000);

        if (sounds[i] === sounds[0] || sounds[i] === sounds[9]) {
            sounds[i].volume = 0.6;
        }

        if (sounds[i] === sounds[1] ||
            sounds[i] === sounds[2] ||
            sounds[i] === sounds[3]) {
            sounds[i].volume = 0.5;
        }

        if (sounds[i] === sounds[4]) {
            sounds[i].volume = 0.8;
        }

        if (buttons[i] === buttons[5] ||
            buttons[i] === buttons[6]) {
                setTimeout(() => {
                    donut2.classList.remove("donut2_active");
                    buttons[i].classList.remove('button' + j + '_active');
                }, 2000);
            }

        if (buttons[i] === buttons[10]) {
                setTimeout(() => {
                    donut2.classList.remove("donut2_active");
                    buttons[i].classList.remove('button' + j + '_active');
                }, 5000);
            }
}};

// キーコードを読み込んで指定されたキーを押すとオーディオを再生する
document.addEventListener("keydown", (e) => {
    const key = e.keyCode;
    let keyCodes = [87,69,82,83,68,70,85,73,79,74,75,76];
        for (let i = 0, j = 1; i < 12, j < 13; i++, j++) {
       
        if (key === keyCodes[i]) {
            sounds[i].currentTime = 0;  
            sounds[i].play();   
            donut2.classList.add("donut2_active");
            buttons[i].classList.add('button' + j + '_active');
            
    // 10秒後に実行
    setTimeout(() => {
        donut2.classList.remove("donut2_active");
        buttons[i].classList.remove('button' + j + '_active');
        }, 10000);

        if (sounds[i] === sounds[0] || sounds[i] === sounds[9]) {
            sounds[i].volume = 0.6;
        }

        if (sounds[i] === sounds[1] ||
            sounds[i] === sounds[2] ||
            sounds[i] === sounds[3]) {
            sounds[i].volume = 0.5;
        }

        if (sounds[i] === sounds[4]) {
            sounds[i].volume = 0.8;
        }

        if (buttons[i] === buttons[5] ||
            buttons[i] === buttons[6]) {
                setTimeout(() => {
                    donut2.classList.remove("donut2_active");
                    buttons[i].classList.remove('button' + j + '_active');
                }, 2000);
        }

        if (buttons[i] === buttons[10]) {
                setTimeout(() => {
                    donut2.classList.remove("donut2_active");
                    buttons[i].classList.remove('button' + j + '_active');
                }, 5000);
        }}
            // console.log(key);
    }});









    




    


   



    





    
   


 

