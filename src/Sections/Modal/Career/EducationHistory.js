import styled from "styled-components";
import ShareLine from "../../../Share/ShareLine";
import TimeLine from "../../../Share/TimeLine";
import EducationTimeLine from "../../../Share/EducationTimeLine";


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

function EducationHistory(){

    return(
        <>
         <ShareLine title={"Education History"} />
         <EducationTimeLine />
        </>
    )
}

export default EducationHistory;