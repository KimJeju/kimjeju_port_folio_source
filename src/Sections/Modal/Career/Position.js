import styled from "styled-components"
import CicleProgress from "./CicleProgress"
import ShareLine from "./ShareLine"


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

function Position() {

    return (
        <Container>
            <ShareLine title="Possible Postion" />
            <Range>
                <CicleProgress percent={100} title={"Back End"} color={"#F23D3D"} />
                <CicleProgress percent={80} title={"Fornt End"} color={"#F23D3D"}/>
                <CicleProgress percent={50} title={"DevOps"} color={"#F23D3D"}/>
            </Range>

        </Container>
    )
}

export default Position