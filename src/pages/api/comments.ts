// pages/api/comments.ts

import type { NextApiRequest, NextApiResponse } from 'next'

type Comment = {
  id: number
  author: string
  content: string
}

type ResponseData = {
  message: string
} | Comment[]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    // Handle saving the comment
    const { author, content } = req.body as { author: string; content: string }

    // Here you would typically save to a database
    // For this example, we'll just log it
    console.log(`New comment from ${author}: ${content}`)

    res.status(200).json({ message: 'Comment saved successfully' })
  } else if (req.method === 'GET') {
    // Handle retrieving comments
    // For this example, we'll return dummy data
    const comments: Comment[] = [
      { id: 1, author: 'Alice', content: 'Great post!' },
      { id: 2, author: 'Bob', content: 'Thanks for sharing.' }
    ]

    res.status(200).json(comments)
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
