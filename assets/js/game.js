var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log("Robot Name = " + playerName, " Attack Power = " + playerAttack, " Health = " + playerHealth, " Money = " + playerMoney);


var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log("Enemy name = " + enemyName, " Attack Power = " + enemyAttack, " Health = " + enemyHealth);

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to chose.")
    console.log("promptFight value = " + promptFight);
    
    // if the player chooses to fight
    if(promptFight === "fight" || promptFight === "FIGHT") {

    

    // Subtract value of playerAttack from the value of enemyHealth, use result to update the value in enemyHealth variable
    enemyHealth = enemyHealth - playerAttack;

    // Log resulting message in console to confirm that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    
    // check enemy's health
    if(enemyHealth <= 0) {
        window.alert(enemyName + " has been defeated.");
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.")
    }
    
    // Subtract the value of enemyAttack from the value of playerHealth, use result to update the value in playerHealth variable
    playerHealth = playerHealth - enemyAttack;

    // log resulting message in the console to confirm that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    if(playerHealth <= 0) {
        window.alert(playerName + " has been defeated.")
    } else {
        window.alert(playerName + " has " + playerHealth + " health remaining.")
    }
    }

    // if player chooses to skip
    else if (promptFight === "SKIP" || promptFight === "skip") {
        // confirm player wants to skip fight
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if(confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight!");
            window.alert(playerName + " has " + playerMoney + " coins remaining.");
            // subtract money from playerMoney for skipping
            playerMoney -= 2;
        }
        // if no (false), ask question again by running fight() again
        else {
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try again!")
    }

};

fight();