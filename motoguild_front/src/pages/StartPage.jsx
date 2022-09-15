import {useState, useEffect} from "react";
import Login from "../components/Login";
import Registration from "../components/Registration";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from 'react-router';
import Homepage from "./Homepage";

const StartPage = () => {
    
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/')
    },[])

    const [isRegistration, setIsRegistration ] = useState(true)

    function changeAction() {
        setIsRegistration(prevState => {
            return prevState ? false : true
        })
    }


    return(
        <div>
            {!localStorage.getItem("token") ? <Container>
                <Row>
                <Col sm={6}>
                <h2>Czołem Bracia Motocykliści!</h2><br></br><br></br>
                
                <p className="startpage-text" >Witamy na naszej niekomercyjnej stronie, mającej na celu rozbudowę jednośladowej społeczności. <br></br>
                Umożliwiamy Wam dodawanie i wyszukiwanie ciekawych tras, na podstawie których, możecie tworzyć i uczestniczyć we wspólnych przejazdach. <br></br>
                Dodatkowo za pośrednictwem naszej witryny możecie śledzić wydarzenia w swojej okolicy, zakładać i dołączać do różnego rodzaju grup tematycznych, rozbudowywać i umacniać lokalną społeczność. <br></br>
                MotoGuild to Braterska Gildia Motocyklowa, w której każdy Biker jest mile widziany. <br></br>
                Oczekujemy jedynie wzajemnego szacunku i miłości do jednośladów. <br></br>
                No to w drogę!  
                <br></br>
                <br></br>
                Załoga MotoGuild</p>
                </Col>
                <Col sm={6}>
                    <button onClick={changeAction}>{isRegistration ? "Login" : "Register"}</button>
                    {isRegistration ? <Registration /> : <Login />}
                </Col>
                </Row>
            </Container>
            :
            <Homepage />}
            
        </div>
    )
}

export default StartPage