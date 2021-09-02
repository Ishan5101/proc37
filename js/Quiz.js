class Quiz{
    constructor(){}
    
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }
    update(state){ 
        database.ref('/').update({
            gameState:state
        });
    }
    async start(){
        if (gameState===0){
            contestant=new contestant();
            var contestCountRef=await database.ref('contestantCount').once('value');
            contestantCount=contestantCountRef.val();
            contestant.getCount();
        }

      }
    play(){
        question.hide();
        backGround("red");
        fill(0);
        textSize(30);
        text("Result of the Quiz",340,50);
        text("---------------------",320,65);
        contestant.getPlayerInfo();
        if(allContestants !== undefined){
            debugger;
            var correctAns="2";
            if(correctAns === allContestants[plr].answer)
            fill("green")
            else
            fill("red");
            display_Answers+=30;
            textSize(20);
            text(allContestants[plr].name +":" + allContestants[plr].answer,250,dispaly_Answers)

        }
    }

  }  
  







    






















