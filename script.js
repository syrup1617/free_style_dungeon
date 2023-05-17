

    // オーディオを配列で取得
let ary1 = [
    rhythm_machine = new Audio("リズムマシーンA1.wav"),
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

    // ボタンidを配列で取得
let ary2 = [
    document.getElementById("button1"),
    document.getElementById("button2"),
    document.getElementById("button3"),
    document.getElementById("button4"),
    document.getElementById("button5"),
    document.getElementById("button6"),
    document.getElementById("button7"),
    document.getElementById("button8"),
    document.getElementById("button9"),
    document.getElementById("button10"),
    document.getElementById("button11"),
    document.getElementById("button12"),
];

    //オンオフボタンのIDを取得
let switch_on = document.getElementById("switch_on");
let switch_off = document.getElementById("switch_off");
let donuts = document.getElementById("donuts");
let donuts2 = document.getElementById("donuts2");




    // オンオフボタン
switch_on.onclick = () => {
    ary1[0].play();  //サウンドを再生
    ary1[0].currentTime = 0;  //再生開始位置を先頭に戻す
    
    donuts.classList.add("donuts_active");
    switch_on.classList.add("switch_on_active");
    switch_off.classList.add("switch_off_active");

    setTimeout(() => {
        donuts.classList.remove("donuts_active");
        switch_on.classList.remove("switch_on_active");
        switch_off.classList.remove("switch_off_active");
        }, 128000);
};
switch_off.onclick = () => {
    ary1[0].pause();  //サウンドを停止

    donuts.classList.remove("donuts_active");
    switch_on.classList.remove("switch_on_active");
    switch_off.classList.remove("switch_off_active");
};



    // ボタンをクリックしたらオーディオを再生
button1.onclick = () => {
    ary1[1].currentTime = 0;  //再生開始位置を先頭に戻す
    ary1[1].play();  //サウンドを再生
    ary1[1].volume = 0.6;  //ボリューム調整
    donuts2.classList.add("donuts2_active");
    button1.classList.add("button1_active");

    // 10秒後に実行
    setTimeout(() => {
        donuts2.classList.remove("donuts2_active");
        button1.classList.remove("button1_active");
        }, 10000);
};

button2.onclick = () => {
    ary1[2].currentTime = 0;  
    ary1[2].play();
    ary1[2].volume = 0.5;  
    donuts2.classList.add("donuts2_active");
    button2.classList.add("button2_active");

    // 10秒後に実行
    setTimeout(() => {
        donuts2.classList.remove("donuts2_active");
        button2.classList.remove("button2_active");
        }, 10000);
};

button3.onclick = () => {
    ary1[3].currentTime = 0;  
    ary1[3].play();  
    ary1[3].volume = 0.5;  
    donuts2.classList.add("donuts2_active");
    button3.classList.add("button3_active");

    // 10秒後に実行
    setTimeout(() => {
        donuts2.classList.remove("donuts2_active");
        button3.classList.remove("button3_active");
        }, 10000);
};

button4.onclick = () => {
    ary1[4].currentTime = 0;  
    ary1[4].play();
    ary1[4].volume = 0.6;  
    donuts2.classList.add("donuts2_active");
    button4.classList.add("button4_active");

    // 10秒後に実行
    setTimeout(() => {
        donuts2.classList.remove("donuts2_active");
        button4.classList.remove("button4_active");
        }, 10000);
};

button5.onclick = () => {
    ary1[5].currentTime = 0;  
    ary1[5].play();  
    ary1[5].volume = 0.8;  
    donuts2.classList.add("donuts2_active");
    button5.classList.add("button5_active");

    // 10秒後に実行
    setTimeout(() => {
        donuts2.classList.remove("donuts2_active");
        button5.classList.remove("button5_active");
        }, 10000);
};

button6.onclick = () => {
    ary1[6].currentTime = 0;  
    ary1[6].play();  
    donuts2.classList.add("donuts2_active");
    button6.classList.add("button6_active");

    //2秒後に実行
    setTimeout(() => {
        donuts2.classList.remove("donuts2_active");
        button6.classList.remove("button6_active");
        }, 2000);
};

button7.onclick = () => {
    ary1[7].currentTime = 0;  
    ary1[7].play();  
    donuts2.classList.add("donuts2_active");
    button7.classList.add("button7_active");

    // 2秒後に実行
    setTimeout(() => {
        donuts2.classList.remove("donuts2_active");
        button7.classList.remove("button7_active");
        }, 2000);
};

button8.onclick = () => {
    ary1[8].currentTime = 0;  
    ary1[8].play();
    donuts2.classList.add("donuts2_active");
    button8.classList.add("button8_active");

    // 10秒後に実行
    setTimeout(() => {
    donuts2.classList.remove("donuts2_active");
    button8.classList.remove("button8_active");
    }, 10000);
};

button9.onclick = () => {
    ary1[9].currentTime = 0;  
    ary1[9].play();  
    donuts2.classList.add("donuts2_active");
    button9.classList.add("button9_active");

    // 10秒後に実行
    setTimeout(() => {
    donuts2.classList.remove("donuts2_active");
    button9.classList.remove("button9_active");
    }, 10000);
};

button10.onclick = () => {
    ary1[10].currentTime = 0;  
    ary1[10].play(); 
    ary1[10].volume = 0.6;  
    donuts2.classList.add("donuts2_active");
    button10.classList.add("button10_active");

    // 10秒後に実行
    setTimeout(() => {
        donuts2.classList.remove("donuts2_active");
        button10.classList.remove("button10_active");
        }, 10000);
};

button11.onclick = () => {
    ary1[11].currentTime = 0;  
    ary1[11].play();  
    donuts2.classList.add("donuts2_active");
    button11.classList.add("button11_active");

    // 5秒後に実行
    setTimeout(() => {
        donuts2.classList.remove("donuts2_active");
        button11.classList.remove("button11_active");
        }, 5000);
};

button12.onclick = () => {
    ary1[12].currentTime = 0;  
    ary1[12].play(); 
    donuts2.classList.add("donuts2_active");
    button12.classList.add("button12_active");

    // 10秒後に実行
    setTimeout(() => {
        donuts2.classList.remove("donuts2_active");
        button12.classList.remove("button12_active");
        }, 10000);
};

    

// キーコードを読み込んで指定のキーを押すとオーディオを再生する
document.addEventListener("keydown", (e) => {
        const key = e.keyCode;
    if (key === 32) {
        ary1[0].play();  //サウンドを再生
        ary1[0].currentTime = 0;  //再生開始位置を先頭に戻す
        
        donuts.classList.add("donuts_active");
        switch_on.classList.add("switch_on_active");
        switch_off.classList.add("switch_off_active");

    setTimeout(() => {
        donuts.classList.remove("donuts_active");
        switch_on.classList.remove("switch_on_active");
        switch_off.classList.remove("switch_off_active");
        }, 128000);
    } 
    if (key === 8) {
        rhythm_machine.pause();  //サウンドを停止

        donuts.classList.remove("donuts_active");
        switch_on.classList.remove("switch_on_active");
        switch_off.classList.remove("switch_off_active");
    } 
    if (key === 87) {
        ary1[1].currentTime = 0;  
        ary1[1].play();   
        ary1[1].volume = 0.6;  //ボリューム調整
        donuts2.classList.add("donuts2_active");
        button1.classList.add("button1_active");
        
        // 10秒後に実行
    setTimeout(() => {
        donuts2.classList.remove("donuts2_active");
        button1.classList.remove("button1_active");
        }, 10000);
    } 
    if (key === 69) {
        ary1[2].currentTime = 0;  
        ary1[2].play();   
        ary1[2].volume = 0.5;  
        donuts2.classList.add("donuts2_active");
        button2.classList.add("button2_active");
            
        // 10秒後に実行
    setTimeout(() => {
        donuts2.classList.remove("donuts2_active");
        button2.classList.remove("button2_active");
        }, 10000);
    }
    if (key === 82) {
        ary1[3].currentTime = 0;  
        ary1[3].play();   
        ary1[3].volume = 0.5;  
        donuts2.classList.add("donuts2_active");
        button3.classList.add("button3_active");
            
        // 10秒後に実行
    setTimeout(() => {
        donuts2.classList.remove("donuts2_active");
        button3.classList.remove("button3_active");
        }, 10000);
    }
    if (key === 83) {
        ary1[4].currentTime = 0;  
        ary1[4].play();  
        ary1[4].volume = 0.6;  
        donuts2.classList.add("donuts2_active");
        button4.classList.add("button4_active");
            
        // 10秒後に実行
    setTimeout(() => {
        donuts2.classList.remove("donuts2_active");
        button4.classList.remove("button4_active");
        }, 10000);
    }
    if (key === 68) {
        ary1[5].currentTime = 0;  
        ary1[5].play();   
        ary1[5].volume = 0.8;  
        donuts2.classList.add("donuts2_active");
        button5.classList.add("button5_active");
            
        // 10秒後に実行
    setTimeout(() => {
        donuts2.classList.remove("donuts2_active");
        button5.classList.remove("button5_active");
        }, 10000);
    }
    if (key === 70) {
        ary1[6].currentTime = 0;  
        ary1[6].play();   
        donuts2.classList.add("donuts2_active");
        button6.classList.add("button6_active");
            
        //2秒後に実行
    setTimeout(() => {
        donuts2.classList.remove("donuts2_active");
        button6.classList.remove("button6_active");
        }, 2000);
    }
    if (key === 85) {
        ary1[7].currentTime = 0;  
        ary1[7].play();   
        donuts2.classList.add("donuts2_active");
        button7.classList.add("button7_active");
            
        // 2秒後に実行
    setTimeout(() => {
        donuts2.classList.remove("donuts2_active");
        button7.classList.remove("button7_active");
        }, 2000);
    }
    if (key === 73) {
        ary1[8].currentTime = 0;  
        ary1[8].play();   
        donuts2.classList.add("donuts2_active");
        button8.classList.add("button8_active");
            
        // 10秒後に実行
    setTimeout(() => {
        donuts2.classList.remove("donuts2_active");
        button8.classList.remove("button8_active");
        }, 10000);
    }
    if (key === 79) {
        ary1[9].currentTime = 0; 
        ary1[9].play();   
        donuts2.classList.add("donuts2_active");
        button9.classList.add("button9_active");
            
        // 10秒後に実行
    setTimeout(() => {
        donuts2.classList.remove("donuts2_active");
        button9.classList.remove("button9_active");
        }, 10000);
    }
    if (key === 74) {
        ary1[10].currentTime = 0;  
        ary1[10].play();  
        ary1[10].volume = 0.6;  
        donuts2.classList.add("donuts2_active");
        button10.classList.add("button10_active");
            
        // 10秒後に実行
    setTimeout(() => {
        donuts2.classList.remove("donuts2_active");
        button10.classList.remove("button10_active");
        }, 10000);
    }
    if (key === 75) {
        ary1[11].currentTime = 0;  
        ary1[11].play();  
        donuts2.classList.add("donuts2_active");
        button11.classList.add("button11_active");
        
        // 5秒後に実行
    setTimeout(() => {
        donuts2.classList.remove("donuts2_active");
        button11.classList.remove("button11_active");
        }, 5000);
    }
    if (key === 76) {
        ary1[12].currentTime = 0;  
        ary1[12].play();   
        donuts2.classList.add("donuts2_active");
        button12.classList.add("button12_active");

        // 10秒後に実行
    setTimeout(() => {
        donuts2.classList.remove("donuts2_active");
        button12.classList.remove("button12_active");
        }, 10000);
    } 
        // console.log(key);
    });

    


   



    





    
   


 

