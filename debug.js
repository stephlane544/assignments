var ask = require("readline-sync");
//Welcome
var userName = ask.question("What is your name? ");
console.log("Hello " + userName + ", I'm Leslie Knope. Thank you for coming to the best city in the world, Pawnee, to help with Mission: Cheeto Bomb. President Trump plans to drop the Cheeto Bomb on Pawnee tomorrow morning. If we allow that to happen everyone in town will turn orange! Lets make our way to City Hall to stop this catastrophe!");
startGame()
var isAlive = true;
var beatTrump = false;
var totalSteps = 0;
//Create Enemies
function Enemy (name, hp, weapon) {
    this.name = name;
    this.hp = hp;
    this.weapon = weapon;
    this.attack = Math.floor((Math.random()*20) +6);
}
var jamm = new Enemy("Councilman Jamm", 70, "dental pliers");
var joan = new Enemy("Joan Callamezzo", 30, "broken wine glass");
var tammy = new Enemy("Tammy Two", 50, "cleavage");
var mikeP = new Enemy("Mike Pence", 80, "discrimination");
var brettK = new Enemy("Brett Kavanaugh", 100, "kisses and hugs");
//Random Enemies Function
function getEnemy() {
    var enemies = ["jamm", "joan", "tammy", "mikeP", "brettK"];
    var randEnemy = enemies[Math.floor(Math.random() * enemies.length)];
    if (randEnemy === "jamm") {
        return jamm;
    } else if (randEnemy === "joan") {
        return joan;
    } else if (randEnemy === "tammy") {
        return tammy;
    } else if (randEnemy === "mikeP") {
        return mikeP;
    } else if (randEnemy === "brettK") {
        return brettK;
    }
}
//Create User
function User(userName, hp) {
    this.name = userName;
    this.hp = hp;
    this.weapon = ["whipped cream spray can", "power binder", "best friend Anne", "husband Ben"];
    this.attack = Math.floor((Math.random()*35)+11);
}
var mainUser = new User(userName, 100);
//Random Items Function
function findItems(mainUser) {
    var items = ["waffles", "Sweetums 64oz. Soda", "april", "andy", "tom", "donna", "jerry"];
    var randItem = items[Math.floor(Math.random() * items.length)]
    if (randItem === "waffles") {
        mainUser.hp = mainUser.hp + 20;
        console.log("You found " + randItem + "! Your HP is increased by 20!");
    } else if (randItem === "soda") {
        mainUser.hp = mainUser.hp + 10;
        console.log("You found " + randItem + "! Your HP is increased by 10!");
    } else if (randItem === "april") {
        mainUser.hp = mainUser.hp + 15;
        console.log("You found " + randItem + "! Your HP is increased by 15!");
    } else if (randItem === "andy") {
        mainUser.hp = mainUser.hp + 7;
        console.log("You found " + randItem + "! Your HP is increased by 7!");
    } else if (randItem === "tom") {
        mainUser.hp = mainUser.hp + 15;
        console.log("You found " + randItem + "! Your HP is increased by 15!");
    } else if (randItem === "donna") {
        mainUser.hp = mainUser.hp + 10;
        console.log("You found " + randItem + "! Your HP is increased by 10!");
    } else if (randItem === "jerry") {
        mainUser.hp = mainUser.hp + 3;
        console.log("You found " + randItem + "! Your HP is increased by 3!");
    }
    return mainUser.hp;
}  
// Play Game
function startGame() {
  walk();
}
//Walking Function
function walk (totalSteps) {
    var walking = choseWalking();
    while (walking) {
        var steps = Math.floor(Math.random()*10);
        totalSteps = totalSteps + steps;
        console.log(totalSteps);
        if (totalSteps === 200) {
            console.log("You made it to City Hall and captured the Cheeto Bomb! You successfully defeated President Trump.");
            walking = false;
            beatTrump = true;
            return beatTrump;
        }
        if (steps >= 5) {
            var fightOrRun = ask.question("Do you want to fight? [f] or run? [r]");
            if (fightOrRun === "f") {
                fight();
            } else {
                run();
            }
            walking = false;
        } else if (steps <= 4){
            findItems();
        } 
    }
}
//Keep Walking
function choseWalking () {
    var askWalk = ask.keyIn("Keep walking to City Hall [w], check inventory [i], or quit the game [q].", {limit: "wiq"});
    if (askWalk === "w") {
        return true;
    } else if (askWalk === "i") {
        checkInventory();
        return true;
    } else if (askWalk === "q") {
        return false;
    }
}
// console.log(keepWalking())
// Fight Function
function fight(mainUser) {
    var fightEnemy = getEnemy();
    var randWeapon = mainUser.weapon[Math.floor(Math.random() *  mainUser.weapon.length)];
    mainUser.hp -= fightEnemy.attack;
    fightEnemy.hp -= mainUser.attack;
    console.log("Great job, " + userName + ". You used your " + randWeapon + " and your health is now " + mainUser.hp);
    console.log(fightEnemy.name + " even used their " + fightEnemy.weapon + " against you, and yet their health is " + fightEnemy.hp);
}
//Run Function 
function run() {
    var running = Math.floor(Math.random()*10);
    if (running >= 5) {
        enemyAttack();
    } else if (running <= 4) {
        walk();
        console.log("You have escaped from the enemy! Keep walking to city hall.");
    }
}
function enemyAttack (mainUser) {
    var enemyAttacker = getEnemy();
    mainUser.hp -= enemyAttacker.attack;
    console.log (enemyAttacker.name + " attacked you with their " + enemyAttacker.weapon + ". Your HP is now " + mainUser.hp + ".");
}