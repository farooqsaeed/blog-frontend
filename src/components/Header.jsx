import { 
  Button,
  NavDropdown ,
  Navbar,
  Nav,
  Form,
  Container
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const routeName = location.pathname;
 
  let topImage = "";
      
  if(routeName==="/" || routeName==="/home"){
      topImage = <div
      className='p-5 text-center bg-image'
      style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '400px' }}
    >
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <div className='text-white'>
            <h1 className='mb-3'>Welcome to Blog</h1>
            {/* <h4 className='mb-3'>Subheading</h4> */}
          </div>
        </div>
      </div>
    </div>
  }
  return (
    <div>
       <Navbar bg="light" expand="lg">
        <Container fluid>
          <LinkContainer to="/">
              <Navbar.Brand href="#">Blog</Navbar.Brand>
          </LinkContainer>
          
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <LinkContainer to="/home">
                  <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              
              <NavDropdown title="Category" id="navbarScrollingDropdown">
                <LinkContainer to="/category">
                    <NavDropdown.Item>Action</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/category">
                    <NavDropdown.Item>Another action</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            </Nav>
            <Form className="d-flex">
              <LinkContainer to="/login">
                  <Button variant="outline-primary" className="me-2">Login</Button>
              </LinkContainer>
              <LinkContainer to="/register">
                  <Button variant="outline-success">Register</Button>
              </LinkContainer>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
       {topImage}
    </div>
    
  );
}

export default Header;