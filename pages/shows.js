import React, { useContext } from 'react'
import ShowsCard from '../components/ShowCard'
import { ShowsContext } from '../state/ShowsContext'

const shows = () => {
    const {shows} = useContext(ShowsContext)
    
    return (
        <section className = 'd-flex flex-wrap justify-content-between'>
            {
                shows.allShows.map((show, index)=> <ShowsCard key = {index} show = {show}/> )
            }
        </section>
    )
}

export default shows
