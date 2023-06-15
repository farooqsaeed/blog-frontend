import Container from 'react-bootstrap/Container';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
function Footer(){
    return (
        
        <div className="bg-dark mt-auto">
            <Container className="p-3 text-center">
                <p className="text-center text-white">Thank you for visiting this website</p>
                <p className="text-center mt-2 text-white">Follow us on social media:</p>
                <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
                    <MDBIcon fab icon='facebook-f' />
                </MDBBtn>
                <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='#'>
                    <MDBIcon fab icon='twitter' />
                </MDBBtn>
                <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='#'>
                    <MDBIcon fab icon='instagram' />
                </MDBBtn>
            </Container>
        </div>
    )
}


export default Footer;
