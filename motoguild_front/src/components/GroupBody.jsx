import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import picture from '../images/piesek.jpg'
import Image from 'react-bootstrap/Image'
import {useState, useEffect} from 'react';
import {Route, Link, Routes, useParams} from 'react-router-dom';
import GroupImportantInfo from './GroupImportantInfo';
import PostsForPage from './PostsForPage';
import GroupMembers from './GroupMembers';
import { getGroup } from '../helpnigFunctions/ApiCaller';


export default function GroupBody()
{
    const currentGroup = useParams().id;
    
    const [group, setGroup] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getGroupInfo() {
        const data = await getGroup(currentGroup)
        setGroup(data);
        setIsLoading(false);
      }
      getGroupInfo()
    }, []);


    return (
        <Container>
            <Row>
                <Col sm={6}>
                    <Image className='img fluid rounded-circle' style={{height: '500px', width: '500px'}} src={picture} />
                </Col>
                <Col sm={6}>
                    {!isLoading && <GroupImportantInfo group={group} />}
                    
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    {!isLoading && <GroupMembers members={group.participants} />}
                </Col>
                <Col sm={6}>
                    {!isLoading &&<PostsForPage link="group" />}
                    
                </Col>
            </Row>
        </Container>
    )
}