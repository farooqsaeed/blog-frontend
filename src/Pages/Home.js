import { 
    Card,
    Container,
    Row,
    Col,
    Button,
    Badge 
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useState,useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [posts, setPosts] = useState([]);

    const fetchPost = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:4000/v1/api/get/posts');
          setPosts(response.data.data);
          console.log(response)
        } catch (error) {
          console.log('Error fetching dropdown options:', error);
        }
    };

    useEffect(() => {
      fetchPost();
      }, []);

  return (
    <Container className="mt-3">
        <Row>
        { posts.map((option) => (
          <Col key={4}>
            <Card style={{ margin: '20px' }}>
               <Card.Img variant="top" src={'http://127.0.0.1:4000/'+option.image} />
                   <Card.Body>
                     <Card.Title style={{fontSize:'21px',fontWeight:'bold',color:'#223464'}}>{option.title}</Card.Title>
                     <LinkContainer to={"/blog-details/"+option._id }>
                        <Button variant="outline-primary" className="ml-auto" size="sm">See Details</Button>
                     </LinkContainer>
                     <p className='mt-2'><Badge pill bg="success">{option.category}</Badge></p>
                </Card.Body>
             </Card>
         </Col>
        ))}
        </Row>
    </Container>
  );
}

export default Home;