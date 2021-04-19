import firebase from "firebase";

const provider = new firebase.auth.GithubAuthProvider();
export const handleGithubLogin = () => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential as firebase.auth.OAuthCredential;
      const token = credential?.accessToken;
      console.log(result);
      console.log(token);
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
};
