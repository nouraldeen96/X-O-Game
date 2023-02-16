let role= 'x';
let title = document.querySelector(".title")
let countiner= document.querySelector(".countiner")
let won = document.getElementById("won")
var squar =document.getElementsByClassName("sq")
let value = []
var t=0;


function winner(){
    for (let i=1;i<10;i++){
        value[i] = document.getElementById('element' + i).innerHTML;
    }
    if( (value[1]==value[2] && value[2]==value[3] && value[3]=='X') | 
        (value[1]==value[4] && value[4]==value[7] && value[7]=='X') |
        (value[7]==value[8] && value[8]==value[9] && value[9]=='X') |
        (value[3]==value[6] && value[6]==value[9] && value[9]=='X') |
        (value[1]==value[5] && value[5]==value[9] && value[9]=='X') |
        (value[2]==value[5] && value[5]==value[8] && value[8]=='X') |
        (value[4]==value[5] && value[5]==value[6] && value[6]=='X') |
        (value[3]==value[5] && value[5]==value[7] && value[7]=='X') ){
        for( j=0;j<squar.length;j++)
        {squar[j].style.display = "none"}
        won.style.display = "block"
        won.innerHTML = "X win"
        won.style.color = "green"
        title.innerHTML=""
        title.style.backgroundColor ="green"
        countiner.style.backgroundColor =" rgba(4,9,30,0.8)"
        setTimeout(function(){location.reload()},3500)
    }
        
    else if (
        (value[1]==value[2] && value[2]==value[3] && value[3]=='O') | 
        (value[1]==value[4] && value[4]==value[7] && value[7]=='O') |
        (value[7]==value[8] && value[8]==value[9] && value[9]=='O') |
        (value[3]==value[6] && value[6]==value[9] && value[9]=='O') |
        (value[1]==value[5] && value[5]==value[9] && value[9]=='O') |
        (value[2]==value[5] && value[5]==value[8] && value[8]=='O') |
        (value[4]==value[5] && value[5]==value[6] && value[6]=='O') |
        (value[3]==value[5] && value[5]==value[7] && value[7]=='O')){
        for( j=0;j<squar.length;j++)
        {squar[j].style.display = "none"}
        won.style.display = "block"
        won.innerHTML = "O win"
        won.style.color = "green"
        title.innerHTML=""
        title.style.backgroundColor ="green"
        countiner.style.backgroundColor =" rgba(4,9,30,0.8)"
        setTimeout(function(){location.reload()},3500)
    }
    else if(t==8){
        for( j=0;j<squar.length;j++)
        {squar[j].style.display = "none"}
        won.style.display = "block"
        won.innerHTML = "Game Over"
        won.style.color = "red"
        title.innerHTML=""
        title.style.backgroundColor ="red"
        countiner.style.backgroundColor =" rgba(4,9,30,0.8)"
        setTimeout(function(){location.reload()},3500)
    } 
    t++   
}

function play(id){
    let element = document.getElementById(id);
    if (role === 'x' && element.innerHTML == ''){
        element.innerHTML = 'X'
        title.innerHTML = "O" 
        role = 'o'

    }else{
        if(element.innerHTML == ''){
            element.innerHTML = "O"
            title.innerHTML = "X" 
            role = 'x'
    }}
    winner()
}


