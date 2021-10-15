import styled from "styled-components"


const DayRow = styled.div`
height: 30px;
width: 100px;
background: goldenrod;
display: flex
`
const Schedule  = styled.div`
height: 415px;
width: 100%;
background: #222;
overflow: auto;
display: flex;
transform: translate(0; 0);
position: relative;
margin-bottom:50px
`
const DayHead = styled.div`
font-weight: 700;
width: 180px;
min-width: 180px;
height: 100%;
background: #171c1f;
display: flex;
justify-content: center;
align-items: center;
cursor: default;
user-select: none;
margin-right: 3px;
color:#fff
`

const TimeLabel = styled.div`
font-weight: 700;
height: 70px;
width: 100%;
background: #171c1f;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 3px;
cursor: default;
user-select: none;
color:#fff
`

const TopLeftCornerChip = styled.div`
height: 30px;
width: 100%;
background: #000;
display: flex;
justify-content: center;
align-items: center;
`


const TimeSlotsColumn = styled.div`
height:  100% ;
width: 50px;
min-width: 50px;
background:  #000 ;
box-shadow: 10px 3px 20px rgba(0,0,0,.5) ;
z-index:1000;
left: 0;
top: 0;
`

const ScheduledShowsColumnWrapper = styled.div`
display: flex;
width: 100%;
`

const ScheduledShowsColumn = styled.div`
background: #000;
margin-right: 3px;
width: fit-content;
`


const TIME_SLOTS = ["06:00", "10:00", "12:00", "16:00", "18:00"];
const DAYS = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"];

const ShowSchedule = () => {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
      }}
    >
      
      <TimeSlotsColumn>

            <TopLeftCornerChip/>

            {TIME_SLOTS.map((time, index) => {
              return (<TimeLabel key = {String(index)}>
                        {time}
                    </TimeLabel>)
            })}

      </TimeSlotsColumn>

                  <Schedule>
                    <div
                      style={{
                        height: "100%",
                        width: "100%",
                        background: "#222",
                      }}
                    >
                      <DayRow>
                        {DAYS.map((day, index) => {
                          return <DayHead key = {String(index)}>{day}</DayHead>;
                        })}
                      </DayRow>

                      <ScheduledShowsColumnWrapper>
                        <ScheduledShowsColumn>
                          <ScheduleShowItem />
                          <ScheduleShowItem />
                          <ScheduleShowItem />
                        </ScheduledShowsColumn>

                        <ScheduledShowsColumn>
                          <ScheduleShowItem />
                          <ScheduleShowItem />
                          <ScheduleShowItem />
                        </ScheduledShowsColumn>

                        <ScheduledShowsColumn>
                          <ScheduleShowItem />
                          <ScheduleShowItem />
                          <ScheduleShowItem />
                        </ScheduledShowsColumn>
                      </ScheduledShowsColumnWrapper>
                    </div>
                  </Schedule>

    </div>
  );
};

export default ShowSchedule;



const ScheduledShowItemWrapper = styled.div`
height: 70px;
width: 180px;
min-width: 180px;
background: #aa2329;
padding: 10px;
margin-bottom: 3px;
cursor: pointer;
`

const ScheduledShowItemInnerWrapper = styled.div`
height: 100%;
width: 100%;
background: #fff;
padding: 5;
`

const ScheduledItemTitle = styled.div`
color: #fff;
font-weight: 700;
background: #171c1f;
margin-bottom: 3px;
padding: 5px;
`

const ScheduleShowItem = () => {
  return (
    <ScheduledShowItemWrapper>

      <ScheduledShowItemInnerWrapper>
        <ScheduledItemTitle>All Things Girl</ScheduledItemTitle>
      </ScheduledShowItemInnerWrapper>

    </ScheduledShowItemWrapper>
  );
};

