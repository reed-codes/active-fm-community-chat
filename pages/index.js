import {useContext} from 'react'
import BannerSlider from '../components/BannerSlider'
import ShowSchedule from '../components/ShowSchedule'
import ShowCard from '../components/ShowCard'
import {SectionHeader} from '../styles/style-utils'
import {ThemeContext} from '../state/ThemeProvider'


const Home = () => {
   const {theme} = useContext(ThemeContext);

    return (
      <>

                     <SectionHeader className = "section-header" theme = {theme}>
                            RECENTLY PLAYED
                     </SectionHeader>
            
                     <BannerSlider/>
                    
                     <SectionHeader className = "section-header" theme = {theme}>
                            RECENTLY PLAYED
                     </SectionHeader>

                   
                     <div className = "shows-scrollable-row no-scroll">
                         <ShowCard/>
                         <ShowCard/>
                         <ShowCard/>
                         <ShowCard/>
                         <ShowCard/>
                     </div>
                    
                     <SectionHeader className = "section-header"  theme = {theme}>
                            RECENTLY PLAYED
                     </SectionHeader>

                   
                     <div className = "shows-scrollable-row no-scroll">
                         <ShowCard/>
                         <ShowCard/>
                         <ShowCard/>
                         <ShowCard/>
                         <ShowCard/>
                     </div>
                    
                     <SectionHeader className = "section-header" theme = {theme}>
                            RECENTLY PLAYED
                     </SectionHeader>

                   
                     <div className = "shows-scrollable-row no-scroll">
                         <ShowCard/>
                         <ShowCard/>
                         <ShowCard/>
                         <ShowCard/>
                         <ShowCard/>
                     </div>


                     <SectionHeader className = "section-header" theme = {theme}>
                                SCHEDULE
                    </SectionHeader>

                

                    <ShowSchedule/>

</>
    )
}



export default Home


