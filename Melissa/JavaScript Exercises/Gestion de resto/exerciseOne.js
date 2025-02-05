// Vous êtes propriétaire d'un restaurant, et vous devez utiliser JavaScript pour gérer certaines informations et calculs nécessaires pour votre activité.

// Partie 1 : Variables et Types de Données
// Créez des variables pour stocker les informations suivantes :
// Le nom de votre restaurant.
// Le nombre de tables disponibles.
// Le nombre de clients installés.
// Le prix moyen d'un repas dans votre restaurant.
// Affichez chaque variable dans la console avec console.log(), en utilisant des noms explicites pour les variables.

// Ajoutez un commentaire pour expliquer chaque variable.

//NAME OF RESTAURANT
const restName = "Connor's Tasty Bites" 
//TOTAL TABLES
const tables = 20
//OCCUPIED TABLES
let occupiedTables = 20
//AVERAGE PRICE OF A MEAL
let avgMeal = 30

console.log(`Welcome to ${restName}, we have ${tables} tables, there are currently ${occupiedTables} occupied tables. The average price of a meal is ${avgMeal} Euros`)

// Partie 2 : Calcul de la Capacité Restante
// Créez une variable tablesRestantes qui représente le nombre de tables disponibles pour accueillir des clients supplémentaires. 
// Utilisez une opération arithmétique pour calculer la différence entre le nombre total de tables et le nombre de tables déjà occupées.
// Affichez tablesRestantes dans la console pour savoir combien de tables sont encore disponibles.

//NAME OF RESTAURANT

let remainingTables = tables - occupiedTables
console.log("Available tables: " + remainingTables)

// Partie 3 : Opérateurs de Comparaison
// Votre restaurant peut accueillir jusqu'à 20 tables. Écrivez un script qui vérifie si le nombre de tables actuelles est suffisant pour accueillir 5 nouveaux clients. Utilisez les opérateurs de comparaison suivants et affichez les résultats avec console.log() :
// Est-ce qu'il reste au moins 5 tables disponibles ? (vérifiez avec >=)
// Y a-t-il moins de 3 tables restantes ? (vérifiez avec <)
// Créez une variable restaurantPlein, qui est true si toutes les tables sont occupées, et false sinon. Affichez cette variable dans la console.

let moreThanFive = remainingTables >= 5 ? "There are more than five tables left" : "There are less than five tables left"
console.log(moreThanFive)

let lessThanThree = remainingTables < 3 ? "There are less than 3 tables left" : "There are more than 3 tables left" 

console.log(`It is ${remainingTables === 0 ? true : false} that the restaurant is full`)

// Partie 4 : Opérateurs Arithmétiques et Logiques
// Calculez le chiffre d'affaires potentiel de la journée en multipliant le nombre de clients installés par le prix moyen d'un repas, puis affichez le résultat avec console.log().
// Ajoutez 10 euros de pourboire à ce chiffre d'affaires potentiel en utilisant un opérateur d’affectation (+=). Affichez le chiffre d'affaires total dans la console.

//moyen de 6 personnes par tables 
//moyen de 2 services pour dejeuner et 2 services pour diner (4 services par table par jour)
let dailySales = 6 * tables * 4 * avgMeal   

plusTipPerTable = dailySales + (10 * tables * 4)
console.log(`Daily sales with a 10 Euro tip per table is estimated to be ${plusTipPerTable} Euro`)

// Partie 5 : Manipulation des Données avec l’Opérateur +
// Déclarez deux variables message1 et message2 :
// message1 doit contenir la phrase : «  »
// message2 doit contenir le nom de votre restaurant
// Créez une variable messageAccueil qui contient la concaténation de message1 et message2.
// Affichez messageAccueil dans la console.
// Ajoutez une phrase à messageAccueil pour indiquer le nombre de tables restantes, en utilisant + pour concaténer les chaînes de caractères et la variable tablesRestantes. 
// Affichez ce message complet dans la console.

let message1 = `Bienvenue au restaurant ${restName}!`
let message2 = ` At ${restName} we like to make our clients feel welcome!`
let messageAccueil = message1 + message2

console.log(messageAccueil + " Incase you forgot we have " + tablesRestantes + " available tables.")