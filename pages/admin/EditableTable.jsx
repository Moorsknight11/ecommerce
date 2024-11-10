import React, { useState, useEffect } from 'react';

const EditableTable = ({ transactions }) => {
    console.log(transactions)

    const [data, setData] = useState(transactions);
    useEffect(() => {

        setData(transactions)

    }, [transactions])

    const handleInputChange = (e, index, field) => {
        const updatedData = [...data];
        updatedData[index][field] = e.target.value;
        setData(updatedData);
    };

    const handleSave = async (transaction) => {
        // Function to handle saving updated transaction
        try {
            const response = await fetch('/api/updateTransaction', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ transaction }),  // Send phone in JSON format
            });

            if (!response.ok) {
                throw new Error('Failed to fetch transactions');
            }

            const result = await response.json();
            console.log(result)
            // Check result in console for debugging
        } catch (error) {
            console.error('Error fetching transactions:', error);
            setResult({ success: false, message: error.message });
        } finally {
       
        }
        // You can add an API call here to save the data to the server
    };

    return (
        <div>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>Commande ID</th>
                        <th>Customer ID</th>
                        <th>Payment Method</th>
                        <th>Total Amount</th>
                        <th>Transaction Status</th>
                        <th>Created At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((transaction, index) => (
                        <tr key={transaction.transaction_id}>
                            <td>{transaction.transaction_id}</td>
                            <td>{transaction.commande_id}</td>
                            <td>{transaction.customer_id}</td>
                            <td>{transaction.payment_method}</td>
                            <td>{transaction.total_amount}</td>
                            <td>
                                <select


                                    onChange={(e) => handleInputChange(e, index, "transaction_status")}
                                >
                                    <option value={transaction.transaction_status} selected>{transaction.transaction_status}</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Cancelled">Cancelled</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Refunded">Refunded</option>
                                </select>
                            </td>
                            <td>{new Date(transaction.created_at).toLocaleString()}</td>
                            <td>
                                <button onClick={() => handleSave(transaction)}>Save</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EditableTable;