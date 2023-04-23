import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from '../styles/MovieCard.module.css'

const MovieCard = ({movieName,movieImage,movieScore,movieId}) => {
  return (
    <Link href={`/movie/${movieId}`} className={style.movieCard}>
      <p className={style.title}>{movieName}</p>
      
      <div className={style.score}>{movieScore}</div>
    </Link>
  )
}

export default MovieCard