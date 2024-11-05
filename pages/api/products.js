// pages/api/products.js
import { IncomingForm } from 'formidable';
import db from '../../lib/db';
import fs from 'fs';
import path from 'path';

export const config = {
    api: {
        bodyParser: false, // Disable body parsing for file uploads
    },
};
const uploadDir = path.resolve('./public/uploads'); // Use path.resolve for absolute path
const productsHandler = async (req, res) => {
    let connection;
    connection = await db.getConnection();
    if (req.method === 'POST') {
        const form = new IncomingForm();
        //console.log(form)
        form.uploadDir = uploadDir
        // console.log(form)
        form.parse(req, async (err, fields, files) => {
            if (err) {
                console.error('Form parsing error:', err);
                return res.status(500).json({ message: 'Error parsing the files.' });
            }
            // console.log('Files received:', files);
            // Extract fields and files
            const { name, description, category_id, parent_category_id, brand_id, sku, price, discount, quantity_in_stock, weight, dimensions, color, size, material, is_featured, is_active } = fields;
            const imageUrls = [];

            // Process images
            try {
                console.log(files)
                if (files.images) {
                    const images = Array.isArray(files.images) ? files.images : [files.images];
                    for (const image of images) {
                        const tempPath = image.filepath;
                        const newFilename = `${image.newFilename}.${image.mimetype.split('/')[1]}`;
                        const targetPath = path.join(form.uploadDir, newFilename);
                        imageUrls.push(`/uploads/${newFilename}`);

                        // Move file to the desired location
                        fs.renameSync(tempPath, targetPath); // Synchronous to handle errors directly
                        try {
                            console.log('Moving file from', tempPath, 'to', targetPath);
                            fs.renameSync(tempPath, targetPath); // This will throw an error if the tempPath is invalid

                            console.log(imageUrls)

                        } catch (error) {
                            console.error('Error moving file:', error);
                        }
                        // Store the URL of the uploaded image

                    }


                }

                const imageUrlsString = imageUrls.join(','); // Join URLs if storing multiple

                const result = await db.query(
                    'INSERT INTO product (name,description,category_id,parent_category_id,brand_id,sku,price,discount,quantity_in_stock,weight,dimensions,color,size,material,is_featured,is_active,images_urls) VALUES (?,?,?, ?, ?, ?, ?,?, ?, ?, ?, ?,?, ?, ?, ?, ? )',
                    [name, description, parent_category_id, category_id, brand_id, sku, price, discount, quantity_in_stock, weight, dimensions, color, size, material, is_featured, is_active, imageUrlsString]
                );

                console.log(result)
                const imageUrlsdb = imageUrlsString.split(',').map(url => url.trim());
                const insertedId = result[0].insertId
                console.log(insertedId)
                for (const imageUrl of imageUrlsdb) {
                    await db.execute('INSERT INTO images (product_id, image_url) VALUES (?, ?)', [insertedId, imageUrl]);
                    console.log("test")
                }
                return res.status(200).json({ message: 'Product added successfully!', productId: result.insertId });
                // Save product data in the database

            } catch (error) {
                console.error('Database insert error:', error);
                return res.status(500).json({ message: 'Error adding product to database.' });
            }
            finally {
                if (connection) connection.release()
            }
        });
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
};

export default productsHandler;