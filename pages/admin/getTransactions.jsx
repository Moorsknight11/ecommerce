import React, { useState } from 'react'
import EditableTable from './EditableTable';

const GetTransactions = () => {

    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        setPhone(e.target.value);
    };

    const getAllTransactions = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/getTransactions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone }),  // Send phone in JSON format
            });

            if (!response.ok) {
                throw new Error('Failed to fetch transactions');
            }

            const result = await response.json();
            setResult(result);
            console.log(result);
            setResult(result.results)  // Check result in console for debugging
        } catch (error) {
            console.error('Error fetching transactions:', error);
            setResult({ success: false, message: error.message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>

            <input type="text" name="phone" onChange={handleChange} value={phone} placeholder='enter client phone' />

            <button type="button" onClick={getAllTransactions}>try this</button>


            <EditableTable transactions={result} />


        </div>
    )
}

export default GetTransactions



