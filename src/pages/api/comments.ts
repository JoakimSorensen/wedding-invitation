// pages/api/comments.ts
import type { NextApiRequest, NextApiResponse } from 'next'

const fs = require('fs');
const path = require('path');

type Comment = {
  id: number;
  name: string;
  content: string;
}

type ResponseData = {
  message: string
} | Comment[]

let commentsPath = path.join(process.cwd(), './src/comments.json');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    // Handle saving the comment
    const commentsRaw = await fs.readFileSync(commentsPath);
    const comments: Comment[] = JSON.parse(commentsRaw);
    let curId = 1;
    comments.forEach((c:Comment)=>{
      if (curId === c.id) {
        curId += 1;
      }
      return;
    });

    const { name, content } = req.body as { name: string; content: string }
    const newComment = {id: curId, name, content};
    comments.push(newComment);

    fs.writeFileSync('./src/comments.json', JSON.stringify(comments));

    res.status(200).json({ message: 'Comment saved successfully' })
  } else if (req.method === 'GET') {
    try {
    // just use file, please forgive me
    const commentsRaw = await fs.readFileSync(commentsPath);
    const comments: Comment[] = JSON.parse(commentsRaw);

      res.status(200).json(comments)
    } catch (error) {
      res.status(500).json({"message": `[ERROR]: ${error}`});
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
