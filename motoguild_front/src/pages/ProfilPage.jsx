import React from "react";
import { useEffect } from "react";
import { getUserData } from "../helpnigFunctions/ApiCaller";
import jwt from 'jwt-decode'

const ProfilPage = () => {
    const user = jwt(localStorage.getItem('token'))
    console.log(user)
    useEffect(() =>{
        async function getUser(){
        //const userData = await getUserData()

        }
        getUser()
    })
    
    return(
        <h1>Profil Page</h1>
    )
}

export default ProfilPage