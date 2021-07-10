var playerName = window.prompt("What is your Robots Name?");
var playerHealth = 100;
var playerAttack = 100;

// you can also log multiple values at once like this console.log(playername, playerattack, playerHealth)

var enemyName = "fuck face"
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");


//subtract the value of the playerAttack from the value of the enemyHealth
enemyHealth = enemyHealth - playerAttack;
// log a resulting message to the console so we know it worked
console.log( playerName + "Attacked" + enemyName + " . " + enemyName + "now has " + enemyHealth + " health remaining");
// check enemy's health
if (enemyHealth <= 0) {window.alert(enemyName + "has DIED!");
}
else {window.alert(enemyName + "still has" + enemyHealth + "Health Left");
}

//subtract the value of enemyAttack from the value of playerHealth
 playerHealth = playerHealth - enemyAttack;
//log a resulting message to the console so we know it work
console.log(enemyName + "Attacked" + playerName + " . " + playerName + "now has" + playerHealth + "Health Remaining");
};
//check players health
if (playerHealth <=0) { window.alert(playerName + " has died ");
}
else { 
    window.alert(playerName + " Still has " + playerHealth + " Health Left ");
}










fight();