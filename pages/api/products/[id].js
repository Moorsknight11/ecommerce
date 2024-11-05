// pages/api/products/[id].js
import db from '../../../lib/db';
import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';
import { v2 as cloudinary } from 'cloudinary';

export const config = {
    api: {
        bodyParser: false, // Disable body parsing for file uploads
    },
};
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
export default async function handler(req, res) {
    const { id } = req.query;
    let connection;
    connection = await db.getConnection();

    //const uploadDir = path.resolve('./public/uploads');


    if (req.method === 'PUT') {


        const form = new IncomingForm();
        //console.log(form)
        //form.uploadDir = uploadDir
        // console.log(form)
        form.parse(req, async (err, fields, files) => {

            if (err) {
                console.error('Form parsing error:', err);
                return res.status(500).json({ message: 'Error parsing the files.' });
            }
            // console.log('Files received:', files);
            // Extract fields and files
            const { name, description, category_id, parent_category_id, brand_id, sku, price, discount, quantity_in_stock, weight, dimensions, color, size, material, is_featured, is_active } = fields;
            let imageUrls

            // Process images
            try {
                console.log(files)
                // if (files.images) {
                //     const images = Array.isArray(files.images) ? files.images : [files.images];
                //     for (const image of images) {
                //         const tempPath = image.filepath;
                //         const newFilename = `${image.newFilename}.${image.mimetype.split('/')[1]}`;
                //         const targetPath = path.join(form.uploadDir, newFilename);
                //         imageUrls.push(`/uploads/${newFilename}`);

                //         // Move file to the desired location
                //         fs.renameSync(tempPath, targetPath); // Synchronous to handle errors directly
                //         try {
                //             console.log('Moving file from', tempPath, 'to', targetPath);
                //             fs.renameSync(tempPath, targetPath); // This will throw an error if the tempPath is invalid
                //             console.log(imageUrls)
                //         } catch (error) {
                //             console.error('Error moving file:', error);
                //         }
                //         // Store the URL of the uploaded image

                //     }


                // }

                // const imageUrlsString = imageUrls.join(','); // Join URLs if storing multiple

                // const result = await db.query(
                //     'INSERT INTO product (name,description,category_id,parent_category_id,brand_id,sku,price,discount,quantity_in_stock,weight,dimensions,color,size,material,is_featured,is_active,images_urls) VALUES (?,?,?, ?, ?, ?, ?,?, ?, ?, ?, ?,?, ?, ?, ?, ? )',
                //     [name, description, parent_category_id, category_id, brand_id, sku, price, discount, quantity_in_stock, weight, dimensions, color, size, material, is_featured, is_active, imageUrlsString]
                // );

                // console.log(result)
                // const imageUrlsdb = imageUrlsString.split(',').map(url => url.trim());
                // const insertedId = result[0].insertId
                // console.log(insertedId)
                // for (const imageUrl of imageUrlsdb) {
                //     await db.execute('INSERT INTO images (product_id, image_url) VALUES (?, ?)', [insertedId, imageUrl]);
                //     console.log("test")
                // }
                // return res.status(200).json({ message: 'Product added successfully!', productId: insertedId });
                // // Save product data in the database





                const file = files.images
                async function uploadFiles(files) {
                    const uploadPromises = files.map(file =>
                        cloudinary.uploader.upload(file.filepath, {
                            use_filename: true,
                        })
                    );


                    // Wait for all images to upload
                    const results = await Promise.all(uploadPromises);
                    const urls = results.map(result => result.secure_url);
                    imageUrls = urls
                    console.log(urls)
                    const oldUrls = await db.execute(
                        'SELECT images_urls FROM product WHERE product_id = ?',
                        [id]
                    )
                    console.log('imagesurls', imageUrls)
                    console.log('oldurls', oldUrls)


                    const imageUrlsdb = imageUrls.map(url => url.trim());

                    for (const imageUrl of imageUrlsdb) {
                        await db.execute('INSERT INTO images (product_id, image_url) VALUES (?, ?)', [id, imageUrl]);
                        console.log("test")
                    }


                    imageUrls.push(oldUrls[0][0].images_urls)

                    const imagefinals = imageUrls.join(',')
                    console.log("images finales", imagefinals)

                    await db.query(
                        `UPDATE product 
                             SET 
                                 is_active = ?,
                                 is_featured = ?,
                                 material = ?,
                                 dimensions = ?,
                                 size = ?,
                                 color = ?,
                                 weight = ?,
                                 discount = ?,
                                 sku = ?,
                                 parent_category_id = ?,
                                 category_id = ?,
                                 brand_id = ?,
                                 name = ?,
                                 description = ?,
                                 price = ?,
                                 quantity_in_stock = ?,
                                 images_urls = CASE 
                                     WHEN RIGHT(?, 1) = ',' THEN LEFT(?, LENGTH(?) - 1) 
                                     ELSE ? 
                                 END
                             WHERE 
                                 product_id = ?`,
                        [
                            is_active,
                            is_featured,
                            material,
                            dimensions,
                            size,
                            color,
                            weight,
                            discount,
                            sku,
                            parent_category_id,
                            category_id,
                            brand_id,
                            name,
                            description,
                            price,
                            quantity_in_stock,
                            imagefinals,  // Used to check the last character
                            imagefinals,  // Used if the last character is a comma
                            imagefinals,  // Used to get the length without the last character
                            imagefinals,  // Used as the default value if no trailing comma
                            id            // product_id for the WHERE clause
                        ]
                    );

                    res.status(200).json({ message: 'Product updated successfully' });




                }




                if (files && files.images && files.images.length > 0) {
                    uploadFiles(file)
                }
            } catch (error) {
                console.error('Database insert error:', error);
                return res.status(500).json({ message: 'Error adding product to database.' });
            }
            finally {
                if (connection) connection.release()
            }
        });


    } else if (req.method === 'DELETE') {
        try {
            await db.execute('DELETE FROM product WHERE product_id = ?', [id]);
            res.status(200).json({ message: 'Product deleted successfully' });




            // Now, delete the product entirely





        } catch (error) {
            console.error('Error deleting product:', error);
            res.status(500).json({ error: 'Error deleting product' });
        }
        finally {
            // Ensure the database connection is closed
            if (connection) connection.release()
        }
    }
    else if (req.method === 'GET') {
        try {
            const product = await db.execute('SELECT * FROM product WHERE product_id = ?', [id]);
            res.status(200).json({ product });

        } catch (error) {
            console.error('Error deleting product:', error);
            res.status(500).json({ error: 'Error deleting product' });
        }
        finally {
            // Ensure the database connection is closed
            if (connection) connection.release()
        }
    } else {
        res.setHeader('Allow', ['PUT', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);

    }
}