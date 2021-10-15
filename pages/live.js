import styled from "styled-components"


const LivePageContainer = styled.div`
height: 80vh ;
width: 100% ;
margin-bottom: 30px
`

const IframeWrapper = styled.div`
background:#000;
height:100%;
width:100%;
`


const live = () => {

    return (
<LivePageContainer>
<IframeWrapper>
            <iframe style = {{
                height:'100%',
                width:'100%',
                background:'url(./logo.png)',
                backgroundSize:120,
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center'
                }} 

                src="https://www.youtube.com/embed/live_stream?channel=UChNIUx19XJrIOm5UGYAqkYQ&autoplay=1"
                title="YouTube video player"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                allowFullscreen
                />

</IframeWrapper>
</LivePageContainer>
    )
}



export default live
