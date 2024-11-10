
import db from "../../lib/db";
export default async function handler(req, res) {
    console.log(req.body)
    const { customer_id, payment_method, total_amount, transaction_status,transaction_id } = req.body.transaction


    const updateTransaction = async () => {
        const sql = `
        UPDATE transactions
        SET transaction_status=? ,customer_id=?,payment_method=?,total_amount=?
        WHERE transaction_id = ?;
    `;
        const values = [transaction_status, customer_id, payment_method, total_amount, transaction_id];

        try {
            const [result] = await db.query(sql, values);
            console.log('Updated transaction:', result);
            return result;
        } catch (error) {
            console.error('Error updating transaction:', error);
            throw error;
        }
    }
    updateTransaction()
}