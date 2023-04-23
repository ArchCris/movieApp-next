import React from 'react'
import styles from '../styles/LiveSearch.module.css'
import { useState } from 'react'
const axios = require ('axios')
import Link from 'next/link'

const LiveSearch = () => {
  
  //States
  const[input,setInput]=useState('')
  const[foundMovies,setFoundMovies]=useState([])
  //Input handlesr
  const handleInput = (e) =>{
    let string = e.target.value
    setInput(string)
    if(string!=="" || string!==null){
      axios.get(`${process.env.NEXT_PUBLIC_FRONTEND_URL}api/${string}`).then(result=>{
      setFoundMovies(result.data.results)
    })
    }else{
      setFoundMovies([])
    }
  }
  const handleClick = () =>{
    setFoundMovies([])
    setInput('')
  }

  return (
    <div className={styles.liveSearch_conteiner}>
      <input value={input} className={styles.input} onChange={(e)=>{handleInput(e)}} type='text'></input>
      <ul className={styles.searchResults}>
        {foundMovies.splice(0,4).map((movie,key)=>{
          return(
            <Link onClick={()=>handleClick()} key={key} href={`/movie/${movie.id}`}><li>{movie.title}</li></Link>
          )
        })}
      </ul>
    </div>
  )
}

export default LiveSearch