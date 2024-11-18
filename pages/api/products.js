// pages/api/products.js
import { IncomingForm } from 'formidable';
import { v2 as cloudinary } from 'cloudinary';
import db from '../../lib/db';


export const config = {
    api: {
        bodyParser: false, // Disable body parsing for file uploads
    },
};
//const uploadDir = path.resolve('./public/uploads'); // Use path.resolve for absolute path
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
const productsHandler = async (req, res) => {
    let connection;
    connection = await db.getConnection();
    if (req.method === 'POST') {
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
            let { name, description, category_id, parent_category_id, brand_id, sku, price, discount, quantity_in_stock, weight, dimensions, color, size, material, is_featured, is_active } = fields;
            let imageUrls
            if (is_featured === true) { is_featured = 1 }

            else {
                is_featured = 0
            }
            if (is_active === true) { is_active = 1 }

            else {
                is_active = 0
            }
if(!parent_category_id){
                        parent_category_id=1000
                    }
            // Process images
            try {
                console.log(files)
               
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
                        ; // Each result will contain Cloudinary response data for each upload


                    ; // Adjust this based on your input name

                    const imageUrlsString = imageUrls.join(','); // Join URLs if storing multiple
                    
                    const result = await db.query(
                        'INSERT INTO product (name,description,category_id,parent_category_id,brand_id,sku,price,discount,quantity_in_stock,weight,dimensions,color,size,material,is_featured,is_active,images_urls) VALUES (?,?,?, ?, ?, ?, ?,?, ?, ?, ?, ?,?, ?, ?, ?, ? )',
                        [name, description, parent_category_id, category_id, brand_id, sku, price, discount, quantity_in_stock, weight, dimensions, color, size, material, parseInt(is_featured), parseInt(is_active), imageUrlsString]
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
                }
                uploadFiles(file)
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
