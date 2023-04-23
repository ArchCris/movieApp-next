import React from 'react'
import styles from "../../styles/DetailMovie.module.css"
import Image from 'next/image';

export const getServerSideProps = async (context) => {
    const id = context.query["id"];
    //Fetch movie details//
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`)
    const res = await data.json()
    //Return movie details//
    return {
      props: res
    };
};

const DetailMovie = (props) => {
  console.log(props.poster_path)
    
  return (
    <div className={styles.detailMovie}>
      <div className={styles.left}>
      {props.poster_path==null?<p>NO IMG</p>:
      <Image className={styles.image} src={`https://image.tmdb.org/t/p/original/${props.poster_path}`}
      alt='Movie poster'
      width={200}
      height={300}/>
      }
      </div>
      <div className={styles.right}>
        <p>{props.original_title}</p>
        <p>{props.overview}</p>
      </div>
    </div>
  )
}

export default DetailMovie