import { Form,Button } from 'react-bootstrap';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';



function NewPost() {
  const navgate =  useNavigate();
  const [dropdownOptions, setDropdownOptions] = useState([]);

  const fetchDropdownOptions = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:4000/v1/api/get/categories');
      setDropdownOptions(response.data.data);
    } catch (error) {
      console.log('Error fetching dropdown options:', error);
    }
  };

  useEffect(() => {
    fetchDropdownOptions();
  }, []);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('category', category);
      formData.append('image', imageFile);
      formData.append('body', body);

      const response = await axios.post('http://127.0.0.1:4000/v1/api/create/post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Post created:', response.data);
      navgate('/dashboard/posts');
      // Reset form values or perform any further actions
    } catch (error) {
      console.log('Error creating post:', error);
      // Handle any errors that occur during the API call
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };
  
  
  return (
    <div className='m-5'>
        <div>
            <h3>Create New Post</h3>
        </div>
        <form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Category</Form.Label>
                <Form.Select
                aria-label="Default select example"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                >
                <option>category</option>
                {dropdownOptions.map((option) => (
                    <option key={option.id} value={option.value}>
                    {option.categoryName}
                    </option>
                ))}
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" onChange={handleImageChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Body</Form.Label>
                <Form.Control
                as="textarea"
                rows={3}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Button className="float-end" variant="primary" type="submit">
                Save
                </Button>
            </Form.Group>
        </form>
    </div>
  );
}

export default NewPost;