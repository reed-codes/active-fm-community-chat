import React, {useState ,useContext} from 'react'
import {SectionHeader, Paragraph, LineDivider} from '../styles/style-utils'
import {ThemeContext} from '../state/ThemeProvider'

const about = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState( Boolean(theme == "dark")  );
  
  return (
    <section>

      <SectionHeader theme = {theme}>
              The Active FM story
      </SectionHeader>


       <div className = "row">
                <div className = "col-md-12">

                    <iframe style = {{
                                width:'100%',
                                height: 350,  
                                minHeight: 400,  
                                background:'#000'
                              }}
                                src="https://www.youtube.com/embed/SpBWwmShVFs" 
                                title="YouTube video player"
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullscreen
                            />

                </div>

                <div className = "col-sm-12">

                                 <LineDivider/>

                       <div className = "row">
                           
                              <div className = "col-sm-6">
                                

                                    <Paragraph theme = {theme}>
                                    Active Fm is an online radio station operating from the South of Johannesburg. We started out, initially, by launching a 1 hour show per week on the SoundCloud platform round 2010.The station expanded in August 2016 to produce 3 shows a day, 5 days a week and since then we have expanded to broadcasting 5 shows, 5 days a week. We have a great variety of shows from sports shows, trending shows, astronomy, comedy, love, poetry, movies and so much more.
                                    </Paragraph>


                              </div>
                           
                              <div className = "col-sm-6">

                                    <Paragraph theme = {theme}>
                                    While there are thousands of different radio stations to choose from throughout the world, I realised that there was something missing... There wasn't a proper market for Christians or for people who just want to get told the truth, receive the best advice and listen to clean shows, free of perversity and negativity.Most secular media stations promote the messages they want you to hear with the aim of shaping your thinking in a certain way, thus we are generally either getting told lies or we are only hearing part of the truth.
                                    </Paragraph>
                                      
                              </div>
                           
                              <div className = "col-sm-12">

                                  <Paragraph theme = {theme}>
                                  I realised there was a need for a platform where the truth, and what's really going on, is spoken about and revealed. While there are a substantial amount of radio stations out there, Active Fm is extremely unique.We talk about handling day to day obstacles, learning to feel better about yourself, enjoying life, what is going on in the world and how it affects us. We also expose people to amazing music that they never knew existed, and the best part is that it's COMPLETELY FREE MUSIC!.
                                  </Paragraph>
                                    
                              </div>

                       </div>

                </div>



       </div>


      
    </section>
  )
}

export default about
