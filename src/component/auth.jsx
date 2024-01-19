import {auth, googleProvider} from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Auth = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   
    const signInWithEmailAndPassword = async () => {
        const result = await createUserWithEmailAndPassword(auth, email, password);
       
        // try{
        // await createUserWithEmailAndPassword(auth, email, password);

        // } catch(err) {
        //     console.error(err);
        // }
        console.log(result)
        navigate('/addTask')
     

    };

    
        
        const navigate = useNavigate();
        const signInwithGoogle = async () => {
            const result = await signInWithPopup(auth, googleProvider);

            console.log(result);
            navigate('/addTask')
            
            
        // try {
        //     await signInWithPopup(auth, googleProvider);
        // } catch (err) {
        //     console.error(err);
            
            
        // }
       
    }

    // const logout = async () => {
    //     try {
    //         await signOut(auth);
    //     } catch (err) {
    //         console.error(err);
            
    //     }
    // }


    return <div className="form">
        
        <input  placeholder="Email..." type="email" 
    onChange={(e) => setEmail(e.target.value)} required/>

    <br />
    <br />
    
    <input placeholder="password..."  type="password" 
    onChange={(e) => setPassword(e.target.value)} required/>
    <br />
    <br />
    <button type="submit" onClick={signInWithEmailAndPassword}>sign in</button>
    <br />
    <br />

    <button onClick={signInwithGoogle}>or sign in with google</button>
    </div>

}