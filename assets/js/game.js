var playerName = window.prompt("What is your robot's name?");
var playerHealth = 50;
var playerAttack = 10;
var playerMoney = 20;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
console.log("Enemy Robots: " + enemyNames);

var enemyHealth = 10;
var enemyAttack = 12;
// Game States
// "WIN" - Player robot has defeated all enemy robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

window.alert("Welcome to Robot Gladiators!");
playerName = window.prompt("What is the name of your robot champion?");


var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth >0) {
        // ask player if they want to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to chose.");    
        console.log("promptFight value = " + promptFight);
        
        // if the player chooses to skip, confirm then stop the loop
        if(promptFight === "SKIP" || promptFight === "skip") {
            // confirm player wants to skip fight
            window.alert(playerName + " has " + playerMoney + " coins remaining. It will cost 10 coins to skip.");
            var confirmSkip = window.confirm("Are you sure you'd like to skip this round?");
            
            // if yes (true), leave fight
            if(confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                window.alert(playerName + " has " + playerMoney + " coins remaining.");
                console.log("playerMoney = ", playerMoney);
                break;
            }
        }
        
        // Subtract value of playerAttack from the value of enemyHealth, use result to update the value in enemyHealth variable
        enemyHealth = enemyHealth - playerAttack;
        
        // Log resulting message in console to confirm that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );
            
            // check enemy's health
            if(enemyHealth <= 0) {
                window.alert(enemyName + " has been defeated.");
                console.log(enemyName + " has been defeated.");
                // award player money for winning
                playerMoney = playerMoney + 20;
                window.alert(playerName + " has been awarded 20 coins and now has " + playerMoney + " coins!")
                // leave while() loop since enemy is dead
                break;
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.")
            }
            
            // Subtract the value of enemyAttack from the value of playerHealth, use result to update the value in playerHealth variable
            playerHealth = playerHealth - enemyAttack;
            
            // log resulting message in the console to confirm that it worked.
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
                );
                
                //check player's health
                if(playerHealth <= 0) {
                    window.alert(playerName + " has been defeated.");
                    console.log(playerName + " has been defeated. :(")
                    break;
                } else {
                    window.alert(playerName + " has " + playerHealth + " health remaining.")
                }
            } // end of while loop
        } // end of fight function
            
            
        // if no (false), ask question again by running fight() again
        // else
        // fight();
        // else {
        //     window.alert("You need to choose a valid option. Try again!")
        // } 



    for(let i = 0; i < enemyNames.length; i++) {
        pickedEnemyName = enemyNames[i];
        enemyHealth = 20 // -> reset enemy health to 50 before next iteration
        // call fight function with enemy-robot
        fight(pickedEnemyName);
    };