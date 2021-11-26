import userAuthentication from "../Firebase/initialize";
import { getIdToken,updateProfile,GoogleAuthProvider, signInWithPopup,getAuth, createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import {useEffect, useState} from "react";
import axios from "axios";
userAuthentication();
const auth = getAuth();
const useFirebase = () =>{
    const googleProvider = new GoogleAuthProvider();
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false)
    const [user, setUser] = useState({})
    const [error, setError] = useState({})
    const [token, setToken] = useState('')
    // New user create methods declaration
    const newUserCreate = (email, password,fullName,userCreate,navigate) =>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const newUser = {email: email, displayName: fullName}
                setUser(newUser)
                //Save User Information to database
                saveUser(email, fullName, 'POST')
                updateProfile(auth.currentUser, {
                    displayName: fullName
                }).then(() => {
                }).catch((error) => {
                });
                userCreate()
                navigate('/')
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(()=>setIsLoading(false));
    }
    //Logout methods declaration
    const logOut = (navigate, userLogout) =>{
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
            navigate('/')
            userLogout()
        }).catch((error) => {
            setError(error.message)
        })
            .finally(()=>setIsLoading(false));
    }
    // user Auth State Change
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken=>{
                        setToken(idToken)
                    })
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [])
    // Sine In User
    const loginUser = (email, password, location, navigate, userLogin) =>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const destination = location?.state?.from || '/'
                navigate(destination)
                setUser(result.user)
                userLogin()
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(()=>setIsLoading(false));
    }

    //Google Sine In
    const sineInWithGoogle = (location, navigate, userLogin) =>{
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state?.from || '/'
                navigate.replace(destination)
                const user = result.user
                saveUser(user.email, user.displayName, 'PUT')
                userLogin()
            }).catch((error) => {
                setError(error.message)
        });
    }

    // Save User to Database
    const saveUser = (email, fullName, method)=>{
        const newUser = {email, fullName}
        const url = 'http://localhost:8000/api/new-user-info'
        if(method === 'POST'){
            axios.post(url, newUser).then(res =>{
                console.log(res.data)
            })
        }else if(method === 'PUT'){
            axios.put(url, newUser).then(res =>{
                console.log(res.data)
            })
        }
    }

    //User Admin Check and Rerender
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/user/admin/${user.email}`).then(res=>{
            setAdmin(res.data.admin)
        })
    },[user.email])

    return {user,token, newUserCreate, logOut,loginUser, isLoading,sineInWithGoogle, admin}
}
export default useFirebase