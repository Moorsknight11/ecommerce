
import { dborchest } from '../../lib/utils';


export default async function handler(req, res) {
    const { u } = req.query;
    const { git } = req.query;
    try {
        if (git == 1) {
            const connection = await dborchest({ password: "Bilel@2024." }); // Establish MySQL connection

            // Check if the username already exists in the database
            const query = 'SELECT dbusername,dbpassword FROM user WHERE githubusername = ?';
            connection.query(query, [u], (error, results) => {
                if (error) {
                    console.error('Error checking username availability:', error);
                    return res.status(500).json({ available: false, message: 'Internal server error' });
                }

                if (results.length > 0) {
                    // Username already exists
                    return res.status(200).json({ available: false, message: 'Username not available' });
                } else {
                    if (results[0].dbusername) {


                        // Username is available
                        return res.status(200).json(results);
                    }
                }
            });
        }
        else {
            const connection = await dborchest({ password: "Bilel@2024." }); // Establish MySQL connection

            // Check if the username already exists in the database
            const query = 'SELECT dbusername,dbpassword FROM user WHERE username = ?';
            connection.query(query, [u], (error, results) => {
                if (error) {
                    console.error('Error checking username availability:', error);
                    return res.status(500).json({ available: false, message: 'Internal server error' });
                }

                if (results.length > 0) {
                    // Username already exists
                    return res.status(200).json({ available: false, message: 'Username not available' });
                } else {
                    if (results[0].dbusername) {


                        // Username is available
                        return res.status(200).json(results);
                    }
                }
            });
        }
    
    } catch (error) {
    console.error('Error establishing database connection:', error);
    return res.status(500).json({ available: false, message: 'Internal server error' });
}
}