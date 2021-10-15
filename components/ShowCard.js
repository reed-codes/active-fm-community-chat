import { useContext, useState } from 'react'
import styled from 'styled-components'
import {ThemeContext} from '../state/ThemeProvider'

const ShowCardWrapper = styled.a`
width:200px;
min-width:200px;
margin-right:15px;
margin-bottom:30px;
transition: all .3s;
padding:10px;
background : rgba(0,0,0,.05);
color:#ddd;
&:hover{
    color : #aa2329;
    background : rgba(0,0,0,.3)
}
`
const ShowCardTitle = styled.div`
   color : ${ ( {darkMode} ) => darkMode ? '#fff' : '#111'};
`
const ShowCardDescription = styled.div`
   color : ${ ( {darkMode} ) => darkMode ? '#eee' : '#111' };
   font-size : 13px;
   opacity :.5
`

export const ShowCard = ()=>{
    const {theme, setTheme} = useContext(ThemeContext);
    const darkMode = Boolean(theme == "dark")

    console.log(darkMode)

    return (
       <ShowCardWrapper href = "">
                   <img style = {{
                       height:160,
                       width:'100%',
                       marginBottom:10,
                       objectFit:'cover'
                   }}
                   src = './img-1.jpg'
                   alt = "show name"
                   />
                   
                   <ShowCardTitle darkMode = {darkMode}>
                       Keeping Up With The Reedemers
                   </ShowCardTitle>

                   <ShowCardDescription theme = {theme} darkMode = {darkMode}>  
                   The Active Church is a biblically-based church that focuses on...
                  </ShowCardDescription> 

       </ShowCardWrapper> 
    )

}

export default ShowCard