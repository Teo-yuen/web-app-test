import { User } from './../../tying.d';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getUsers } from '../../services/GraphService';



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {

  const users =    await getUsers();
  res.status(200).json(users);
}
