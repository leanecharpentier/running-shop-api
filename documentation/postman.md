# Postman

## Qu'est-ce que c'est ? 

Postman est un outil permettant de tester des API.

Les fonctionnalités clés de Postman :
- **Envoyer des requêtes HTTP** : Postman permet d'envoyer des requêtes HTTP (GET, POST, PUT, DELETE, etc.) vers un serveur pour tester la réponse d'une API.
- **Gestion des collections** : Vous pouvez organiser vos requêtes en collections, ce qui facilite leur gestion et leur réutilisation.
- **Automatisation des tests** : Postman permet d'écrire des tests automatisés pour valider les réponses des API, comme vérifier si le code de statut HTTP est correct ou si les données retournées sont celles attendues.
- **Environnements et variables** : Vous pouvez définir des environnements (par exemple, développement, production) et utiliser des variables pour rendre les requêtes dynamiques.
- **Documentation d'API** : Postman offre des outils pour générer automatiquement des documentations interactives pour les API que vous développez.

## Gestion des collections

Pour mieux organiser ses requêtes, il est recommandé de créer des collections.

**1 collection = 1 dossier = 1 projet**

Et ensuite, dans chaque collection, il est conseillé de créer **1 sous-dossier par ressource**.

## Automatiser la gestion du bearer token

Pour les requêtes authentifiée, il est possible d'automatiser pour ne pas avoir à l'écrire dans chaque requête.

1. Dans le dossier principal, créer une variable globale "token"
2. Dans la requête "LOGIN", mettre le "script" suivant pour automatiser la récupération du token

```
var responseBody = pm.response.json();
var token = responseBody.token;

pm.collectionVariables.set("token", token);
```

3. Dans les autres requêtes, aller dans "authorisation", sélectionner "Bearer Token". Mettre en valeur ```{{token}}```.

Lors de l'utilisation, il ne reste qu'à déclencher le Login pour que le token soit défini, puis vous pourrez faire les autres requêtes.