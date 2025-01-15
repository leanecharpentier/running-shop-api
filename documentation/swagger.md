# Swagger

## Qu'est-ce que c'est ?

Swagger/OpenAPI est une spécification standard pour décrire les API REST.

Il permet de générer de la documentation interactive (via Swagger UI) et de tester les API.

Il facilite l'intégration en générant automatiquement du code pour le client et le serveur.

## Comment ça marche

### 1. Définition de l'API avec OpenAPI :

Dans des fichiers YAML, JSON ou écrivant des commentaires dans le code, on définit les chemins (endpoints), les méthodes HTTP (GET, POST, PUT, DELETE), les paramètres de requête, le request body s'il y'en a ainsi que les schemas et les codes de réponses pour chaque webservices.

### 2. Génération de la documentation :

À partir de cette spécification, des outils comme Swagger UI ou Swagger Editor génèrent automatiquement une interface de documentation interactive.

Cela permet aux développeurs et aux utilisateurs de l'API de visualiser et d'interagir avec les différentes fonctionnalités de l'API sans avoir à coder manuellement la documentation.

### 3. Tests et simulations :

Swagger permet également de tester directement les endpoints de l'API via l'interface Swagger UI.

Les utilisateurs peuvent envoyer des requêtes et voir les réponses sans avoir besoin de code supplémentaire, ce qui simplifie les tests.

### 4. Génération de code :

Il existe des outils Swagger qui peuvent générer du code client ou serveur dans divers langages de programmation à partir de la spécification de l'API, facilitant ainsi l'intégration.

## Sources

- [Comment document une API Nodejs/Express avec Swagger UI et JSDoc](https://dev.to/kabartolo/how-to-document-an-express-api-with-swagger-ui-and-jsdoc-50do)
- [Exemple d'une documentation Swagger (Fichier YAML + Rendu)](https://editor.swagger.io/?_gl=1*x6tbjj*_gcl_aw*R0NMLjE3Mjg1NDY0NDUuQ2p3S0NBanc5cDI0QmhCX0Vpd0E4SUQ1QnJDUmNvTUZSOEZHMndLWTFOXzN6YUdmSHI4blRmZDdFLUFOaUsybV95MnMtNnBjNWZ1X0Zob0NvcmdRQXZEX0J3RQ..*_gcl_dc*R0NMLjE3Mjg1NDY0NDUuQ2p3S0NBanc5cDI0QmhCX0Vpd0E4SUQ1QnJDUmNvTUZSOEZHMndLWTFOXzN6YUdmSHI4blRmZDdFLUFOaUsybV95MnMtNnBjNWZ1X0Zob0NvcmdRQXZEX0J3RQ..*_gcl_au*MTY3OTQ0NDU4MS4xNzI4NTQ2NDMz)
