var level;
var score;
var num;
var displayPeriod;
var levelIncrement;

var flag;

document.getElementById('start').onclick = function(){
    if(document.getElementById('start').innerHTML == 'Start'){
        document.getElementById('start').innerHTML = 'Stop';
        level = 4;
        displayPeriod = 900;
        levelIncrement=0;
        score=0;  
        document.getElementById('score').innerHTML = "Score : " + score;

        num =  String(Math.random()).substring(2,2+level) ;

        
        document.getElementById('input').value = num;
        document.getElementById("input").disabled = true;
        flag =0;


        window.setTimeout( function(){
        document.getElementById('input').value = "";
        document.getElementById("input").disabled = false;
        document.getElementById("input").focus();
        flag=1;
        },displayPeriod);
        

        
    }
    else{
        document.getElementById('input').value = "";
        document.getElementById('start').innerHTML = 'Start';
        document.getElementById('score').innerHTML = "You Final Score : " + score;
    }
}


$(document).keyup(function(e){  
    
    if(flag == 0) 
        return;
    
    
    var userNum = document.getElementById('input').value;
    if(String(userNum).length >= String(num).length){
        userNum = String(userNum);
        var tempScore =0;
        
        if( userNum === num){
            tempScore+=level;
            levelIncrement++;
            if(levelIncrement===3){
                level++;
                displayPeriod += 50;
                levelIncrement=0;
            }
        }
        else {
            
            for(var i=0;i<userNum.length;i++)
              if(userNum.substring(i,i+1)!=num.substring(i,i+1))
                  tempScore--;
              else 
                  tempScore++;
            levelIncrement--;
            if(levelIncrement<0 && level>4){

                level--;
                displayPeriod -= 50;
                levelIncrement=2;
            }
        }

        if(score + tempScore >=0)
        score += tempScore;
        document.getElementById('input').value = '';


        num =  String(Math.random()).substring(2,2+level) ;
        document.getElementById('score').innerHTML = "Score : " + score;
        window.setTimeout( function(){
            document.getElementById('input').value = num;
            document.getElementById("input").disabled = true;
            flag=0;

        window.setTimeout( function(){
            document.getElementById('input').value = "";
            document.getElementById("input").disabled = false;
            flag=1;
            document.getElementById('input').focus();
        },displayPeriod);

        
        document.getElementById('score').innerHTML = "Score : " + score;

        },400);
        

        
        
        
    }
});
