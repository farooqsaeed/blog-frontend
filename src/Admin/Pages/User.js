import Table from 'react-bootstrap/Table';
import {
    MDBIcon,
    MDBBtn
  }
  from 'mdb-react-ui-kit';
function User() {
    return (
        <div>
            <Table responsive="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>email</th>
                    <th>status</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>
                        <MDBBtn className='m-1' style={{ backgroundColor: '#FF0000' }} href='#'>
                            <MDBIcon fas icon="archive" />
                        </MDBBtn>
                        <MDBBtn className='m-1' style={{ backgroundColor: '#2E8B57' }} href='#'>
                             <MDBIcon fas icon="edit" />
                        </MDBBtn>
                     </td>
                </tr>
                </tbody>
            </Table>
            </div>
    )
}

export default User;