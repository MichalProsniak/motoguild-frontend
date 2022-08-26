import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import picture from '../images/piesek.jpg'
import Image from 'react-bootstrap/Image'
import {useState, useEffect} from 'react';
import {Route, Link, Routes, useParams} from 'react-router-dom';
import GroupImportantInfo from './GroupImportantInfo';
import GroupPosts from './GroupPosts';
import GroupMembers from './GroupMembers';


export default function GroupBody()
{
    const currentGroup = useParams().id;
    const [group, setGroup] = useState(null)

    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        async function getGroup() {
        try {
            const res = await fetch(`https://localhost:3333/api/groups/${currentGroup}`);
            const data = await res.json();
            setGroup(data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
        }
        getGroup(); 
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
                    {!isLoading &&<GroupPosts/>}
                    
                </Col>
            </Row>
        </Container>
    )
}