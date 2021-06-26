var level;
var score;
var num;
var displayPeriod = 1000;
var levelIncrement;



document.getElementById('start').onclick = function(){
    if(document.getElementById('start').innerHTML == 'Start'){
        document.getElementById('start').innerHTML = 'Stop';
        level = 4;
        levelIncrement=0;
        score=0;  
        document.getElementById('score').innerHTML = "Score : " + score;
        num =  String(Math.random()).substring(2,2+level) ;

        document.getElementById('display').innerHTML = num;
        window.setTimeout( function(){
        document.getElementById('display').innerHTML = "";},displayPeriod);

        
    }
    else{
        document.getElementById('display').innerHTML = "";
        document.getElementById('start').innerHTML = 'Start';
        document.getElementById('score').innerHTML = "You Final Score : " + score;
    }
}

$(document).keyup(function(e){  
    var userNum = document.getElementById('input').value;
    if(String(userNum).length == String(num).length){
        userNum = String(userNum);
        var tempScore =0;
        
        if( userNum === num){
            tempScore++;
            levelIncrement++;
            if(levelIncrement===3){
                level++;
                levelIncrement=0;
            }
        }
        else {
            tempScore--;
            levelIncrement--;
            if(levelIncrement<0 && level>4){

                level--;
                levelIncrement=2;
            }
        }

        score += tempScore;
        document.getElementById('input').value = '';
        num =  String(Math.random()).substring(2,2+level) ;
        document.getElementById('display').innerHTML = num;
        window.setTimeout( function(){
            document.getElementById('display').innerHTML = "";},displayPeriod);
        document.getElementById('score').innerHTML = "Score : " + score;
    }
});


