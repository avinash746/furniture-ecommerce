import * as React from 'react';
import { TextField, Button, Container, Grid, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductForm() {
  const notify = () => {
    toast.success("Form Submitted !", {
      position: "bottom-right"
    });
  };

  const [formData, setFormData] = React.useState({
    title: '',
    description: '',
    content: '',
    imageUrl: '',
    category: '',
    subcategory: '',
    slug: '',
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const apiEndpoint = `${process.env.domain}api/addProduct`;
    const res = await fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.ok) {
      setFormData({
        title: '',
        description: '',
        content: '',
        imageUrl: '',
        category: '',
        subcategory: '',
        slug: '',
      });
      setIsSubmitted(true);
      notify(); // Moved notify() here for successful submission
    } else {
      console.log('Cart is empty or form fields are empty.');
    }
  };

  return (
    <Container>
      <div className='flex justify-center mb-5'>
      <h1 className='font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent text-3xl '>Add Products - The Royal Oak</h1>
      </div>
     
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Content"
              name="content"
              value={formData.content}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Image URL"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <MenuItem value="flower">Flower</MenuItem>
                <MenuItem value="furniture">Furniture</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Subcategory"
              name="subcategory"
              value={formData.subcategory}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Slug"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Add Products
            </Button>
            <ToastContainer />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
