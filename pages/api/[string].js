// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export  default async function handler(req, res) {

  const {string} = req.query
  
  let query = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${string}`
  
  const data = await fetch(query)
  const result = await data.json()

  res.json(result)
}
