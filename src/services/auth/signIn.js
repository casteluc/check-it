import { db, auth, googleProvider } from "../../firebase"

export const signIn = ({email, password}) => {
    auth.signInWithEmailAndPassword(email, password)
        .then((res) => {
            console.log("logado")
        }).catch((err) => {
            console.log(err)
        })
}

export const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider)
        .then(res => {
            let uid = res.user.uid
            let uidsRef = db.collection("uids")

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
