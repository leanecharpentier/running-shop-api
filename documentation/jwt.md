# JWT (Json Web Token)

## Qu'est-ce que c'est ?

Les « JSON Web Token » ou JWT sont des jetons générés par un serveur lors de l’authentification d’un utilisateur sur une application Web, et qui sont ensuite transmis au client.

Ce token est envoyé avec chaque requête HTTP au server pour permetttre d'authentifier l'utilisateur.

Les informations contenues dans le token sont signées à l’aide d’une clé privée détenue par le serveur. Quand le serveur reçoit le token, il n’a qu’à comparer la signature envoyée par le client et celle qu’il aura générée avec sa propre clé privée. Si les signatures sont identiques, ça veut dire que le token est valide.

## Structure d'un jeton JWT

Selon la norme RFC 7519, le token se compose en 3 parties :
- Le **"Header"** --> contient l’algorithme utilisé pour la signature ainsi que le type de jeton (dans notre cas toujours “JWT »), en JSON encodé en Base64
- La **"Payload"** --> contient les informations du jeton, comme par exemple le nom de l’utilisateur, la date d’émission du jeton ou sa date d’expiration le tout en JSON encodé en Base64
- La **"Signature"** --> correspond à la concaténation des parties “Header” et “Payload” chiffrée avec la clé privée

Il est possible de déchiffrer un token avec cet outil : https://jwt.io/


## Cas d'utilisation

Pour notre API, on va utiliser JWT pour gérer l'auhentification d'un utilisateur à notre API.

[Tuto Sécuriser une API avec Nodejs et JWT](https://medium.com/@sbesnier1901/s%C3%A9curiser-une-api-avec-node-js-et-jwt-15e14d9df109) 

### Les étapes

- Installer JWT : `npm install jsonwebtoken --save`
- Définir une secret key dans les variables d'environnement
- Dans la fonction login : générer un token si les creds de l'utilisateur sont corrects et les envoyés dans l'en-tête "Authorization" de la réponse
- Créer middleware d'authentification pour vérifier la validité du token (il sera appelé avant chaque webservice)
    - Récupérer le token dans l'en-tête "Authorization" de la requête
    - Verifier le token avec la secret key
