import React from 'react'

export const getServerSideProps = async (context) => {
    var id = context.query["id"];
  console.log(id)
    // In this example, we might call a database or an API with given ID from the query parameters
    // I'll call a fake API to get the players name from a fake database
    const res = await fetch(`https://baseball.com/api/getTeamFromPlayerId/${id}`);
    const team = await res;
  
    // Return the ID to the component
    return {
      props: {
        id:id,
      },
    };
  };
  

const index = (props) => {
    console.log()
  return (
    <div>index</div>
  )
}

export default index