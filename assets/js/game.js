var playerName = window.prompt("What is the name of your robot champion?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
console.log("Enemy Robots: " + enemyNames);

var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
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

    var startGame = function() {
        for(let i = 0; i < enemyNames.length; i++) {
        // if player is still alive, keep fighting
        if (playerHealth > 0) {
            // let player know what round they are in based upon index of enemy name + 1
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1) + ". You will face " + enemyNames[i]);
            // pick new enemy from array
            pickedEnemyName = enemyNames[i]; // pick new enemy from array
            enemyHealth = 20 // -> reset enemy health to 50 before next iteration
            // pass enemy name into fight function
            fight(pickedEnemyName);
        }
        } // end of for loop
        // after the llop ends, player is either out of health or enemies to fight, so run the endGame function
        endGame();
        // play again
        // startGame();
    }; // end of startGame function

    // function to end the entire game
    var endGame = function(){
        // if player is still alive, player wins!
        if(playerHealth > 0) {
            window.alert("Great job! You've survived the game! You now have a score of " + playerMoney + ".");
        }
        else {
            window.alert("You've lost your robot in battle.")
        }

        //ask player if they'd like to play again
        var playAgainConfirm = window.confirm("Would you like to play again?");

        if (playAgainConfirm){
            //restart the game
            startGame();
        } else {
            window.alert("Thank you for playing Robot Gladiators! Come back soon!")
        }
    }; // end of endGame function

    // start the game when the page loads
    startGame();