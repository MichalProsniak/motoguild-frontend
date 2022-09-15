import {useState} from "react";
import Login from "../components/Login";
import Registration from "../components/Registration";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const StartPage = () => {
    
    const [isRegistration, setIsRegistration ] = useState(true)

    function changeAction() {
        setIsRegistration(prevState => {
            return prevState ? false : true
        })
    }


    return(
        <div>
            
            <Container>
                <Row>
                <Col sm={6}>
                <h1>MOTOGUILD</h1>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae mi id dui mattis pretium nec ut erat. Proin et odio ac tellus tristique maximus facilisis in risus. Etiam scelerisque neque nibh, at congue ipsum pulvinar in. Pellentesque vel tempor erat. Phasellus lobortis vitae lacus ac blandit. Nullam nec finibus mi. Quisque pretium ligula vel mi vulputate, nec condimentum enim tincidunt. Sed a nibh sed mauris mollis dictum non nec sem. Suspendisse malesuada condimentum enim, non condimentum nisi pulvinar eu. Cras arcu lectus, mattis a semper in, dapibus sed dui. Aenean ullamcorper auctor mi, id tempor massa luctus nec. Nunc libero leo, consectetur a facilisis et, consequat tempus quam. Donec ut sodales quam, sit amet cursus sapien. In eget porta nulla, eu dignissim justo. Vestibulum malesuada at dolor non eleifend. Morbi a massa in dolor fermentum maximus.</p>
                </Col>
                <Col sm={6}>
                    <button onClick={changeAction}>{isRegistration ? "Login" : "Register"}</button>
                    {isRegistration ? <Registration /> : <Login />}
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default StartPage