import React, {useState ,useContext} from 'react'
import {Footer, Paragraph} from '../styles/style-utils'
import SocialMediaLinksGroup from './SocialMediaLinksGroup'
import { ThemeContext } from '../state/ThemeProvider'
import { useMediaQuery, Button } from "@material-ui/core";

const FooterSection = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const [darkMode, setDarkMode] = useState( Boolean(theme == "dark")  );
    const maxWidth900px = useMediaQuery("(max-width:900px)");
    
    return (
        <>
<Footer>

<div className = 'row' style = {{
                         paddingBottom : maxWidth900px ? 170 : 0
                       }}>
      
       <div className = 'col-md-8'>

        <Paragraph>
           <span style = {{display : "block"}}> <b>Tel :</b> +27 11 524 2000 </span>
           <span style = {{display : "block"}}> <b>Email :</b> example@gmail.com </span>
           <span style = {{display : "block"}}> <b>Address :</b> Golfview Office Park, 3 Pressburg Road, South Africa </span>
        </Paragraph>

          <SocialMediaLinksGroup darkTheme = {darkMode} />

     </div>
      
       <div className = 'col-md-4'
             style = {{
                 background: `url("./logo.png")`,
                 backgroundSize:'contain',
                 backgroundPosition:'right',
                 backgroundRepeat:'no-repeat'
             }}
             >

        </div>
    
</div>

<br/>

<div className="text-center">
      <small> Copyright © {new Date().getFullYear()} Active FM. All rights reserved</small>
</div>


</Footer>



        </>
    )
}

export default FooterSection
