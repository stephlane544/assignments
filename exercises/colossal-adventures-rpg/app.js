let ask = require("readline-sync");

console.log(`Welcome to your first Colossal Adventure!`);
let name = ask.question(`
To get started on your quest, please enter your name:  `);

console.log(`
Welcome, ${name}.
`);
console.log(`At any time , if you wish to see your HP or XP levels and your inventory, enter 'print'. You are starting with 10 HP and no XP or inventory.`);
let selection = ask.question(`
To walk, enter 'w'.  `);

let inGame = true;
let fight = true;
let run = true;
let play = false;
let enemy = "";
let inventory = [];
let enemyHP = 15;
let userHP = 10;
let userXP = 0;
let totalSteps = 0;
let attackBonus = 0;
let enemyAttack = 0;
while (inGame) {
    if (selection.toUpperCase() === "W") {
        fight = true;
        whichEnemy();

        while (fight) {
            enemyAttack = Math.floor((Math.random() * 5) + 1);
            attack();
            
            if(!(attackYN.toUpperCase ==="N")){
                if (enemyHP <= 0 && userHP > 0) {
                    killedEnemy();
                    continueGame();
                    fight = false;
                }
            }

            if (userHP <= 0) {
                console.log(`
The ${enemy} killed you!`);
                inGame = false;
                fight = false;
                
            }
        }

        if (enemyHP >= 0){
            enemyHP = 15;
        }

        if(totalSteps >= 1000){
            console.log(`
Congrats, ${name}! You have reached the king's castle and completed your quest!`);
            console.log(`
You have ${userHP} HP to spare, ${userXP} XP, and you have the following items in your inventory: ${inventory.join(", ")}`);
            inGame = false;
        }
    } else if (selection.toUpperCase() === "PRINT") {
        console.log(`
${name}, you have ${userHP} HP, ${userXP} XP, and the following items in your inventory: ${inventory.join(", ")}`);
        selection = ask.question(`
To walk, enter 'w'.  `);
    } else {
        selection = ask.question(`
You have not entered a valid option. To walk, enter 'w'. `);
    }
}


//creates fight

function attack(){
    if(attackYN.toUpperCase() == "N"){
        runAway();
        return {userHP, enemyHP, attackYN, fight};
    } else if (attackYN.toUpperCase() === "Y") {
        let attackPwr = Math.floor((Math.random() * 10) + 1);
        console.log(`
Your attack took ${attackPwr} HP from the ${enemy} .`);
        enemyHP = enemyHP - attackPwr - attackBonus;
        console.log(`
The ${enemy} has attacked! It took ${enemyAttack} of your HP.`);
        userHP = userHP - enemyAttack;
        if (userHP <= 0) {
            fight = false;
        }else if (enemyHP <= 0) {
            fight = false;
        }else{
        attackYN = ask.question(`
Do you wish to attack(Y or N)?  `);
        }
    } else if (attackYN.toUpperCase() === "PRINT") {
        console.log(`
${name}, you have ${userHP} HP, ${userXP} XP, and the following items in your inventory: ${inventory.join(", ")}`);
        attackYN = ask.question(`
Do you wish to attack(Y or N)?  `);
    } else { 
        attackYN = ask.question(`
You have not entered a valid option. Do you wish to attack(Y or N)?   `);
    }
    return {userHP, enemyHP, attackYN, fight};
}


//Determines what enemy the user gets

