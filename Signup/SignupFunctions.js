import * as firebase from 'firebase';


//CHECKS EMAIL AGAINST ALLOWED USERS, CREATES NEW USER, ADDS USERS INFO TO FIREBASE, CHECKS FOR ERRORS
export const handleSignUp = (fname, lname, email, password) => {
    console.log(email, password)
    if (password.length < 6) {
        alert("Must be minimum 6 characters!");
        return;
    }
    firebase
        .auth()
        .createUserWithEmailAndPassword(email.trim(), password)
        .then(() => firebase.auth().currentUser.sendEmailVerification())
        .catch((error) => {
            console.log(error.message)
        })
        .catch((error) => {
            console.log(error)
            Alert.alert(
                "Access Denied!",
                "Something is wrong!",
                [{ text: "OK" }],
                { cancelable: false }
            )
        }
        )
};

