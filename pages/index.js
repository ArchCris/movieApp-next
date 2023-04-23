import MovieCard from "@/components/MovieCard"
import styles from "../styles/Home.module.css"

export async function getServerSideProps(context) {
  try{
    let query = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
    const data = await fetch(query)
    const res = await data.json()
    return {
      props: {res}
    }
  } catch(err){
    console.log(err)
  }
}

export default function Home(props) {

  const popularMovies = props.res.results

  return (
      <main className={styles.homeContainer}>
        {popularMovies.map((movie,key)=>{
          return(
            <MovieCard key={key} movieName={movie.title} movieImage={movie.poster_path} movieScore={movie.vote_average} movieId={movie.id}/>
          )
        })}
      </main>
  )
}
