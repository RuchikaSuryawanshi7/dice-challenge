var Number1 = Math.floor(Math.random() * 6 + 1);
var img1 = "images/dice"+ Number1+ ".png";
var Number2 = Math.floor(Math.random() * 6 + 1);
var img2 = "images/dice" + Number2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",img1);
document.querySelectorAll("img")[1].setAttribute("src", img2);
if(Number1 > Number2){
    document.querySelector("h1").innerHTML = "Player 1 Wins &#128151";
}else if( Number2 > Number1){
    document.querySelector("h1").innerHTML = "&#128516 Player 2 Wins";
}else{
    document.querySelector("h1").innerHTML = "Draw! &#128512";
}