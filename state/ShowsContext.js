import { createContext, useState, useEffect } from "react";

export const ShowsContext = createContext([])

export const ShowsProvider = ({children}) => {
    const [shows, setShows] = useState({
        allShows : [],
        talkShows : [],
        afternoonShows : [],
        eveningShows : [],
        morningShows : [],
        musicShows : []
    });

    useEffect(()=>{
         fetch('./shows.json')
         .then(( res ) => res.json())
         .then(( data ) => {
                 const talkShows = data.filter((show)=> show.category == "afternoon-shows");
                 const afternoonShows = data.filter((show)=> show.category == "talk-shows")
                 const eveningShows = data.filter((show)=> show.category == "evening-shows")
                 const morningShows = data.filter((show)=> show.category == "morning-shows")
                 const musicShows = data.filter((show)=> show.category == "music-shows")
                 
                 setShows({
                     allShows : data,
                     talkShows,
                     afternoonShows,
                     eveningShows,
                     morningShows,
                     musicShows
                 }) 
                 
                })
         .catch(( err )=> console.log(err.message))
    },[])

    const payload = {
        shows,
        setShows
    }

    return (
        <ShowsContext.Provider value={payload}>
               {children}
        </ShowsContext.Provider>
    )
}

export default ShowsProvider





