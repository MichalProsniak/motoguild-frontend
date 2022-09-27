import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ProfileData} from "../helpnigFunctions/ApiCaller";
import UserData from "../components/Profil/UserData"
import Group from "../components/Profil/Group";
import jwt from "jwt-decode"


const ProfilPage = () => {
    const [id, setId] = useState()
    const [profil,setProfil] = useState()
    const [profilGroups, setProfilGroups] = useState()

    const userData = async () =>{
        var data = await ProfileData(id)
        setProfil(data)
    }

    const profileId = async () =>{
        var deToken = jwt(localStorage.getItem("token"))
            Object.keys(deToken).forEach(function (key) {
                let res = key.split("/");
                if (res.length > 1) {
                    if (res[res.length - 1] === "serialnumber") {
                        var loggedUserId =  deToken[key]
                        setId(loggedUserId)
                    }
                }
            }
        );
    }

    useEffect(()=> {
         profileId()
    },[localStorage.getItem('token')])

    useEffect(() => {
        if(id){
            userData()
        }
    },[id])

    useEffect(() =>{
        if(profil){
            setProfilGroups(profil.groups)
        }
    },[profil])
    return (
        <div className="page-conteiner">
            <div>
                {profil &&<UserData profil={profil} />
                
                }
            </div>
            <div className="group-profile">
                <h1>Grupy</h1>
               {profilGroups && profilGroups.map((group) => (<Group key={group.id} group={group} />))}
            </div>
            <div className="ride-profile">
                <h1>Trasy</h1>
            </div>
        </div>
      )
    }

export default ProfilPage