import type { NextApiRequest, NextApiResponse } from 'next';
import generate_embeddings from '../../../defer/generate-embeddings';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { segments } = req.body;
    const resultList = await generate_embeddings(segments);
    res.status(200).json(resultList);
  } catch (e) {
    res.status(500).json(e);
  }
}
