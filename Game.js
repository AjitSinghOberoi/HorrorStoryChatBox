const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    JOIN:  Symbol("JOIN"),
    WAIT: Symbol("wait"),
    CHOICE: Symbol("CHOICE"),
    HORROR: Symbol("horror"),
    HELP: Symbol("help"),
    DEATH: Symbol("death"),
    LAST: Symbol("last"),
    PATH: Symbol("path")

});

module.exports = class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "Group of friends decided to go to an adventures trip to a deserted Island to explore and party. Do you wish join the party as you are alone on island? YES or NO";
                this.stateCur = GameState.JOIN;
                break;
            case GameState.JOIN:
                if(sInput.toLowerCase().match("no")){
                    sReply = "And hour later you can hear them enjoying  and you have nothing to so still. Do you wish to join? YES or NO";
                    this.stateCur = GameState.JOIN;

                }else{
                    sReply = "After exploring the Island,now  the group decided to set up a tent. Joint is rolled and music is on. Do you wish to smoke YES or NO?";
                    this.stateCur = GameState.CHOICE;
                }
                break;
            case GameState.CHOICE:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "While setting your roll up you heard some weird noise out of bush .Will you, INVESTIGATE or WAIT?";
                    this.stateCur = GameState.HORROR;
                }else{
                    sReply = "Oh Shit, there are some noises coming out of the woods. You have two options, INVESTIGATE or WAIT?";
                    this.stateCur = GameState.HORROR;

                }
                break;
            case GameState.HORROR:
                if(sInput.toLowerCase().match("investigate")){
                    sReply = "You have seen a body hanging at the tree. Don't panic! Someone said. Do you want to CALL police or RUN back towards the tent";
                    this.stateCur = GameState.HELP;

                }else{
                    sReply = "Still the weird sound continues and every one is frightened .Would you INVESTIGATE or RUN back at tent ";
                    this.stateCur = GameState.DEATH;
    
                }
                break;
            case GameState.HELP:
                if(sInput.toLowerCase().match("call")){
                    sReply =  " Police Call services are not available because of no network on island. Do you want to INVESTIGATE more or Look for the way to get off the Island";
                    this.stateCur = GameState.DEATH;
                }else{
                    sReply = "you feel bit safe at the tent ,But Now you hear someone crying a loud for help .Will you try to help and  INVESTIGATE or FIND the way to go back? ";
                  this.stateCur = GameState.DEATH;
                }
                break;
            case GameState.DEATH:
                if(sInput.toLowerCase().match("investigate")){
                    sReply =  "You discover that body is of young girl with no limbs. you can hear the loud noise of braking bones coming towards you and taken one of your friend somewhere from you. Do you run AWAY or FIND your friend?";
                    this.stateCur = GameState.LAST;
                }else{
                    sReply = "you couldn't find any way to go back !!! OH shit! you are stuck on island now .. you failed GAME OVER ";
                    this.stateCur = GameState.WELCOMING;
                        }
                    break;
            case GameState.LAST:
                if(sInput.toLowerCase().match("away")){
                    sReply =  "you reach the camp safely BUT you can not complete the level and you lose !!GAME OVER";
                   
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply = "seems you really care for your friend  and came for his help you find 2 ways :full of TREES and a VILLAGE path."
                    this.stateCur = GameState.PATH;
                        
                    }
                    break;
                 case GameState.PATH:
                if(sInput.toLowerCase().match("village")){
                    sReply =  "oh no! this path took you out of island and you lost your friend .. you lose !!GAME OVER";
                   
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply = "Trees and quite haunting but you still walk in and there you get your friend trying to help some one else who was crying for help!! And Finally you all reaChed out YOU WON!!!  "
                    this.stateCur = GameState.WELCOMING;
                        
                    }
                    break;
        }
        return([sReply]);
    }
}
