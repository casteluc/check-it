import { db, auth } from '../../firebase'




export const signUp = ({email, password}) => {
    auth.createUserWithEmailAndPassword(email, password)
        .then((res) => {
            let uid = res.user.uid
            db.collection("users").doc(uid).set({})
            db.collection("uids").doc(uid).set({})
        }).catch((err) => {
            console.log(err)
        })
}