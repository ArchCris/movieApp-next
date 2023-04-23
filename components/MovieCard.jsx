import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from '../styles/MovieCard.module.css'

const MovieCard = ({movieName,movieImage,movieScore,movieId}) => {
  return (
    <Link href={`/movie/${movieId}`} className={style.movieCard}>
      <p className={style.title}>{movieName}</p>
      <Image className={style.image} src={`https://image.tmdb.org/t/p/original/${movieImage}`}
      alt='Movie poster'
      width={200}
      height={300}/>
      <div className={style.score}>{movieScore}</div>
    </Link>
  )
}

export default MovieCard