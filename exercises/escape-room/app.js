var ask = require("readline-sync");

console.log("You are in a room. Your options are: \n\n 1) Put your hand in a hole. \n\n 2) Find the key. \n\n or 3) Open the door.");
var selection = ask.question("\nWhich option do you choose (1, 2, or 3)?  ");
var selections = [];
console.log(escapeRoom(selection));

function escapeRoom (selection){
    var locked = true;
    while(locked){
        selections.push(selection);
        if (selection == 1){
            return "You have died.";
            locked = false;
        }else if(selection == 2){
            console.log("You have found a key.");
            selection = ask.question("\nWhich option do you choose (1, 2, or 3)?  ");
        }else if(selection == 3){
            for(var i = 0; i < selections.length; i++){
                if(selections.includes("2")){
                    locked = false;
                    return "You have opened the door with the key you found before. CONGRATULATIONS, you have escaped my escape room!";
                }else{
                    console.log("The door is locked. ");
                    selection = ask.question("\nWhich option do you choose (1, 2, or 3)?  ");
                }
            }
        }
    }
}




























