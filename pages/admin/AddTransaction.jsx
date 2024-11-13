
import React, { useState } from 'react'

const AddTransaction = () => {


    const [tranString, setTranString] = useState("")
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone: '',
        email: '',
        commande_id: '',
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


            let data1 = JSON.parse(formData.tranString)

            function removeAttribute(data1, attribute) {
                data1.forEach(item => {
                    delete item[attribute]; // Removes the attribute from each item
                });
            }
            removeAttribute(data1, 'description');
            setFormData({
                ...formData,
                tranString: JSON.stringify(data1)
            });
            const response = await fetch('/api/addTransaction', {
                method: 'POST',
                body: JSON.stringify(formData),
            })
            const responseData = await response.json();
            console.log('Response Data:', responseData);
            console.log(formData)
            if (response.ok) {
                setFormData({
                    name: '',
                    address: '',
                    phone: '',
                    email: '',
                    commande_id: '',
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
                    <label htmlFor="commande_id">commande Id:</label>
                    <input
                        type="text"
                        id="commande_id"
                        name="commande_id"
                        value={formData.commande_id}
                        onChange={handleChange}
                        required
                    />
                </div>
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