# Websocket

## Qu'est-ce que c'est ?

Les **WebSockets** sont une technologie permettant d'établir une communication bidirectionnelle en temps réel entre un client (souvent un navigateur web) et un serveur.

Contrairement aux requêtes HTTP classiques, qui sont unidirectionnelles (le client envoie une requête et le serveur répond), les WebSockets permettent un échange continu de données entre le client et le serveur une fois la connexion établie.

## Socket IO

**Socket.IO** est une bibliothèque JavaScript qui permet de gérer la communication en temps réel entre un client (généralement un navigateur web) et un serveur.

Elle construit un protocole qui surmonte certaines limitations de WebSocket et facilite l'implémentation d'une communication bidirectionnelle en temps réel dans des applications web.

### Fonctionnement de Socket.IO

Socket.IO se compose de deux parties principales :

- Le côté client (en JavaScript, généralement dans un navigateur).
- Le côté serveur (en Node.js, mais il existe aussi des implémentations pour d'autres langages).

### Fonctionnalités de Socket.IO

1. **Communication bidirectionnelle** : Le client et le serveur peuvent envoyer des messages en temps réel dans les deux sens, sans avoir besoin de faire des requêtes HTTP répétées.

2. **Gestion automatique des protocoles** : Socket.IO choisit automatiquement le meilleur protocole pour la communication en fonction du réseau (WebSocket ou une autre technique comme le long-polling si WebSocket est bloqué).

3. **Canaux de communication (rooms)** : Socket.IO permet de créer des "salles" dans lesquelles les clients peuvent se regrouper pour échanger des messages. Cela est utile pour les applications de chat, les jeux multijoueurs, ou pour envoyer des messages ciblés à un sous-ensemble de clients.

4. **Reconnaissance des événements** : Vous pouvez définir des événements personnalisés pour la communication entre le serveur et le client. Cela permet de structurer les échanges de manière plus lisible et modulaire.

5. **Auto-reconnexion** : En cas de déconnexion, Socket.IO peut automatiquement tenter de rétablir la connexion avec le serveur.

6. **Broadcasting** : Le serveur peut envoyer des messages à tous les clients connectés ou à un sous-ensemble d’entre eux (par exemple, à tous les clients d'une même salle).

7. **Support pour les données binaires** : Socket.IO permet de gérer non seulement des chaînes de texte mais aussi des données binaires comme des fichiers, des images, etc.

## Avantages de Socket.IO par rapport à WebSocket :

1. **Compatibilité réseau améliorée** : WebSocket peut être bloqué par des pare-feu ou des proxies. Socket.IO est conçu pour fonctionner dans des environnements où WebSocket est bloqué, en utilisant des mécanismes alternatifs comme le long-polling.

2. **Gestion des événements** : Socket.IO offre un système d'événements personnalisé très flexible. Vous pouvez définir et gérer facilement des événements spécifiques pour vos applications.

3. **API simple** : Socket.IO offre une API facile à utiliser et à comprendre, tant du côté serveur que du côté client, ce qui simplifie la mise en place de communications en temps réel.

## Utilisation courante des WebSockets/Socket.IO :

- **Applications de chat en temps réel** : Permet de gérer la communication entre les utilisateurs en temps réel, y compris les notifications et les conversations de groupe.

- **Jeux en ligne multijoueurs** : Pour la synchronisation en temps réel des actions des joueurs, de la gestion des sessions et de la communication.

- **Collaborations en temps réel** : Applications où plusieurs utilisateurs travaillent simultanément sur le même contenu, comme des éditeurs de texte collaboratifs, des outils de dessin ou de brainstorming.

- **Notifications en temps réel** : Pour des mises à jour instantanées sur des événements, comme des alertes de réseaux sociaux, des informations financières ou sportives.l.