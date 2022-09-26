import React from "react";
import jwt from 'jwt-decode'
import { useEffect } from "react";
import { useState } from "react";
import { ProfileData } from "../helpnigFunctions/ApiCaller";
import UserData from "../components/Profil/UserData"

const ProfilPage = () => {
    const [id, setId] = useState()
    const [profil,setProfil] = useState()

    const userId = async () =>{
        if (localStorage.getItem('token')){
                var deToten = jwt(localStorage.getItem('token'))
                Object.keys(deToten).forEach(async function (key) {
                    let res = key.split("/");
                    if (res.length > 1) {
                        if (res[res.length - 1] === "serialnumber") {
                            var loggedUserId =  deToten[key]
                            setId(loggedUserId)
                        }
                    }
                }
            );
        }
    }

    const userData = async () =>{
        if(id){
            var data = await ProfileData(id)
            setProfil(data)
        }
    }

    useEffect(()=> {
        userId()
    },[localStorage.getItem('token')])

    useEffect(() => {
        userData()
        
    },[id])

    return (
        <div>
                {profil &&
                <UserData profil={profil} />
            }
        </div>
      )
    }

export default ProfilPage