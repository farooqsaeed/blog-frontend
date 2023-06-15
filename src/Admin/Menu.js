import { 
  Form,
  Container,
  Nav,
  Navbar,
  Button
} from 'react-bootstrap'; 
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate  } from 'react-router-dom';

function Menu() {
  const navgate =  useNavigate();
  const handlelogout = (e) => {
    localStorage.clear();
    navgate('/');
  };
  
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="mx-auto">
            <LinkContainer to="/dashboard/posts">
              <Nav.Link>Posts</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/dashboard/users">
              <Nav.Link>Users</Nav.Link>
            </LinkContainer>
          </Nav>
          <Form className="d-flex">
            <Button onClick={handlelogout} variant="outline-warning">Logout</Button>
          </Form>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;