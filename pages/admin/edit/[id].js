// pages/admin/edit/[id].js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
export default function EditProduct() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [form, setForm] = useState({
    name: '',
    description: '',
    category_id: '',
    parent_category_id: '',
    brand_id: '',
    sku: '',
    price: '',
    discount: '',
    quantity_in_stock: '',
    weight: '',
    dimensions: '',
    color: '',
    size: '',
    material: '',
    is_featured: 0,
    is_active: 1,
    imagesUrls: "",
    images:[]
  });

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const response = await fetch(`/api/products/${id}`);
        const data = await response.json();
        setProduct(data?.product[0]);
        console.log(data?.product[0][0])
        setForm({

          name: data.product[0][0].name,
          description: data.product[0][0].description,
          category_id: data.product[0][0].category_id,
          parent_category_id: data.product[0][0].parent_category_id,
          brand_id: data.product[0][0].brand_id,
          sku: data.product[0][0].sku,
          price: data.product[0][0].price,
          discount: data.product[0][0].discount,
          quantity_in_stock: data.product[0][0].quantity_in_stock,
          weight: data.product[0][0].weight,
          dimensions: data.product[0][0].dimensions,
          color: data.product[0][0].color,
          size: data.product[0][0].size,
          material: data.product[0][0].material,
          is_featured: data.product[0][0].is_featured ? 1 : 0,
          is_active: data.product[0][0].is_active ? 1 : 0,
          imagesUrls: data.product[0][0].images_urls,
          images:[]
        });
        console.log(form)
      };
      fetchProduct();
    }
  }, [id]);

  const handleSubmit = async (e) => {

    e.preventDefault();
    const formDataToSend = new FormData();

    formDataToSend.append('name', form.name);
    formDataToSend.append('description', form.description);
    formDataToSend.append('category_id', form.category_id);
    formDataToSend.append('parent_category_id', form.parent_category_id);
    formDataToSend.append('brand_id', form.brand_id);
    formDataToSend.append('sku', form.sku);
    formDataToSend.append('price', form.price);
    formDataToSend.append('discount', form.discount);
    formDataToSend.append('quantity_in_stock', form.quantity_in_stock);
    formDataToSend.append('weight', form.weight);
    formDataToSend.append('dimensions', form.dimensions);
    formDataToSend.append('color', form.color);
    formDataToSend.append('size', form.size);
    formDataToSend.append('material', form.material);
    formDataToSend.append('is_featured', form.is_featured);
    formDataToSend.append('is_active', form.is_active);


    form.images.forEach((image) => {
      formDataToSend.append('images', image);
    });
    try {
      const test=await fetch(`/api/products/${id}`, {
        method: 'PUT',
        body: formDataToSend,
      });
      //router.push('/admin'); // Redirect back to the admin page
console.log(test)
if (test.ok === true) {
  window.location.reload();
}
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? (checked ? 1 : 0) : value,
    });
console.log(form)
  };
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setForm({
      ...form,
      images: files, // Store uploaded files
    });
    console.log(form)
  };

  const handleDeleteImage = async (imageToDelete) => {
    try {
      // Send DELETE request to the API to remove the image from the database
      const response = await fetch(`/api/images/${encodeURIComponent(imageToDelete.trim())}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // If the deletion was successful, update the local state
        const updatedImages = form.imagesUrls.split(',')
          .filter(image => image.trim() !== imageToDelete.trim())
          .join(',');

        setForm({
          ...form,
          imagesUrls: updatedImages // Update the state with the new string
        });
      } else {
        console.error('Failed to delete the image from the database.');
      }
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  return product ? (
    <form encType='multipart/form-data' onSubmit={handleSubmit}>
      <h1>Edit Product</h1>
      <label>
        Product Name
        <input name="name" value={form.name} onChange={handleChange} placeholder="Product Name" />
      </label>
      <label>
        Description
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      </label>
      <label>
        Price
        <input name="price" value={form.price} onChange={handleChange} placeholder="Price" />
      </label>
      <label>
        Discount
        <input name="discount" value={form.discount} onChange={handleChange} placeholder="discount" />
      </label>
      <label>
        Quantity in Stock
        <input name="quantity_in_stock" value={form.quantity_in_stock} onChange={handleChange} placeholder="Quantity in Stock" />
      </label>
      <label>
        Category id
        <input name="category_id" value={form.category_id} onChange={handleChange} placeholder="Category id" />
      </label>
      <label>
        Weight
        <textarea name="weight" value={form.weight} onChange={handleChange} placeholder="Weight" />
      </label>
      <label>
        Dimensions
        <input name="dimensions" value={form.dimensions} onChange={handleChange} placeholder="Dimensions" />
      </label>
      <label>
        Color
        <input name="color" value={form.color} onChange={handleChange} placeholder="Color" />
      </label>
      <label>
        Size
        <input name="size" value={form.size} onChange={handleChange} placeholder="Size" />
      </label>
      <label>
        Material
        <textarea name="material" value={form.material} onChange={handleChange} placeholder="Material" />
      </label>
      <label>
        <input
          type="checkbox"
          name="is_featured"
          checked={form.is_featured}
          onChange={handleChange}
        />
        Is Featured
      </label>

      <label>
        <input
          type="checkbox"
          name="is_active"
          checked={form.is_active}
          onChange={handleChange}
        />
        Is Active
      </label>
      {/* Images Display */}
      <div className="image-gallery">
        {form?.imagesUrls?.length > 0 ? (
          form.imagesUrls.split(',').map((image, index) => (
           
            <div key={index} style={{ display: 'flex', alignItems: 'center', margin: '5px' }}>
              <img
                src={image.trim()} // trim to remove any extra spaces
                alt={`Product Image ${index + 1}`}
                style={{ width: '100px', height: '100px', marginRight: '5px' }}
              />
              <button
                onClick={() => handleDeleteImage(image.trim())}
                style={{ border: 'none', background: 'none', cursor: 'pointer' }}
                aria-label="Delete Image"
              >
                <FontAwesomeIcon icon={faTrash} style={{ color: 'red' }} />
              </button>
            </div>
          ))
        ) : (
          <p>No images uploaded</p>
        )}
      </div>





      <label>Upload Images:</label><br />
      <input
        type="file"
        accept="image/*" // Accept only image files
        multiple // Allow multiple images
        onChange={handleImageChange}
      /><br /><br />

      {/* Image Preview */}
      <div>
        <strong>Selected Images:</strong><br />
        {form.images.length > 0 ? (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {form.images.map((file, index) => (
              <div key={index} style={{ margin: '5px' }}>
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  style={{ width: '100px', height: '100px', objectFit: 'cover', border: '1px solid #ccc', borderRadius: '4px' }}
                />
                <div>{file.name}</div>
              </div>
            ))}
          </div>
        ) : (
          <div>No images selected</div>
        )}
      </div><br />
      <button type="submit">Update Product</button>
    </form>
  ) : (
    <p>Loading...</p>
  );
}