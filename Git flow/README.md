# Guide d'Apprentissage : Git & Git Flow

Bienvenue dans ce repository dédié à l'apprentissage des bases de Git et de Git Flow ! Ce guide a pour objectif de vous accompagner pas à pas dans la maîtrise des commandes essentielles de Git ainsi que dans la mise en place d'un workflow collaboratif efficace grâce à Git Flow.

## Objectifs

- **Comprendre les fondamentaux de Git** : Apprendre à versionner, gérer les branches, et collaborer avec Git.
- **Découvrir Git Flow** : Utiliser Git Flow pour structurer le développement de projet en suivant un workflow clair et organisé.
- **Pratiquer avec des exercices** : Se familiariser avec les commandes de Git et Git Flow à travers des exercices pratiques et des scénarios concrets.

## Contenu du Repository

Ce repository contient des explications, des exemples et des exercices pour vous aider à progresser dans votre utilisation de Git et Git Flow.

### 1. Les Bases de Git

- **Configuration initiale** : Configurer Git avec votre nom d'utilisateur et votre adresse email.
- **Commandes essentielles** :
  - `git init` : Initialiser un repository Git.
  - `git add` : Ajouter des modifications à l’index pour le prochain commit.
  - `git commit` : Enregistrer les modifications avec un message.
  - `git status` : Vérifier l'état des modifications.
  - `git log` : Voir l’historique des commits.
  - `git diff` : Afficher les différences entre les versions.
- **Gestion des branches** :
  - `git branch` : Créer, lister et supprimer des branches.
  - `git checkout` : Passer d'une branche à une autre.
  - `git merge` : Fusionner des branches.
- **Collaboration avec Git** :
  - `git clone` : Cloner un repository distant.
  - `git pull` : Récupérer et intégrer les modifications depuis le repository distant.
  - `git push` : Envoyer des modifications vers le repository distant.

### 2. Introduction à Git Flow

Git Flow est un workflow de gestion de branches qui simplifie la gestion des versions et l'intégration des fonctionnalités. Voici les concepts clés :

- **Branches principales** :
  - `main` : La branche de production stable.
  - `develop` : La branche principale pour les développements en cours.
- **Branches de support** :
  - `feature` : Pour le développement de nouvelles fonctionnalités.
  - `release` : Pour la préparation des nouvelles versions avant la mise en production.
  - `hotfix` : Pour les corrections rapides de bugs en production.

### 3. Commandes de Git Flow

Une fois Git Flow installé, vous pouvez utiliser les commandes suivantes pour gérer vos branches :

- **Initialisation de Git Flow** : `git flow init`
- **Gestion des branches de fonctionnalité** :
  - `git flow feature start <nom>` : Créer une nouvelle branche de fonctionnalité.
  - `git flow feature finish <nom>` : Finaliser et fusionner une branche de fonctionnalité dans `develop`.
- **Gestion des branches de release** :
  - `git flow release start <version>` : Créer une branche de release.
  - `git flow release finish <version>` : Finaliser et fusionner la release dans `main` et `develop`.
- **Gestion des branches de hotfix** :
  - `git flow hotfix start <nom>` : Créer une branche de hotfix pour corriger un bug urgent.
  - `git flow hotfix finish <nom>` : Finaliser et fusionner le hotfix dans `main` et `develop`.
 
### 4. Lancer simulation pour s'exercer

#### Clone le projet:
- Ouvrir Git bash ou un terminal de commande où vous voulez installer le projet
- Tapez : `git clone https://github.com/l-sauvinet/Formations.git`
- Le projet a été installer
- Ouvrir le dossier **Git flow**
- Ouvrir le fichier **exercice.html**
  
## Ressources Complémentaires

Pour approfondir vos connaissances sur Git et Git Flow, consultez les ressources suivantes :

- [Documentation officielle de Git](https://git-scm.com/doc)
- [Introduction à Git Flow par Atlassian](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [Guide Git Flow sur GitHub](https://danielkummer.github.io/git-flow-cheatsheet/)

## Contribution

Si vous souhaitez ajouter des exercices ou des améliorations, merci de créer une branche et de soumettre une pull request avec une description de votre contribution.

---

Bonne exploration de Git et Git Flow ! Ce repository vous guidera vers une utilisation avancée de la gestion de version et des workflows collaboratifs.
