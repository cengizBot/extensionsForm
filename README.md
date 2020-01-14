# extensionsForm

Voici le prototype, Extensions n'ont fini.

Le but de cette extension est de gagner du temps sur l'insertion de données d'un formulaire.

![Capture](https://user-images.githubusercontent.com/55709173/66256937-83442200-e793-11e9-8cf4-68feaa1b4d3c.PNG)

Sur l'extensions se trouve 2 boutton un START et un GENERATE

Important: L'extension récupère le premier forme trouvée sur votre DOM, si vous disposez d'un form (ex: barre de recherche ) qui est disposé avant votre formulaire elle va automatiquement l'utiliser, et donc l'extension ne va pas attaquer votre réel formulaire. Pour y remédier attribuer à votre formulaire concerné l'id forme, et cliquer directement sur le boutton Generate. 

1 : Button Start: Le boutton start va attribuer un ID sur votre formualire nommé "form" de ce fait elle va pouvoir l'attaquer.

2 : Button Generate: Va analyser votre formulaire en récupère tous les champs disponibles et les compléter

3 : Button info vous indique les tableaux de fausses données que vous disposer

Fonctionnement:

L'extension dispose de différent tableau de jeu de données fake 

ex Code tab données:

![data](https://user-images.githubusercontent.com/55709173/66257098-395c3b80-e795-11e9-8471-187b0f8e5cfc.PNG)

À chaque Générations de fake data, chaque champ va être examiné par son type et son nom. Son nom va être matché avec une variable GlobalTab contenant l'ensemble des tableaux fake, si une correspondance a eu lieu et va lui attribuer une donnée du tableau concerné.

![global](https://user-images.githubusercontent.com/55709173/66257183-fd75a600-e795-11e9-819b-af59932e5116.PNG)


ex: Si votre input a comme name="enterusername" elle va le matcher avec le tableau username car celui-ci comprend ce mot "username"

Sinon aucune correspondance n'a eu lieu elle va lui attribuer selon son type des random fake datas moins réelles. 

Options MIN et MAX length:

L'extension analyse aussi les min et max length de chacun de vos inputs et les prend en compte pour combler ou non le manque.

Personnalisation: 

Vous pouvez ajouter dans le content js des tableaux de jeux de fausses données pour un meilleur rendu.

Important: Par défaut chaque tableau contient 7 données.
Pour cela il suffit de rajouter votre tableau: ex :

var Car = [
  "......",
  "......",
  "......",
  "......",
  "......",
  "......",
  "......"
]

Une fois votre tableau ajouté rajouter le automatiquement dans la variable Global Tab.
