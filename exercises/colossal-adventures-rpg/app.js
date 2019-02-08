var ask = require("readline-sync");

console.log("Welcome to your first Colossal Adventure!");
var name = ask.question("To get started on your quest, please enter your name:  ");

console.log("Welcome, " + name + ".");
console.log("At any time during the game, if you wish to see your HP level and/or your inventory, enter 'print'. You are starting with 30 HP and no inventory.");
var selection = ask.question("To walk, enter 'w'.  ");
selection = selection.charAt(0).toUpperCase() + selection.slice(1);

var inGame = true;
var enemy = "Dragon";
var inventory = [];
var enemyHP = 15;
var userHP = 20;
var attackBonus = 0;
var attack = "Y";
while (inGame) {
    if (selection === "W") {
        var randomAttack = Math.floor((Math.random() * 10) + 1);
        if (randomAttack < 4) {
            var randomEnemy = Math.floor((Math.random() * 10) + 1);
            if (randomEnemy < 4) {
                attackYN = ask.question("A giant has appeared! Do you wish to attack(Y or N)?  ");
                enemy = "giant";
            } else if (randomEnemy < 8) {
                attackYN = ask.question("A wolf has appeared! Do you wish to attack(Y or N)?  ");
                enemy = "wolf";
            }else {
                attackYN = ask.question("A zombie has appeared! Do you wish to attack(Y or N)?  ");
                enemy = "zombie";
            }
            attackYN = attackYN.charAt(0).toUpperCase() + attackYN.slice(1);



            var fight = true;
            while (fight) {
                attackYN = attackYN.toUpperCase(0);
                var enemyAttack = Math.floor((Math.random() * 5) + 1);
                if(attackYN == "N"){
                   run ();
                } else if (attackYN === "Y") {
                    var attackPwr = Math.floor((Math.random() * 10) + 1);
                    console.log("Your attack took " + attackPwr + " HP from the " + enemy + " .");
                    enemyHP = enemyHP - attackPwr - attackBonus;
                    console.log("The " + enemy + " has attacked! It took " + enemyAttack + " of your HP.");
                    userHP = userHP - enemyAttack;
                    attackYN = ask.question("Do you wish to attack(Y or N)?  ");
                        attackYN = attackYN.charAt(0).toUpperCase() + attackYN.slice(1);
                } else if (attackYN === "Print") {
                    console.log(name + ", you have " + userHP + " HP.\nYou have the following items in your inventory: " + inventory);
                    attackYN = ask.question("A " + enemy + " has appeared! Do you wish to attack(Y or N)?  ");
                    attackYN = attackYN.toUpperCase(0);
                } else { 
                    attackYN = ask.question("You have not entered a valid option. Do you wish to attack(Y or N)?");
                    attackYN = attackYN.toUpperCase(0);
                }



                if (enemyHP <= 0) {
                    killedEnemey ();
                }

                if (userHP <= 0) {
                    console.log("The " + enemy + " killed you!");
                    fight = false;
                }
            }
        }
    } else if (selection === "Print") {
        console.log(name + ", you have " + userHP + " HP.\nYou have the following items in your inventory: " + inventory);
        selection = ask.question("To walk, enter 'w'.  ");
        selection = selection.charAt(0).toUpperCase() + selection.slice(1);
    } else {
        selection = ask.question("You have not entered a valid option. To walk, enter 'w'. ");
        selection = selection.charAt(0).toUpperCase() + selection.slice(1);
    }
}



function run(){
    console.log("You have chosen to run instead of attack.");
    var run = true;
    while (run){
        var runChance = Math.floor((Math.random() * 2) + 1);
        if(runChance === 1){
            console.log("You have successfully run away.");
            fight = false;
            continueGame();
        }else{
            console.log("You were not successful in running away.");
            console.log("The " + enemy + " has attacked! They took " + enemyAttack + " of your HP.");
            userHP = userHP - enemyAttack;
            attackYN = ask.question("Do you wish to attack(Y or N)?  ");
            attackYN = attackYN.charAt(0).toUpperCase() + attackYN.slice(1);
            if (attackYN === "Y"){
                run = false;
            }
        }
    }
}







function killedEnemey(){
    console.log("You have killed the " + enemy + "! You have received 4 bonus HP!");
    userHP = userHP + 4;
    if (enemy === 'giant'){
        console.log("After looting the " + enemy + ", you find some armor that increases your HP by 2!");
        userHP = userHP +2;
        inventory.push("armor");
    } else if (enemy === 'wolf') {
        console.log("After looting the " + enemy + ", you find an amulet that reduces the enemy's HP by 5!");
        enemyHP = enemyHP - 5;
        inventory.push("amulet");
    } else {
        console.log("After looting the " + enemy + ", you find a dagger that increases your attack power by 5!");
        attackBonus = attackBonus + 5;
        inventory.push("dagger");
    }

    fight = false;
    continueGame();
};









function continueGame(){
    var continueGame = ask.question("Do you wish to continue the game(Y or N)?  ");
    continueGame = continueGame.charAt(0).toUpperCase() + continueGame.slice(1);
    var play = false;
    while(!play){
        if (continueGame === "N") {
            play = true;
            run = false;
            fight = false;
            inGame = false;
        } else if (continueGame === "Y") {
            selection = ask.question("To walk, enter 'w'. ");
            selection = selection.charAt(0).toUpperCase() + selection.slice(1);
            play = true;
            run = false;
        } else if (continueGame === "Print") {
            console.log(name + ", you have " + userHP + " HP.\nYou have the following items in your inventory: " + inventory);
            continueGame = ask.question("Do you wish to continue the game(Y or N)?  ");
            continueGame = continueGame.charAt(0).toUpperCase() + continueGame.slice(1);
        } else {
            continueGame = ask.question("You have not entered a valid option. Do you wish to continue the game(Y or N)?  ");
            continueGame = continueGame.charAt(0).toUpperCase() + continueGame.slice(1);
        }
    }
};