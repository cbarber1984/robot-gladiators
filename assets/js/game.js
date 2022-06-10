// var playerInfo.name = window.prompt("What is the name of your robot champion?");
// var playerInfo.health = 100;
// var playerInfo.attack = 10;
// var playerInfo.money = 10;

var randomNumber = function(min, max){
    var value = Math.floor(Math.random() * max - min + 1) + min;
    return value;
};

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10
    },
    refillHealth: function() {
        if(this.money >=7) {
            window.alert("Refilling player's health by 20 for 7 coins.");
            this.health += 20;
            this.money += 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function(){
        if(this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 coins.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
};

var enemyInfo = [
    {
        name: "Roberto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

console.log("Enemy Robots: " + enemyInfo);

//var enemy[health] = 50;
//var enemy.attack = 12;

var fight = function(enemy) {
    while (playerInfo.health > 0 && enemy.health > 0) {
        // ask player if they want to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to chose.");    
        console.log("promptFight value = " + promptFight);
        
        // if the player chooses to skip, confirm then stop the loop
        if(promptFight === "SKIP" || promptFight === "skip") {
            // confirm player wants to skip fight
            window.alert (playerInfo.name + " has " + playerInfo.money + " coins remaining. It will cost 10 coins to skip.");
            var confirmSkip = window.confirm("Are you sure you'd like to skip this round?");
            
            // if yes (true), leave fight
            if(confirmSkip) {
                window.alert (playerInfo.name + " has chosen to skip the fight!");
                // subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                window.alert (playerInfo.name + " has " + playerInfo.money + " coins remaining.");
                console.log("playerInfo.money = ", playerInfo.money);
                break;
            }
        }
        
        // generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);
        
        // Log resulting message in console to confirm that it worked.
        console.log(
         playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
            );
            
            // check enemy's health
            if(enemy.health <= 0) {
                window.alert(enemy.name + " has been defeated.");
                console.log(enemy.name + " has been defeated.");
                // award player money for winning
                playerInfo.money = playerInfo.money + 20;
                window.alert (playerInfo.name + " has been awarded 20 coins and now has " + playerInfo.money + " coins!")
                // leave while() loop since enemy is dead
                break;
            } else {
                window.alert(enemy.name + " still has " + enemy.health + " health left.")
            }
            
            // generate random damage value based on enemy's attack power
            var damage = randomNumber(enemy.attack - 3, enemy.attack);

            playerInfo.health = Math.max(0, playerInfo.health - damage);
            
            // log resulting message in the console to confirm that it worked.
            console.log(
                enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
                );
                
                //check player's health
                if(playerInfo.health <= 0) {
                    window.alert (playerInfo.name + " has been defeated.");
                    console.log (playerInfo.name + " has been defeated. :(")
                    break;
                } else {
                    window.alert (playerInfo.name + " has " + playerInfo.health + " health remaining.")
                }
            } // end of while loop
        } // end of fight function

    
    var startGame = function() {
        // reset player stats
        playerInfo.reset();
        
        for(let i = 0; i < enemyInfo.length; i++) {
        // if player is still alive, keep fighting
        if (playerInfo.health > 0) {
            // pick new enemy from array
            var pickedEnemyObj = enemyInfo[i]; // pick new enemy from array
            // let player know what round they are in based upon index of enemy name + 1
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1) + ". You will face " + pickedEnemyObj.name);
            pickedEnemyObj.health = randomNumber(40, 60);// -> reset enemy health to a random number
            // pass enemy name into fight function
            fight(pickedEnemyObj);

            // if we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                // ask if player wants to enter the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the shop before the next round?");
                
                // if yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }
            }
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
        if(playerInfo.health > 0) {
            window.alert("Great job! You've survived the game! You now have a score of " + playerInfo.money + ".");
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

    var shop = function(){
        // ask player what they would like to do
        var shopOptionPrompt = window.prompt(
            "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
        );

        //use switch to carry out action
        switch(shopOptionPrompt) {
            case "REFILL": 
            case "Refill":
            case "refill":
                playerInfo.refillHealth();
                break;
            
            case "UPGRADE":
            case "Upgrade":
            case "upgrade":
                playerInfo.upgradeAttack();
                break;
            
            case "LEAVE":
            case "leave":
                window.alert("Leaving the store.");

                // do nothing, so function will end
                break;
            default:
                window.alert("You did not pick a valid option. Try again");
                
                //call shop() again to force player to pick a valid option
                shop();
                break;
        }
    };

    // start the game when the page loads
    startGame();