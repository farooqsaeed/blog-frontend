import {Table,Button} from 'react-bootstrap';
import {
    MDBIcon,
    MDBBtn
  }
  from 'mdb-react-ui-kit';
import { LinkContainer } from 'react-router-bootstrap';
import axios from 'axios';
import { useState,useEffect } from 'react';

function Post() {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:4000/v1/api/get/posts');
          setPosts(response.data.data);
        } catch (error) {
          console.log('Error fetching dropdown options:', error);
        }
    };

    useEffect(() => {
        fetchPosts();
      }, []);

    return (
        <div>
            <div className='m-4 ml-auto'>
               <LinkContainer to="/dashboard/createpost">
                    <Button variant="primary" className="float-end" size="sm">New Post</Button>
                </LinkContainer>
            </div>
            <Table responsive="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Category</th>
                    {/* <th>Auther</th> */}
                    {/* <th>Date</th> */}
                    <th>Published</th>
                    <th>Approved</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {posts.map((post,i) => (
                  <tr key={i}>
                    <td>{++i}</td>
                    <td>{post.title}</td>
                    <td>{post.category}</td>
                    {/* <td>{post}</td> */}
                    {/* <td>{post}</td> */}
                    <td>{post.is_publish ? <MDBIcon fas icon="check" />:<MDBIcon fas icon="times" />}</td>
                    <td>{post.is_approvedByAdmin ? <MDBIcon fas icon="check" />:<MDBIcon fas icon="times" />}</td>
                    <td>
                        <MDBBtn className='m-1' style={{ backgroundColor: '#FF0000' }} href='#'>
                            <MDBIcon fas icon="archive" />
                        </MDBBtn>
                        <MDBBtn className='m-1' style={{ backgroundColor: '#2E8B57' }} href='#'>
                             <MDBIcon fas icon="edit" />
                        </MDBBtn>
                        <MDBBtn className='m-1' style={{ backgroundColor: '#E2F516' }} href='#'>
                             <MDBIcon fas icon="eye" />
                        </MDBBtn>
                     </td>
                </tr>
                ))}
                
                </tbody>
            </Table>
            </div>
    )
}

export default Post;



    
 





    
 

