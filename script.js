console.log(" WC to Tic tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X";
let gameEnd = false;

// Function to change turn
const changeTurn = ()=>{

    return turn === "X" ? "O" : "X";
}

// Function to check for win
const checkWin = ()=>{

    let boxtexts = document.getElementsByClassName('boxtext');
    let win = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    win.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== ""))
        {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won!!!"
            gameEnd=true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            // document.querySelector(".line").style.width = "20vw";
            // document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            gameover.play();
        }
    })
    
}

// Game Logic
// music.play();
let boxes =  document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === '')
        {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!gameEnd)
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
    })
});


//To reset the ttt
reset.addEventListener('click',()=>{
    let boxtextt = document.querySelectorAll('.boxtext');
    Array.from(boxtextt).forEach(element =>{
        element.innerText = ""
    });

    turn = "X";
    gameEnd=false;
    // document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})
