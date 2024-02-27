
"use client";
import { client } from '../../lib/client';

export default async function handler(req, res) {
  try {
    const categoryQuery = '*[_type =="category"]';
    const categories = await client.fetch(categoryQuery);

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    res.status(200).json({ categories, bannerData });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
}