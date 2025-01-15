# Le modèle de maturité de Richardson

## C'est quoi ?

Le modèle de Richardson défnit plusieurs niveaux de "maturité" qui permettent aux développeurs d'évaluer la qualité de leurs APIs et de comprendre comment les améliorer pour répondre aux bonnes pratiques du RESTful.

Le modèle est basé sur un ensemble de critères définissant différentes étapes de maturité, qui vont du niveau le plus bas (ad hoc ou non structuré) au niveau le plus élevé (optimisé et parfaitement intégré).

Ces étapes sont généralement formulées sous la forme de niveaux de maturité, chacun représentant un stade de développement progressif des pratiques et capacités d'une organisation dans un domaine donné.

## Les 4 niveaux

### Level 0 : The Swamp of POX

**API non RESTful (One big endpoint)** : L'API expose généralement un seul point d'entrée pour toutes les ressources. C'est un modèle très basique, où l'architecture des appels est non structurée.

### Level 1 : Resources

**Utilisation des ressources** : L'API commence à organiser les points d'accès autour de ressources spécifiques, avec des points de terminaison distincts pour chaque ressource (par exemple, `/utilisateurs`, `/produits`).

### Level 2 : HTTP Verbs

**Utilisation des méthodes HTTP**: À ce niveau, l'API utilise correctement les méthodes HTTP standards comme `GET`, `POST`, `PUT`, `PATCH`, `DELETE` pour manipuler les ressources, respectant ainsi les principes REST.

### Level 3 : Hypermedia Controls

**HATEOAS (Hypermedia As The Engine of Application State)** : Ce niveau représente une API pleinement RESTful, où les réponses incluent des liens hypermédia (comme des URLs) permettant aux clients de découvrir dynamiquement les actions disponibles sur les ressources.


## Sources 
- [Le modèle de maturité de Richardson](https://guide-api-rest.marmicode.fr/api-rest/le-modele-de-maturite-de-richardson)

