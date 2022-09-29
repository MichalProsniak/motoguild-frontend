import React from "react";
import { useEffect, useState } from "react";
import { ProfileData} from "../helpnigFunctions/ApiCaller";
import UserData from "../components/Profil/UserData"
import Group from "../components/Profil/Group";
import Ride from "../components/Profil/Ride";
import Event from "../components/Profil/Event";
import jwt from "jwt-decode"


const ProfilPage = () => {
    const [id, setId] = useState()
    const [profil,setProfil] = useState()
    const [profilGroups, setProfilGroups] = useState()
    const [profilGroupsOwner, setProfilGroupsOwner] = useState()
    const [profilRides, setProfilRides] = useState()
    const [profilRidesOwner, setProfilRidesOwner] = useState()
    const [profilEvents, setProfileEvents] = useState()
    const [profilEventsOwner, setProfilEventsOwner] = useState()

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
            setProfilGroupsOwner(profil.ownedGroups)
            setProfilRides(profil.routes)
            setProfilRidesOwner(profil.ownedRides)
            setProfileEvents(profil.events)
            setProfilEventsOwner(profil.ownedEvents)
            console.log(profil)
        }
    },[profil])

    return (
        <div className="page-conteiner">
            <div>
                {profil &&
                    <UserData profil={profil} />
                }
            </div>
            {profilGroups &&
            <div>
                <div className="group-profile">
                <h1>Grupy</h1>
                <div className="profil-scroling">
                    {profilGroups.map((group) => (<Group key={group.id} group={group} />))}
                </div>
                </div>
                <div className="group-owner-profile">
                <h1>Moje Grupy</h1>
                <div className="profil-scroling">
                    {profilGroupsOwner.map((group) => (<Group key={group.id} group={group} />))}
                </div>
                </div> 
            </div>
            }
            <div>
            {profilRides &&
                <div className="ride-profile">
                    <h1>Trasy</h1>
                    <div className="profil-scroling">
                    {profilRides.map((ride) => (<Ride key={ride.id} ride={ride} />))}
                    </div>
                </div>
            } 
            {profilRidesOwner.length > 0 &&
                <div className="ride-owner-profile">
                    <h1>Moje Trasy</h1>
                    <div className="profil-scroling">
                    {profilRidesOwner.map((ride) => (<Ride key={ride.id} ride={ride} />))}
                    </div>
                </div>
            }
            </div>
            <div>
             {profilEvents.length > 0 &&
            <div className="event-profile">
                <h1>Ustawki</h1>
                <div className="profil-scroling">
                  {profilEvents.map((event) => (<Event key={event.id} event={event} />))}
                </div>
            </div>
            }
            {profilEventsOwer.length > 0 &&
            <div className="event-profile">
                <h1>Ustawki</h1>
                <div className="profil-scroling">
                {profilEventsOwner.map((event) => (<Event key={event.id} event={event} />))}
                </div>
            </div>
            }
            </div>
            
        </div>
      )
    }

export default ProfilPage