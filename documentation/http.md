# HTTP et HTTPS

## Qu'est-ce que HTTP et HTTPS ?

**HTTP (Hypertext Transfer Protocol)** est un protocole de communication utilisé pour échanger des informations sur le web. Il est sans sécurité, ce qui signifie que les données échangées ne sont pas cryptées.

**HTTPS (Hypertext Transfer Protocol Secure)** est la version sécurisée de HTTP. Il utilise un chiffrement SSL/TLS pour garantir la sécurité des données échangées entre le client et le serveur (par exemple, pour les transactions bancaires, les informations personnelles).

## Méthodes HTTP pour les API

Les méthodes HTTP définissent l'action à réaliser lors de l'appel d'une API.

Les méthodes les plus courantes sont :

- **`GET`** : Récupérer des données

- **`POST`** : Envoyer des données pour créer une nouvelle ressource

- **`PUT`** : Mettre à jour une ressource existante (ou la créer si elle n'existe pas).

- **`PATCH`** : Mettre à jour partiellement une ressource (uniquement certaines données).

- **`DELETE`** : Supprimer une ressource

## Codes de Statut HTTP

Les codes de statut HTTP sont des réponses envoyées par le serveur après une requête. Ils sont utilisés pour indiquer si la demande a réussi ou échoué.

### 2xx : Succès

- 200 OK : La demande a réussi. C’est la réponse standard.
- 201 Created : La ressource a été créée avec succès (après un POST).
- 204 No Content : La demande a réussi, mais il n'y a pas de contenu à retourner.

### 3xx : Redirections

- 301 Moved Permanently : La ressource a été déplacée définitivement vers une nouvelle URL.
- 302 Found : La ressource a été déplacée temporairement.

### 4xx : Erreurs côté client

- 400 Bad Request : La demande est malformée ou incomplète.
- 401 Unauthorized : L'authentification est nécessaire pour accéder à la ressource.
- 403 Forbidden : L'accès est refusé, même avec une authentification.
- 404 Not Found : La ressource demandée est introuvable.
- 405 Method Not Allowed : La méthode HTTP utilisée n’est pas autorisée pour cette ressource.

### 5xx : Erreurs côté serveur

- 500 Internal Server Error : Le serveur a rencontré une erreur interne.
- 502 Bad Gateway : Le serveur a reçu une réponse invalide d’un serveur en amont.
- 503 Service Unavailable : Le serveur est temporairement hors service (maintenance).
- 504 Gateway Timeout : Le serveur n'a pas reçu de réponse en temps voulu du serveur en amont.

## Différence entre HTTP et HTTPS

HTTP est non sécurisé, ce qui signifie que les données peuvent être interceptées facilement. Il est donc recommandé de ne pas l'utiliser pour des échanges sensibles.

HTTPS sécurise les données en les cryptant, offrant ainsi une couche de sécurité avec SSL/TLS. Il est donc recommandé d’utiliser HTTPS pour toute communication importante (comme des transactions ou des données personnelles).