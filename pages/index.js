import {useContext} from 'react'
import BannerSlider from '../components/BannerSlider'
import ShowSchedule from '../components/ShowSchedule'
import ShowCard from '../components/ShowCard'
import {SectionHeader} from '../styles/style-utils'
import {ThemeContext} from '../state/ThemeProvider'
import { ShowsContext } from '../state/ShowsContext'
import styled from 'styled-components'

const ParallaxImage = styled.div`
height:100px;
width:100px;
background:red;
position: absolute;
top: ${({top})=> top};
z-index: 0;
transform: rotate(45deg);
background: url(${({img})=> img}) ;
background-attachment:fixed;
filter: brightness(30%)
`


const Home = () => {
   const {theme} = useContext(ThemeContext);
   const {shows} = useContext(ShowsContext)

    return (
      <>
            
                     <BannerSlider/>
                    
                     <SectionHeader className = "section-header" theme = {theme}>
                            TALK SHOWS
                     </SectionHeader>
                   
                     <div className = "shows-scrollable-row">
                         {
                             shows.talkShows.map((show, index) => <ShowCard index = {index} show = {show}/>)
                         }
                     </div>





                     <SectionHeader className = "section-header" theme = {theme}>
                           MORNING SHOWS
                     </SectionHeader>
                   
                     <div className = "shows-scrollable-row">
                         {
                             shows.morningShows.map((show, index) => <ShowCard index = {index} show = {show}/>)
                         }
                     </div>




                     <SectionHeader className = "section-header" theme = {theme}>
                            AFTERNOON SHOWS
                     </SectionHeader>

                   
                     <div className = "shows-scrollable-row">
                         {
                             shows.afternoonShows.map((show, index) => <ShowCard index = {index} show = {show}/>)
                         }
                     </div>





                     <SectionHeader className = "section-header" theme = {theme}>
                           EVENING SHOWS
                     </SectionHeader>
                   
                     <div className = "shows-scrollable-row">
                         {
                             shows.eveningShows.map((show, index) => <ShowCard index = {index} show = {show}/>)
                         }
                     </div>





                     <SectionHeader className = "section-header" theme = {theme}>
                            MUSIC SHOWS
                     </SectionHeader>
                   
                     <div className = "shows-scrollable-row">
                         {
                             shows.musicShows.map((show, index) => <ShowCard index = {index} show = {show}/>)
                         }
                     </div>
                     



                    <SectionHeader className = "section-header" theme = {theme}>
                                SCHEDULE
                    </SectionHeader>

                    <ShowSchedule/>


  
                    <ParallaxImage img = {'./img-2.jpg'} 
                                    top = {'20%'}
                                    style = {{
                                        right : '5%'
                                    }}
                                    />

                    <ParallaxImage img = {'./img-3.jpg'} 
                                    top = {'40%'}
                                    style = {{
                                        left : '5%'
                                    }}
                                    />

                    <ParallaxImage img = {'./img-1.jpg'} 
                                    top = {'60%'}
                                    style = {{
                                        right : '10%'
                                    }}
                                    />

                    <ParallaxImage img = {'./img-4.jpg'} 
                                    top = {'80%'}
                                    style = {{
                                        right : '25%'
                                    }}
                                    />
                                    

</>
    )
}



export default Home


