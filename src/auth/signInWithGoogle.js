import { db, auth, googleProvider } from "../firebase"

const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider)
        .then(res => {
            let uid = res.user.uid
            let uidsRef = db.collection("uids")

            // creates a new user on db only if the user has never logged in
            uidsRef.get().then((ref) => {
                console.log(ref)
                if (ref.exists && ref.data() !== uid) {
                    db.collection("users").doc(uid).set({})
                        .then(res => {
                            uidsRef.doc(uid).set({})
                        }).catch(err => {
                            console.log(err)
                        })      
                }
            })
        }).catch(err => {
            console.log(err)
        })
}

export default signInWithGoogle
