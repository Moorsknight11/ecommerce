
import React, { useState } from 'react'

const AddTransaction = () => {


    const [tranString, setTranString] = useState("")
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone: '',
        email: '',
        tranString: '',

    });
    const handleChange = (e) => {
        console.log(tranString)
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        console.log(formData)
    };
    const addTransaction = async () => {

        try {
            const response = await fetch('/api/addTransaction', {
                method: 'POST',
                body: JSON.stringify(formData),
            })
            const responseData = await response.json();
            console.log('Response Data:', responseData);
            if (response.ok) {
                setFormData({
                    name: '',
                    address: '',
                    phone: '',
                    email: '',
                    tranString: '',

                })
            } else {
                console.error('Error adding product:', response.statusText);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }

    }
    const onSubmit = (e) => {
        e.preventDefault()

        addTransaction()

    }
    return (
        <div>
            <form>
                <textarea id="tranString"
                    name="tranString" onChange={handleChange} type="text" placeholder="enter the command string"></textarea>
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
                <input type="submit" onClick={(e) => { onSubmit(e) }} />











            </form>
        </div>

    )
}

export default AddTransaction