// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getUserDetails } from '../../../services/GraphService';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { userId } = req.query;
  const temp = userId! as string;
  const users = await getUserDetails(temp);
  res.status(200).json({ users });

}