function whichEnemy(){
    let walking = Math.floor((Math.random() * 200) + 1);
    totalSteps = totalSteps + walking;
    if(totalSteps >= 1000){
        console.log(`
Congrats, ${name}! You have reached the king's castle and completed your quest!`);
        console.log(`
You have ${userHP} HP to spare, ${userXP} XP, and you have the following items in your inventory: ${inventory.join(", ")}`);
        inGame = false;
    }
    let randomEnemy = Math.floor((Math.random() * 10) + 1);
    if (randomEnemy < 4) {
        attackYN = ask.question(`
You walk ${walking} steps before a giant appears! Do you wish to attack(Y or N)?  `);
        enemy = "giant";
    } else if (randomEnemy < 8) {
        attackYN = ask.question(`
You walk ${walking} steps before a wolf appears! Do you wish to attack(Y or N)?  `);
        enemy = "wolf";
    }else {
        attackYN = ask.question(`
You walk ${walking} steps before a zombie appears! Do you wish to attack(Y or N)?  `);
        enemy = "zombie";
    }
    return {enemy, attackYN, totalSteps};
}

//Determines if user is successful in running away.

function runAway(){
    console.log(`
You have chosen to run instead of attack.`);
    run = true;
    while (run){
        let runChance = Math.floor((Math.random() * 2) + 1);
        if(runChance === 1){
            console.log(`
You have successfully run away.`);
            fight = false;
            continueGame();
            run = false;
            return fight;
        }else{
            console.log(`
You were not successful in running away.`);
            console.log(`
The ${enemy} has attacked! They took ${enemyAttack} of your HP.`);
            userHP = userHP - enemyAttack;
            if (userHP <= 0) {
                fight = false;
                run = false;
            }else if (enemyHP <= 0) {
                fight = false;
                run = false;
            }else{
            attackYN = ask.question(`
Do you wish to attack(Y or N)?  `);
            }
            if (attackYN.toUpperCase() === "Y"){
                run = false;
            }
        }
    }
    return {userHP, fight};
}

//Determines and pushes to the array whatever loot the user gets from the enemy.

function killedEnemy(){
    let extraXP = Math.floor((Math.random() * 40) + 1);
    userXP = userXP + extraXP;
    console.log(`
You have killed the ${enemy}! You have received 4 bonus HP and ${extraXP} XP!`);
    userHP = userHP + 4;
    if (enemy === 'giant'){
        console.log(`
After looting the ${enemy}, you find some armour that increases your HP by 2!`);
        userHP = userHP + 2;
        if(inventory.length > 5){
            console.log(`
You do not have enough space in your inventory for the armor, so you are forced to leave it behind.`)
        }else{
            inventory.push("armor");
        }
        return {userHP, inventory};
    } else if (enemy === 'wolf') {
        console.log(`
After looting the ${enemy}, you find an amulet that reduces the enemy's HP by 3!`);
        enemyHP = enemyHP - 3;
        if(inventory.length > 5){
            console.log(`
You do not have enough space in your inventory for the amulet, so you are forced to leave it behind.`)
        }else{
            inventory.push("amulet");
        }
        return {enemyHP, inventory};
    } else {
        console.log(`
After looting the ${enemy}, you find a dagger that increases your attack power by 3!`);
        attackBonus = attackBonus + 3;
        if(inventory.length > 5){
            console.log(`
You do not have enough space in your inventory for the dagger, so you are forced to leave it behind.`)
        }else{
            inventory.push("dagger");
        }
        return {attackBonus, inventory};
    }
};


//Determines if user wishes to continue the game.

function continueGame(){
    let continueGame = ask.question(`
Do you wish to continue the game(Y or N)?  `);
    play = false;
    while(!play){
        if (continueGame.toUpperCase() === "N") {
            play = true;
            run = false;
            fight = false;
            inGame = false;
            return {continueGame, run, fight, inGame};
        } else if (continueGame.toUpperCase() === "Y") {
            selection = ask.question(`
To walk, enter 'w'. `);
            play = true;
            run = false;
            return {run, selection};
        } else if (continueGame.toUpperCase() === "PRINT") {
            console.log(`
${name}, you have ${userHP} HP, ${userXP} XP, and the following items in your inventory: ${inventory.join(", ")}`);
            continueGame = ask.question(`
Do you wish to continue the game(Y or N)?  `);
        } else {
            continueGame = ask.question(`
You have not entered a valid option. Do you wish to continue the game(Y or N)?  `);
        }
    }
};