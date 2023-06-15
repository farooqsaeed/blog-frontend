import { 
    Card,
    Container,
    Row,
    Col,
    // Button,
    // Badge 
} from 'react-bootstrap';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function Blog() {
    const { id } = useParams();

    const [post, setPost] = useState({});

    const fetchPosts = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:4000/v1/api/get/post/'+id);
          setPost(response.data.data);
        } catch (error) {
          console.log('Error fetching dropdown options:', error);
        }
    };

    useEffect(() => {
        fetchPosts();
      }, []);

    return (
        <Container className="mt-3">
             <Row>
                <Col key={4}>
                   <Card style={{ margin: '20px' }}>
                    <Card.Header>
                        <img class="article-image card-img-top" src={'http://127.0.0.1:4000/'+post.image} border="0" alt="img" />
                    </Card.Header>
                    <Container>
                        <Card.Title>
                        <h1 className='m-4'>
                            {post.title}
                        </h1>
                        </Card.Title>
                        <Card.Body>
                           <p>
                            {post.body}
                           </p>
                        </Card.Body>
                    </Container>    
                   </Card>
                </Col>
             </Row>
        </Container>
    )
}

export default Blog;