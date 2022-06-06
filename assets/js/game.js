var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log("Robot Name = " + playerName, " Attack Power = " + playerAttack, " Health = " + playerHealth);


var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log("Enemy name = " + enemyName, " Attack Power = " + enemyAttack, " Health = " + enemyHealth);

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");

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

};

fight();