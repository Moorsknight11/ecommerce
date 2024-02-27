
"use client";
import { client } from '../../lib/client';

export default async function handler(req, res) {
    console.log(req)
try {
    // Fetch products from Sanity based on the searched name
    const products = await client.fetch(`*[_type in ["product", "mattress", "chair", "bed", "bedroomset", "diningset", "jatifurniture", "multiplepurposes", "officetable", "sofa", "sofabed", "tvcabinet"] && name match "${req.body.query}*"]`);
console.log(products)
    res.json(products);
} catch (error) {
    console.error('Error fetching products from Sanity:', error);
    res.status(500).json({ error: 'Internal server error' });
}
}