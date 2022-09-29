import React from "react";
import { useEffect, useState } from "react";
import { ProfileData} from "../helpnigFunctions/ApiCaller";
import UserData from "../components/Profil/UserData"
import Group from "../components/Profil/Group";
import Ride from "../components/Profil/Ride";
import Event from "../components/Profil/Event";
import Route from "../components/Profil/Route";
import jwt from "jwt-decode"


const ProfilPage = () => {
    const [id, setId] = useState()
    const [profil,setProfil] = useState()
    const [profilGroups, setProfilGroups] = useState([])
    const [profilRides, setProfilRides] = useState([])
    const [profilEvents, setProfilEvents] = useState([])
    const [profilRoutes, setProfilRoute] = useState([])

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
            setProfilRides(profil.routes)
            setProfilEvents(profil.events)
            setProfilRoute(profil.routes)
        }
    },[profil])

    return (
        <div className="page-conteiner">
                {profil &&
                    <UserData profil={profil} />
                }
            {profilGroups.length > 0 &&
                <div className="group-profile">
                <h1>Grupy</h1>
                <div className="profil-scroling">
                    {profilGroups.map((group) => (<Group key={group.id} group={group} />))}
                </div>
                </div>
            }
            {profilRides.length > 0 &&
                <div className="ride-profile">
                    <h1>Ustawki</h1>
                    <div className="profil-scroling">
                    {profilRides.map((ride) => (<Ride key={ride.id} ride={ride} />))}
                    </div>
                </div>
            } 
             {profilEvents.length > 0 &&
            <div className="event-profile">
                <h1>Wydarzenia</h1>
                <div className="profil-scroling">
                  {profilEvents.map((event) => (<Event key={event.id} event={event} />))}
                </div>
            </div>
            }
            {profilRoutes.length > 0 &&
            <div className="route-profile">
                <h1>Trasy</h1>
                <div className="profil-scroling">
                  {profilRoutes.map((route) => (<Route key={route.id} route={route} />))}
                </div>
            </div>
            }
        </div>
      )
    }

export default ProfilPage