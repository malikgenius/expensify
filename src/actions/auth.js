import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid, photoURL, displayName, email) => ({
    type: 'LOGIN',
    uid,
    photoURL,
    displayName,
    email
});

export const startLogin = () => {
        return firebase.auth().onAuthStateChanged((user)=> {
            if(user != null) {
                user.providerData.forEach((profile) => {
                    console.log("Sign-In Provider: " + profile.providerId);
                    console.log("Display Name: " + profile.displayName);
                    console.log("  Email: " + profile.email);
                    alert(`${profile.displayName} ${profile.email} is logged in`)
                })
            } else {
            //    return firebase.auth().signInWithPopup(googleAuthProvider);
              return firebase.auth().signInWithPopup(googleAuthProvider);
            }
        }) 
        
    }


export const logout = () => ({
    type: 'LOGOUT'
});
    export const startLogOut = () => {
        return firebase.auth().onAuthStateChanged((user) => {
            if(user != null) {
                return firebase.auth().signOut();
            }
        })
    }