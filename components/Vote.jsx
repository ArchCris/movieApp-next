import React from 'react'
import styles from '../styles/Vote.module.css'


const Vote = ({vote_average,vote_count}) => {
    console.log(vote_average)
  return (
    <div className={styles.voteConteiner}>
        <div>{vote_average<=4 ? <p className={styles.red}>{vote_average.split(0,1)}</p> : vote_average<=7 ? <p className={styles.yellow}>{vote_average}</p> : <p className={styles.green}>{vote_average}</p>}&nbsp;&nbsp;<p>Average points</p></div>
        <div>{vote_count}&nbsp;&nbsp;<p>Votes</p></div>
    </div>
  )
}

export default Vote