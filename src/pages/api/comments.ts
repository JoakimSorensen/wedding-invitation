// pages/api/comments.ts
import { MongoClient, Db } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next'

let cachedDb: Db | null = null;

async function connectToDatabase(uri: string) {
  if (cachedDb) return cachedDb;

  const client = await MongoClient.connect(uri);
  const db = client.db('wedding_invitation');
  cachedDb = db;
  return db;
}

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
    const { name, content } = req.body as { name: string; content: string }
    const db = await connectToDatabase(process.env.MONGODB_URI);
    const collection = db.collection('comments');
    const result = await collection.insertOne({ name, content, createdAt: new Date() });

    res.status(200).json({ message: 'Comment saved successfully' })
  } else if (req.method === 'GET') {
    try {
    const db = await connectToDatabase(process.env.MONGODB_URI);
    const collection = db.collection('comments');
    const comments = await collection.find({}).sort({ createdAt: -1 }).toArray();
      res.status(200).json(comments)
    } catch (error) {
      res.status(500).json({"message": `[ERROR]: ${error}`});
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
