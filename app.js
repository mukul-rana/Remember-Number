var level;
var score;
var num;
var displayPeriod = 1000;

document.getElementById('start').onclick = function(){
    if(document.getElementById('start').innerHTML == 'Start'){
        document.getElementById('start').innerHTML = 'Stop';
        level = 4;
        score=0;  
        document.getElementById('score').innerHTML = "Score : " + score;
        num =  String(Math.random()).substring(2,2+level) ;

        document.getElementById('display').innerHTML = num;
        window.setTimeout( function(){
        document.getElementById('display').innerHTML = "";},displayPeriod);

        console.log(document.getElementById('input').value + " kuch") ;
    }
    else{
        document.getElementById('display').innerHTML = "";
        document.getElementById('start').innerHTML = 'Start';
        document.getElementById('score').innerHTML = "You Final Score : " + score;
    }
}

$(document).keypress(function(e){
    if(e.which ==13 ){
        if(document.getElementById('input').value == num) {score++;level++;}
        else score--;
        document.getElementById('input').value = '';
        num =  String(Math.random()).substring(2,2+level) ;
        document.getElementById('display').innerHTML = num;
        window.setTimeout( function(){
            document.getElementById('display').innerHTML = "";},displayPeriod);
        document.getElementById('score').innerHTML = "Score : " + score;
    }
    
});

