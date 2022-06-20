// à exécuter avec le script : node testPasswordHashing.js :

// 1) Pour tester les fonctions de hash :
const User = require('./models/user');

User.hashPassword('myPlainPassword').then((hashedPassword) => {
  console.log(hashedPassword);
});


// 2) Pour érifier que le mot de passe de base que l'utilisateur donne (lorsqu'il se connecte à l'application par exemple) correspond au mot de passe hash stocké :
const User = require('./models/user');

User.verifyPassword(
 'myPlainPassword',
 '$argon2id$v=19$m=65536,t=5,p=1$6F4WFjpSx9bSq9k4lp2fiQ$cjVgCHF/voka5bZI9YAainiaT+LkaQxfNN638b/h4fQ'
).then((passwordIsCorrect) => {
  console.log(passwordIsCorrect);
});
