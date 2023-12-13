import styled from "styled-components"
import CicleProgress from "./CicleProgress"
import ShareLine from "../../../Share/ShareLine"


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
flex-flow: row wrap;
line-height : 1;

`

function Stack() {

    return (
        <Container>
            <ShareLine title="My Stacks" />
            <Range>
                <CicleProgress percent={80} title={"C#"} color={"#240F85"} />
                <CicleProgress percent={90} title={"Python"} color={"#0079FA"}/>
                <CicleProgress percent={90} title={"JavaScript"} color={"#F5CF01"}/>
                <CicleProgress percent={60} title={"Net Framework"} color={"#240F85"}/>
                <CicleProgress percent={80} title={"DJango"} color={"#005C53"}/>
                <CicleProgress percent={95} title={"React"} color={"#05AFFA"}/>
                <CicleProgress percent={90} title={"Git"} color={"#F0654D"}/>
                <CicleProgress percent={40} title={"AWS"} color={"#F09E4D"}/>

            </Range>

        </Container>
    )
}

export default Stack