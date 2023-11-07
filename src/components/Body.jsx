// import Browse from "./Browse"
 
import Login from "./Login"
import { auth } from "../utils/firebase"

import { useEffect } from "react"

import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"
import { useNavigate } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"






const Body = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed In
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))

                navigate("/browse")


            } else {
                // User is signed out
                dispatch(removeUser());
            }
        });



    }, [])



    return (
        <div>
            <Login name="login" />


        </div>
    )
}

export default Body