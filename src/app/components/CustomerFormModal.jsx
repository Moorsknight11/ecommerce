// components/CustomerFormModal.jsx
import { useState,useEffect } from 'react';

export default function CustomerFormModal({commande, isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    commande:commande
  });
useEffect(() => {
  console.log('Commande updated:', commande);
  // Update the formData when commande changes
  setFormData(prevFormData => ({
    ...prevFormData, // Spread the previous formData
    commande: commande, // Update the 'commande' field
  }));
}, [commande]); // This will run every time 'commande' changes

useEffect(() => {
  // Log updated formData after it changes
  console.log('FormData updated:', formData);
}, [formData]); // This effect runs whenever formData is updated
  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent dark overlay
      backdropFilter: 'blur(5px)', // Blur effect for background
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    },
    modal: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      width: '100%',
      maxWidth: '500px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      fontSize: '24px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
    },
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const sendEmailCommand = () =>{
   
    const response = fetch('/api/command', {
      method: 'POST',
      body: JSON.stringify(formData),

    });
  
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    onClose(); // Close modal after submitting
  };

  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={onClose} style={styles.closeButton}>
          &times;
        </button>
        <h1>Customer Information</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <button onClick={sendEmailCommand} type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

// Inline styles for simplicity; consider moving these to a CSS file
