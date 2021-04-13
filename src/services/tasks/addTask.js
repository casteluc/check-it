import { db, auth } from '../../firebase'


export const addTask = () => {
    let user = auth.currentUser
    
    // db.collection("users").set()({
    //     user: user.email
    // }).then(docRef => {
    //     console.log(docRef)
    // }).catch(err => {
    //     console.log(err)
    // })
}
