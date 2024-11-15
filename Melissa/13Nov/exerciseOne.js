// Vous êtes propriétaire d'un restaurant, et vous devez utiliser JavaScript pour gérer certaines informations et calculs nécessaires pour votre activité.

// Partie 1 : Variables et Types de Données
// 	Créez des variables pour stocker les informations suivantes :
// o	Le nom de votre restaurant.
// o	Le nombre de tables disponibles.
// o	Le nombre de clients installés.
// o	Le prix moyen d'un repas dans votre restaurant.
// 	Affichez chaque variable dans la console avec console.log(), en utilisant des noms explicites pour les variables.

// 	Ajoutez un commentaire pour expliquer chaque variable.


//NAME OF RESTAURANT
const restoNom = "Connor's Tasty Bites" 
//TOTAL TABLES
let tables = 2
// OCCUPIED TABLES
let occupiedTables = 2
//AVERAGE PRICE OF A MEAL
let avgPrice = 20

console.log(restoNom, tables, occupiedTables, avgPrice)

// Partie 2 : Calcul de la Capacité Restante
// 	Créez une variable tablesRestantes qui représente le nombre de tables disponibles pour accueillir des clients supplémentaires. 
// 	Utilisez une opération arithmétique pour calculer la différence entre le nombre total de tables et le nombre de tables déjà occupées.
// 	Affichez tablesRestantes dans la console pour savoir combien de tables sont encore disponibles.

let tablesRestantes = tables - occupiedTables

console.log(tablesRestantes)

// Partie 3 : Opérateurs de Comparaison
// 	Votre restaurant peut accueillir jusqu'à 20 tables. Écrivez un script qui vérifie si le nombre de tables actuelles est suffisant pour accueillir 5 nouveaux clients. Utilisez les opérateurs de comparaison suivants et affichez les résultats avec console.log() :
// 	Est-ce qu'il reste au moins 5 tables disponibles ? (vérifiez avec >=)
// 	Y a-t-il moins de 3 tables restantes ? (vérifiez avec <)
// 	Créez une variable restaurantPlein, qui est true si toutes les tables sont occupées, et false sinon. Affichez cette variable dans la console.

let nextClient = tablesRestantes >= 5 ? "Please come in" : "Sorry we are full"
let underThree = tablesRestantes < 3 ? "Less than 3 tables left" : "More than 3 tables left" 

console.log(nextClient)

let restaurantPlein 
tablesRestantes === 0 ? restaurantPlein = true : restaurantPlein = false

// Partie 4 : Opérateurs Arithmétiques et Logiques
// 	Calculez le chiffre d'affaires potentiel de la journée en multipliant le nombre de clients installés par le prix moyen d'un repas, puis affichez le résultat avec console.log().
// 	Ajoutez 10 euros de pourboire à ce chiffre d'affaires potentiel en utilisant un opérateur d’affectation (+=). Affichez le chiffre d'affaires total dans la console.

// Partie 5 : Manipulation des Données avec l’Opérateur +
// 	Déclarez deux variables message1 et message2 :
// o	message1 doit contenir la phrase : « Bienvenue au restaurant »
// o	message2 doit contenir le nom de votre restaurant
// 	Créez une variable messageAccueil qui contient la concaténation de message1 et message2.
// 	Affichez messageAccueil dans la console.
// 	Ajoutez une phrase à messageAccueil pour indiquer le nombre de tables restantes, en utilisant + pour concaténer les chaînes de caractères et la variable tablesRestantes. 
// 	Affichez ce message complet dans la console.
