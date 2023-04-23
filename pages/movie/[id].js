import React from 'react'
import styles from "../../styles/Home.module.css"

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
    
  return (
    <div className={styles.homeContainer}>
        {props.overview}
    </div>
  )
}

export default DetailMovie