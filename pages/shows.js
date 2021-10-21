import React, { useEffect, useState } from 'react'
import ShowsCard from '../components/ShowCard'

const shows = () => {
    const [shows, setShows] = useState([]);

    useEffect(()=>{
         fetch('./shows.json')
         .then(( res ) => res.json())
         .then(( data ) => {
                 setShows( data )
                console.log(data)
                })
         .catch(( err )=> console.log(err.message))
    },[])

    
    return (
        <section className = 'd-flex flex-wrap justify-content-between'
                 style = {{
                     background: 'url(./img/Banner 1.jpg)',
                     height:200, 
                     width:200
                 }}
                 >
ererg
            {/* {
                shows.map((show, index)=>{
                        return <ShowsCard key = {index} show = {show}/>
                })
            } */}
          
        </section>
    )
}

export default shows
