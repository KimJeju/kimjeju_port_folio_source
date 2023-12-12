import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
import styled from "styled-components";


const Container = styled.div`
    width : 100px;
    height : 120px;
    text-align : center;
    margin : 5px;
`

const Text = styled.p`
    color : white;
    font-weight : 100;
    font-size : 18px;
`



function CicleProgress({percent, title, color}) {

    return (
        <Container>

            <CircularProgressBar
                animationSmooth="1s ease-out"
                colorCircle="#f1f1f1"
                colorSlice ={color}
                percent={percent}
                size={100}
                fontColor={"#FFFFFF"}
            />
            <Text>{title}</Text>
        </Container>
    )

}

export default CicleProgress