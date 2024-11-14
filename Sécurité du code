# Formation sur la Sécurité du Code

Cette session de formation vise à sensibiliser les développeurs aux risques de sécurité pouvant affecter nos applications et à apprendre les bonnes pratiques pour protéger nos données sensibles.

## Partage de Code

Lors du partage d’informations sensibles avec nos collègues ou sur des services en ligne comme ChatGPT ou StackOverflow, certains risques doivent être pris en compte :

- **Transmission d'informations sensibles** : Ne laissez aucune trace de données sensibles (fichiers `.env`, variables d'environnement, etc.) dans les échanges avec vos collègues. Sur Teams, les messages effacés sont protégés par la sécurité de Teams, et sur Nota, les messages supprimés disparaissent complètement de la base de données.
- **Anonymisation** : Évitez d’inclure des informations qui pourraient divulguer des détails sur votre projet lorsque vous partagez du code en ligne.
- **Extensions de code** : Certaines extensions (ex : Copilot) transmettent du code à des tiers, ce qui peut engendrer des risques de sécurité.

## Gestion des Dépendances

L'ajout de dépendances peut accroître le nombre de vulnérabilités potentielles.

- Installez uniquement les dépendances essentielles.
- Vérifiez leur popularité et la fréquence de leurs mises à jour.
- Effectuez des audits réguliers des dépendances avec des outils comme `NPM` et `Composer`.

## Gestion des Copies de Projet

Minimisez le nombre de copies accessibles du projet pour réduire les risques de sécurité.

- Évitez d’installer le projet sur des ordinateurs publics.
- Transmettez uniquement les versions nécessaires du projet (ex : uniquement le front pour les développeurs front-end).
- En production, ne partagez que le build.

## Gestion des Droits des Utilisateurs

Assurez-vous que chaque utilisateur dispose uniquement des droits nécessaires pour limiter l’impact potentiel des accès non autorisés.

## Stockage des Données Sensibles

Protégez les données sensibles par des pratiques sécurisées :

- Chiffrez les informations critiques, comme les mots de passe en base de données.
- Ne stockez jamais de fichiers sensibles dans Git ; utilisez `.gitignore` pour exclure ces fichiers.
- Limitez les données stockées côté front et faites attention aux informations stockées dans les cookies.

## Confidentialité Professionnelle

La confidentialité est essentielle dans le travail de développeur. Ne divulguez pas trop de détails techniques, surtout dans un contexte informel.

## Principales Failles et Mesures de Protection

### Faille XSS (Cross-Site Scripting)

Les failles XSS permettent l’injection de code malveillant. Sécurisez les formulaires et requêtes SQL avec des requêtes préparées et des validations strictes des résultats.

### Tokens d'Authentification

Utilisez deux types de tokens pour la sécurité :

- **Token d'accès** : expire rapidement et nécessite une ré-authentification après expiration.
- **Token de renouvellement** : permet de prolonger l'accès sans ré-authentification.

### Token CSRF (Cross-Site Request Forgery)

Le token CSRF protège contre les requêtes malveillantes en vérifiant que chaque requête provient de l’utilisateur authentifié.

### CORS (Cross-Origin Resource Sharing)

Le CORS contrôle l'accès aux ressources depuis différents domaines. Assurez-vous que le paramètre `Access-Control-Allow-Origin` de vos appels API est bien configuré.

### Checksum

Le checksum garantit l'intégrité des fichiers transférés en comparant les empreintes avant et après transfert.

### Signature d'URL (Magic Link)

Les signatures d'URL permettent une authentification sécurisée via un lien temporaire. Utilisé pour valider l’email sans mot de passe.

### Proxy

Les proxies agissent comme des intermédiaires sécurisés, filtrant le trafic et bloquant les menaces potentielles.

### Reverse Shell et Protection des Uploads

Protégez les uploads en spécifiant les types MIME attendus et en vérifiant les fichiers avant exécution.

## Outils de Veille

- **CVE** : Suivez les vulnérabilités avec les identifiants CVE sur des sites comme [cert.ssi.gouv.fr](https://cert.ssi.gouv.fr/).
- **CWE** : Consultez la liste des faiblesses courantes sur [cwe.mitre.org](https://cwe.mitre.org/).
- **OWASP** : Référez-vous au Top 10 OWASP pour les menaces de sécurité web.

## Outils de Test

- Pour les failles SQL : [SQLMap](https://sqlmap.org/)
- Pour les failles XSS : [XSSER](https://github.com/epsylon/xsser)
- Pour l'entraînement en sécurité : [Hack The Box](https://www.hackthebox.com/), [PentesterLab](https://pentesterlab.com/), [CodinGame](https://www.codingame.com/start/fr)

