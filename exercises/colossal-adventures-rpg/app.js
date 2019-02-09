var ask = require("readline-sync");

console.log("Welcome to your first Colossal Adventure!");
var name = ask.question("To get started on your quest, please enter your name:  ");

console.log("\nWelcome, " + name + ".");
console.log("\nAt any time during the game, if you wish to see your HP level and/or your inventory, enter 'print'. You are starting with 30 HP and no inventory.");
var selection = ask.question("To walk, enter 'w'.  ");

var inGame = true;
var enemy = "";
var inventory = [];
var enemyHP = 15;
var userHP = 20;
var attackBonus = 0;
while (inGame) {
    if (selection.toUpperCase() === "W") {
       whichEnemy();

        var fight = true;
        while (fight) {
            var enemyAttack = Math.floor((Math.random() * 5) + 1);
            attack();
            
            if (enemyHP <= 0) {
                killedEnemy();
                continueGame();
                fight = false;
            }

            if (userHP <= 0) {
                console.log("\nThe " + enemy + " killed you!");
                fight = false;
            }
            
        }

        if(userHP >= 30){
            console.log("\nCONGRATULATIONS!!!!! You just won the game!!!!!");
            console.log("\nYou ended the game with " + userHP + "and you had the following items in your inventory: " + inventory.join(", "));
            inGame = false;
        }
    } else if (selection.toUpperCase() === "PRINT") {
        console.log("\n" + name + ", you have " + userHP + " HP.\nYou have the following items in your inventory: " + inventory.join(", "));
        selection = ask.question("\nTo walk, enter 'w'.  ");
    } else {
        selection = ask.question("\nYou have not entered a valid option. To walk, enter 'w'. ");
    }
}


//creates fight

function attack(){
    if(attackYN.toUpperCase() == "N"){
        runAway();
    } else if (attackYN.toUpperCase() === "Y") {
        var attackPwr = Math.floor((Math.random() * 10) + 1);
        console.log("\nYour attack took " + attackPwr + " HP from the " + enemy + " .");
        enemyHP = enemyHP - attackPwr - attackBonus;
        console.log("\nThe " + enemy + " has attacked! It took " + enemyAttack + " of your HP.");
        userHP = userHP - enemyAttack;
        attackYN = ask.question("\nDo you wish to attack(Y or N)?  ");
    } else if (attackYN.toUpperCase() === "PRINT") {
        console.log("\n" + name + ", you have " + userHP + " HP.\nYou have the following items in your inventory: " + inventory.join(", "));
        attackYN = ask.question("\nDo you wish to attack(Y or N)?  ");
    } else { 
        attackYN = ask.question("\nYou have not entered a valid option. Do you wish to attack(Y or N)?");
    }
    return {userHP, enemyHP, attackYN};
}


//Determines what enemy the user gets

function whichEnemy(){
    var walking = Math.floor((Math.random() * 10) + 1);
    var randomEnemy = Math.floor((Math.random() * 10) + 1);
    if (randomEnemy < 4) {
        attackYN = ask.question("\nYou walk " + walking + " steps before a giant appears! Do you wish to attack(Y or N)?  ");
        enemy = "giant";
    } else if (randomEnemy < 8) {
        attackYN = ask.question("\nYou walk " + walking + " steps before a wolf appears! Do you wish to attack(Y or N)?  ");
        enemy = "wolf";
    }else {
        attackYN = ask.question("\nYou walk " + walking + " steps before a zombie appears! Do you wish to attack(Y or N)?  ");
        enemy = "zombie";
    }
    return {enemy, attackYN};
}

//Determines if user is successful in running away.

function runAway(){
    console.log("\nYou have chosen to run instead of attack.");
    var run = true;
    while (run){
        var runChance = Math.floor((Math.random() * 2) + 1);
        if(runChance === 1){
            console.log("\nYou have successfully run away.");
            fight = false;
            continueGame();
            return fight;
        }else{
            console.log("\nYou were not successful in running away.");
            console.log("\nThe " + enemy + " has attacked! They took " + enemyAttack + " of your HP.");
            userHP = userHP - enemyAttack;
            attackYN = ask.question("\nDo you wish to attack(Y or N)?  ");
            if (attackYN.toUpperCase() === "Y"){
                run = false;
            }
        }
    }
    return userHP;
}

//Determines and pushes to the array whatever loot the user gets from the enemy.

function killedEnemy(){
    console.log("\nYou have killed the " + enemy + "! You have received 4 bonus HP!");
    userHP = userHP + 4;
    if (enemy === 'giant'){
        console.log("\nAfter looting the " + enemy + ", you find some armor that increases your HP by 2!");
        userHP = userHP +2;
        if(inventory.length > 5){
            console.log("\nYou do not have enough space in your inventory for the armor, so you are forced to leave it behind.")
        }else{
            inventory.push("armor");
        }
        return {userHP, inventory};
    } else if (enemy === 'wolf') {
        console.log("\nAfter looting the " + enemy + ", you find an amulet that reduces the enemy's HP by 5!");
        enemyHP = enemyHP - 5;
        if(inventory.length > 5){
            console.log("\nYou do not have enough space in your inventory for the amulet, so you are forced to leave it behind.")
        }else{
            inventory.push("amulet");
        }
        return {enemyHP, inventory};
    } else {
        console.log("\nAfter looting the " + enemy + ", you find a dagger that increases your attack power by 5!");
        attackBonus = attackBonus + 5;
        if(inventory.length > 5){
            console.log("\nYou do not have enough space in your inventory for the dagger, so you are forced to leave it behind.")
        }else{
            inventory.push("dagger");
        }
        return {attackBonus, inventory};
    }
};


//Determines if user wishes to continue the game.

function continueGame(){
    var continueGame = ask.question("\nDo you wish to continue the game(Y or N)?  ");
    var play = false;
    while(!play){
        if (continueGame.toUpperCase() === "N") {
            play = true;
            run = false;
            fight = false;
            inGame = false;
            return {continueGame, run, fight, inGame};
        } else if (continueGame.toUpperCase() === "Y") {
            selection = ask.question("\n To walk, enter 'w'. ");
            play = true;
            run = false;
            return {continueGame, run, selection};
        } else if (continueGame.toUpperCase() === "PRINT") {
            console.log("\n" + name + ", you have " + userHP + " HP.\nYou have the following items in your inventory: " + inventory.join(", "));
            continueGame = ask.question("Do you wish to continue the game(Y or N)?  ");
        } else {
            continueGame = ask.question("\nYou have not entered a valid option. Do you wish to continue the game(Y or N)?  ");
        }
    }
};