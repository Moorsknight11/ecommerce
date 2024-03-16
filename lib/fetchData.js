
import { client } from '../client';

export default async function handler(req, res) {
  try {
    const productQuery = '*[_type == "product"]';
    const products = await client.fetch(productQuery);

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    res.status(200).json({ products, bannerData });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
}