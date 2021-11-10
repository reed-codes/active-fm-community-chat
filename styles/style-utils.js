import styled from 'styled-components'

export const LineDivider = styled.div`
   margin:20px 0px;
   height:1px;
   background:rgba(0,0,0, .08);
   width:100%;
`

export const SectionHeader = styled.div`
position: relative;
font-size: 20px;
font-weight: 700;
color: ${({theme})=> ( theme == 'light' ) ? '#111' : '#fff'};
margin: 25px 0 25px 0;
cursor:default;
&::after{
   content: '';
   position: absolute;
   bottom:-10px;
   left: 0;
   height: 2px;
   width: 50px;
   background: #aa2329;
 }
`

export const SecondarySectionHeader = styled.div`
position: relative;
margin: 10px 0;
font-size: 17px;
font-weight: 700;
color: ${({theme})=> ( theme == 'light' ) ? '#111' : '#fff'};
margin: 15px 0 25px 0;
cursor:default;
`

export const Footer = styled.footer`
   padding:20px;
   width:100%;
   background:#000;
   color:#fff;
   border-top-left-radius:30px;
   border-top-right-radius:30px;
   font-size:13px
`

export const Paragraph = styled.div`
color: ${({theme})=> ( theme == 'light' ) ? '#111' : '#fff'};
cursor:default;
opacity:.8
` 