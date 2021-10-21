import {useContext} from 'react'
import BannerSlider from '../components/BannerSlider'
import ShowSchedule from '../components/ShowSchedule'
import ShowCard from '../components/ShowCard'
import {SectionHeader} from '../styles/style-utils'
import {ThemeContext} from '../state/ThemeProvider'
import { ShowsContext } from '../state/ShowsContext'


const Home = () => {
   const {theme} = useContext(ThemeContext);
   const {shows} = useContext(ShowsContext)

    return (
      <>
            
                     <BannerSlider/>
                    
                     <SectionHeader className = "section-header" theme = {theme}>
                            TALK SHOWS
                     </SectionHeader>
                   
                     <div className = "shows-scrollable-row no-scroll">
                         {
                             shows.talkShows.map((show, index) => <ShowCard index = {index} show = {show}/>)
                         }
                     </div>


                     <SectionHeader className = "section-header" theme = {theme}>
                           MORNING SHOWS
                     </SectionHeader>
                   
                     <div className = "shows-scrollable-row no-scroll">
                         {
                             shows.morningShows.map((show, index) => <ShowCard index = {index} show = {show}/>)
                         }
                     </div>


                     <SectionHeader className = "section-header" theme = {theme}>
                            AFTERNOON SHOWS
                     </SectionHeader>
                   
                     <div className = "shows-scrollable-row no-scroll">
                         {
                             shows.afternoonShows.map((show, index) => <ShowCard index = {index} show = {show}/>)
                         }
                     </div>


                     <SectionHeader className = "section-header" theme = {theme}>
                           EVENING SHOWS
                     </SectionHeader>
                   
                     <div className = "shows-scrollable-row no-scroll">
                         {
                             shows.eveningShows.map((show, index) => <ShowCard index = {index} show = {show}/>)
                         }
                     </div>


                     <SectionHeader className = "section-header" theme = {theme}>
                            MUSIC SHOWS
                     </SectionHeader>
                   
                     <div className = "shows-scrollable-row no-scroll">
                         {
                             shows.musicShows.map((show, index) => <ShowCard index = {index} show = {show}/>)
                         }
                     </div>
                  
                     <SectionHeader className = "section-header" theme = {theme}>
                                SCHEDULE
                    </SectionHeader>

                

                    <ShowSchedule/>

</>
    )
}



export default Home


