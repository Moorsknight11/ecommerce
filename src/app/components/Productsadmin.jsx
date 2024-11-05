import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
const AdminPage = () => {
    const [products, setProducts] = useState([]);
    const router = useRouter(); // Initialize the router
    // Fetch all products
    const fetchProducts = async () => {
        try {
            const response = await fetch('/api/getData');
            const data = await response.json();
            setProducts(data.products);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    useEffect(() => {


        fetchProducts();
    }, []);
    const deleteProduct = async (id) => {
        if (confirm('Are you sure you want to delete this product?')) {
            try {
                await fetch(`/api/products/${id}`, { method: 'DELETE' });
                fetchProducts(); // Refresh product list after deletion
            } catch (error) {
                console.error('Error deleting product:', error);
            }
        }
    };
    return (
        <div>
            <h1>Product Management</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Description</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Price</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Stock</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map((product) => (
                        <tr key={product.product_id}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product.product_id}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product.name}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product.description}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product.price}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product.quantity_in_stock}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                <button onClick={() => router.push(`/admin/edit/${product.product_id}`)}>Edit</button>
                                <button onClick={() => deleteProduct(product.product_id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPage;