// La sorcière et le Griffon

// Vous allez découvrir les joies de l’algorithmie au travers d’un mini jeu que vous devez créer dans lequel une sorcière affronte un griffon pour récupérer un grimoire magique.

//Pseudo code: 

let sorcierePosition = 0;
let griffonPosition = 50;

//Mathrandom to decide who goes first. 
//Player 1 throws: 
//Check the value is not the position of the other or past the threshold
//Player 2 throws:
//Check the value is not the position of the other or past the threshold
//Function for if the Griffon arrives on the sorciere
    // Throws the dice; over 3 then you do the card of luck (same odss as for the griffon to either push the other back 3 or goes past by 1 (avance 2))
//Function for if the Sorciere arrives on the Griffon
    //50 / 50 either the griffon goes back 3 or the sorciere goes past by 1 (2 avance)




// Vous devez prendre en compte les informations suivantes : 
// Début de jeu : 
// 	La sorcière démarre à la case 0 
// 	Le griffon démarre à la case 50
// 	Le grimoire se trouve en case 51

// Déroulement d'une partie : 
// 	Chaque joueur lance tour à tour un dé qui va de 1 à 6.
// 	Si la sorcière arrive sur la case du griffon pendant son tour, elle s’arrête immédiatement puis tire une carte Chance qui permet de :
// o	Lui lancer un sort qui fait reculer le griffon de 3 cases
// o	S'enfuir en avançant d’une case
// 	Si le griffon arrive sur la case de la sorcière pendant son tour, il s’arrête. La sorcière doit alors lancer le dé : 
// o	Si le score est supérieur à 3, elle tire une carte Chance.
// o	Sinon, elle recule de deux cases.

// Conseils : 
// 	Prenez votre temps et essayez de bien comprendre chaque étape avant de passer à la suivante. Lisez plusieurs fois les règles du jeu et notez les informations importantes.
// 	Décomposez le jeu en étapes pour bien comprendre la mécanique.
// 	Commencez par écrire le code des déplacements de base de la sorcière et du griffon.
// 	Rédigez le pseudocode en prenant du recul : concentrez-vous d’abord sur la base du jeu, puis intégrez les cas particuliers ensuite.
// 	Lisez les messages d’erreur pendant le développement, ils vous aident à identifier les erreurs dans le code.
