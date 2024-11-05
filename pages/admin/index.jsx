import React, { useState } from 'react';
import Link from 'next/link';
const AddProductForm = () => {
  const [formData, setFormData] = useState({
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
    images: []
  });
  const categories = [
    { id: 1, name: 'Electronics', parentId: null },
    { id: 2, name: 'Clothing', parentId: null },
    { id: 3, name: 'Home Appliances', parentId: null },
    { id: 4, name: 'Laptops', parentId: 1 },
    { id: 5, name: 'Desktops', parentId: 1 },
    { id: 6, name: 'Men\'s Clothing', parentId: 2 },
    { id: 7, name: 'Women\'s Clothing', parentId: 2 },
  ];

  // Handle change for input fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  const getChildCategories = (parentId) => {
    return categories.filter(category => category.parentId === parentId);
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    formDataToSend.append('name', formData.name);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('category_id', formData.category_id);
    formDataToSend.append('parent_category_id', formData.parent_category_id);
    formDataToSend.append('brand_id', formData.brand_id);
    formDataToSend.append('sku', formData.sku);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('discount', formData.discount);
    formDataToSend.append('quantity_in_stock', formData.quantity_in_stock);
    formDataToSend.append('weight', formData.weight);
    formDataToSend.append('dimensions', formData.dimensions);
    formDataToSend.append('color', formData.color);
    formDataToSend.append('size', formData.size);
    formDataToSend.append('material', formData.material);
    formDataToSend.append('is_featured', formData.is_featured);
    formDataToSend.append('is_active', formData.is_active);

    console.log(formData)
    formData.images.forEach((image) => {
      formDataToSend.append('images', image);
    });

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Product added successfully:', data);
        // Optionally reset form
        setFormData({
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
          is_featured: false,
          is_active: true,
          images: []
        });
      } else {
        console.error('Error adding product:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      images: files, // Store uploaded files
    });
  };
  return (
    <div>
      <h2>get all products to edit and view</h2>
      <Link style={{display:'flex',justifyContent:'center',alignItems:'center'}} href={`admin/GetProducts`}>
      click here
      </Link>
      <h2>Add New Product</h2>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        {/* Product Name */}
        <label>Product Name:</label><br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br /><br />

        {/* Description */}
        <label>Description:</label><br />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
        ></textarea><br /><br />
        {/* Image Upload */}
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
          {formData.images.length > 0 ? (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {formData.images.map((file, index) => (
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
        {/* Category Selection */}
        <label>Category:</label><br />
        <select
          name="category_id"
          value={formData.category_id}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          {categories
            .filter(cat => cat.parentId === null) // Top-level categories
            .map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
        </select><br /><br />

        {/* Subcategory Selection */}
        {formData.category_id && (
          <>
            <label>Subcategory:</label><br />
            <select
              name="parent_category_id"
              value={formData.parent_category_id}
              onChange={handleChange}
            >
              <option value="">Select Subcategory</option>
              {getChildCategories(Number(formData.category_id)).map(subCategory => (
                <option key={subCategory.id} value={subCategory.id}>
                  {subCategory.name}
                </option>
              ))}
            </select><br /><br />
          </>
        )}
        {/* Brand */}
        <label>Brand:</label><br />
        <select
          name="brand_id"
          value={formData.brand_id}
          onChange={handleChange}
          required
        >
          <option value="">Select Brand</option>
          {/* Dynamically populate brands */}
          <option value="1">Brand A</option>
          <option value="2">Brand B</option>
          <option value="3">Brand C</option>
        </select><br /><br />

        {/* SKU */}
        <label>SKU:</label><br />
        <input
          type="text"
          name="sku"
          value={formData.sku}
          onChange={handleChange}
          required
        /><br /><br />

        {/* Price */}
        <label>Price:</label><br />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          step="0.01"
          required
        /><br /><br />

        {/* Discount */}
        <label>Discount (%):</label><br />
        <input
          type="number"
          name="discount"
          value={formData.discount}
          onChange={handleChange}
          step="0.01"
        /><br /><br />

        {/* Quantity in Stock */}
        <label>Quantity in Stock:</label><br />
        <input
          type="number"
          name="quantity_in_stock"
          value={formData.quantity_in_stock}
          onChange={handleChange}
          min="0"
        /><br /><br />

        {/* Weight */}
        <label>Weight (kg):</label><br />
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          step="0.01"
        /><br /><br />

        {/* Dimensions */}
        <label>Dimensions (L x W x H):</label><br />
        <input
          type="text"
          name="dimensions"
          value={formData.dimensions}
          onChange={handleChange}
          placeholder="e.g., 10x5x2"
        /><br /><br />

        {/* Color */}
        <label>Color:</label><br />
        <input
          type="text"
          name="color"
          value={formData.color}
          onChange={handleChange}
        /><br /><br />

        {/* Size */}
        <label>Size:</label><br />
        <input
          type="text"
          name="size"
          value={formData.size}
          onChange={handleChange}
        /><br /><br />

        {/* Material */}
        <label>Material:</label><br />
        <input
          type="text"
          name="material"
          value={formData.material}
          onChange={handleChange}
        /><br /><br />

        {/* Featured */}
        <label>Featured Product:</label>
        <input
          type="checkbox"
          name="is_featured"
          checked={formData.is_featured}
          onChange={handleChange}
        /><br /><br />

        {/* Active */}
        <label>Active Product:</label>
        <input
          type="checkbox"
          name="is_active"
          checked={formData.is_active}
          onChange={handleChange}
        /><br /><br />

        {/* Submit Button */}
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;