# 💪 Challenge
Tu as vu comment hash et vérifier un mot de passe.

* Utilise ce que tu as appris jusqu'ici pour accepter un paramètre "password" dans la route POST /api/users. Cette route devra insérer un nouvel utilisateur dans la base de données, avec la version hash du mot de passe.
* Une fois que les utilisateurs peuvent s'enregistrer avec un mot de passe, crée une route (temporaire) POST /api/auth/checkCredentials. Cette route accepte les paramètres "email" et "password" dans le corps de la requête. Si les informations d'identification sont correctes (il y a un utilisateur avec le même email et un mot de passe correspondant dans la base de données), elle répond avec un statut 200, sinon elle répond avec un statut 401. NB : Ce n'est pas exactement la façon dont une fonction de connexion devrait être mise en œuvre, mais tu verras cela plus tard :-)
* Héberge le code de ton application et partages une URL publique vers cette dernière en guise de solution.

# 🧐 Critères d'acceptation
 * Nous pouvons POST un utilisateur avec un mot de passe
 * Le mot de passe donné doit comporter plus de 8 caractères
 * Le mot de passe donné n'est pas stocké tel quel dans la base de données, un hash de ce dernier est stocké à la place.
 * Les routes liées aux utilisateurs ne doivent pas retourner d'informations sensibles (attention aux SELECT * ... !)

