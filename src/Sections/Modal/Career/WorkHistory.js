import styled from "styled-components";
import PersonalTimeLine from "../../../Share/PersonalTimeLine";
import ShareLine from "../../../Share/ShareLine";
import TimeLine from "../../../Share/TimeLine";


const Container = styled.div`
    font-family: WantedSans-Regular;
    margin-top : 40px;
    font-size : 16px;
    padding : 5px;

    @media only screen and (max-width: 800px) {
        width: 22rem;
        flex-direction : column;
    }
   
`

const Range = styled.div`
display : flex;
flex-derection : row;
justify-content : space-around;
`

function WorkHistory(){

    return(
        <Container>
         <ShareLine title={"Work History"} />
         <TimeLine />
         <ShareLine title={"Personal Porject"} />
        <PersonalTimeLine />
        </Container>
    )
}

export default WorkHistory;