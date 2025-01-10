# TP Running Shop API (Groupe avec Kévin)

## Technologies imposées

- Node / Express
- SQL Serveur
- ORM : Sequelize
- Documentation : obligatoire avec SWAGGER
- JSON (pas de XML ou de CSV)
- Mise en prod
- Mocha pour les tests

## Bonnes pratiques imposées

- Intégrer obligatoirement un numéro de version dans vos URLs
- Respect du Linter ESLint avec la configuration donnée (cf ./documentation/linter.md)
- Les paramètres pour filtrer vos résultats de recherches doivent être passer en $\_GET (dans l'URL via `?param1=valeur1&param2=valeur2`")

## Recherches / Organisation / Explications imposées

- 1 repo GIT 
    - Messages clairs et cohérents.
    - Commits réguliers ET **pertinents** (chaque fin de fonctionnalité, mise en place d'un fichier, correctif, fix, etc...)
- Dans votre repo GIT, vous allez devoir créer :
    - 1 dossier "documentation" pour la partie "recherches" que je vais vous demander. Je dois y retrouver :
        - Un fichier qui explique JWT
        - Qu'est-ce que le REST / comment ça marche
        - Modèle de Richardson et comment l'implémenter
        - Explication des Websockets / Socket.io
        - Un fichier qui détail les bonnes pratiques de SWAGGER avec l'autodocumentation (comment la mettre en place)
        - Un fichier qui détail les bonnes pratiques de POSTMAN avec les informations sur comment mettre en place des collections, et l'autogénération de Bearer
        - Un fichier paramétré de ESLINT avec des paramétrages customs que tout le monde va devoir respecter
        - Documentation sur le HTTP + HTTPS, avec tous les codes d'erreur et toutes les méthodes pour les API

## Routes de base imposées

- **Utilisateur** - _/users_
    - **POST** - _/users_
    - **GET** - _/users/role/{role}_
    - **GET** - _/users/{id}_
    - **PUT** - _/users/{id}_
    - **DELETE** - _/users/{id}_
- **Produits** - _/products_
    - **POST** - _/products_
    - **GET** - _/products_
    - **GET** - _/products/{id}_
    - **PUT** - _/products/{id}_
    - **DELETE** - _/products/{id}_
- **Commandes** - _/orders_
    - **POST** - _/orders_
    - **GET** - _/orders_
    - **GET** - _/orders/{id}_
    - **PUT** - _/orders/{id}_
    - **DELETE** - _/orders/{id}_
- **Tournées** - _/delivery-tours_
    - **POST** - _/delivery-tours_
    - **GET** - _/delivery-tours_
    - **GET** - _/delivery-tours/{id}_
    - **PUT** - _/delivery-tours/{id}_
    - **DELETE** - _/delivery-tours/{id}_
- **Commentaires** - _/products/{id}/comments_
    - **POST** - _/products/{id}/comments_
    - **GET** - _/products/{id}/comments_
    - **GET** - _/products/{id}/comments/{id}_
    - **PUT** - _/products/{id}/comments/{id}_
    - **DELETE** - _/products/{id}/comments/{id}_
- **Messages** - _/messages_
    - **POST** - _/messages_
    - **GET** - _/messages_
    - **GET** - _/messages/{id}_
    - **PUT** - _/messages/{id}_
    - **DELETE** - _/messages/{id}_
- **Demande d'affection** - _/assignment-requests_
    - **POST** - _/assignment-requests_
    - **GET** - _/assignment-requests_
    - **GET** - _/assignment-requests/{id}_
    - **PUT** - _/assignment-requests/{id}_
    - **DELETE** - _/assignment-requests/{id}_

## Barème d'évaluation

- Swagger / Documentation => 3pts
- Connexion BDD => 1 pt
- ORM => 3 pts
- REST => 4 pts
- JSON / XML : header request => 1pt
- JWT => 3 pts
- Mise en production (avec P2M + SQLServer) => 4 pts
- Tests unitaires + tests de charge (K6 / Artillery) => 3 pts
- Postman + collections + token => 4 pts
- Architecture & Qualité de code => 4 pts
- page dédiée chat avec Socket.io => en lien avec le DAB => 10 pts
