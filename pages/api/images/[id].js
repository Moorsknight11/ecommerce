import db from '../../../lib/db'; // Adjust the import based on your db setup

export default async function handler(req, res) {
  const {
    query: { id }, // Assuming id is the image URL here
    method,
  } = req;

  if (method === 'DELETE') {
    try {
      // Fetch the product ID associated with the image URL
      const [imageData] = await db.execute('SELECT image_id FROM images WHERE image_url = ?', [id]);

      const productId = imageData[0]?.image_id;
      const [productData] = await db.execute('SELECT product_id FROM images WHERE image_url = ?', [id]);
      console.log('produtctidtrue',productData)
      const productIdTrue = productData[0]?.product_id;

      if (productId) {
        // Delete the image from the images table using its URL
       
        // Update the images_urls column in the product table
        const product = await db.execute('SELECT images_urls FROM product WHERE product_id = ?', [productIdTrue]);
        const updatedImageUrls = product[0][0]?.images_urls.split(',').filter(imageUrl => imageUrl.trim() !== id.trim()).join(',');
console.log("product",product)
        // Update the product's images_urls in the database
        await db.execute('UPDATE product SET images_urls = ? WHERE product_id = ?', [updatedImageUrls, productIdTrue]);
        await db.execute('DELETE FROM images WHERE image_id = ?', [productId]);

        return res.status(200).json({ message: 'Image deleted successfully' });
      } else {
        return res.status(404).json({ message: 'Image not found' });
      }
    } catch (error) {
      console.error('Error deleting image:', error);
      return res.status(500).json({ error: 'Error deleting image' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}