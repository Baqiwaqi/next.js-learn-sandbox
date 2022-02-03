import { articles } from '../../../data'

// get all articles
export default function handler(req, res) {
  res.status(200).json(articles);
}


