// pages/api/comments.js or app/api/comments/route.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Handle saving the comment
    const { author, content } = req.body;

    // Here you would typically save to a database
    // For this example, we'll just log it
    console.log(`New comment from ${author}: ${content}`);

    res.status(200).json({ message: 'Comment saved successfully' });
  } else if (req.method === 'GET') {
    // Handle retrieving comments
    // For this example, we'll return dummy data
    const comments = [
      { id: 1, author: 'Alice', content: 'Great post!' },
      { id: 2, author: 'Bob', content: 'Thanks for sharing.' }
    ];

    res.status(200).json(comments);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
