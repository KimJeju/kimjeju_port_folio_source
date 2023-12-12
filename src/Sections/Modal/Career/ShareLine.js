import styled from "styled-components"

const Container = styled.div`
    border-bottom : 1px dashed white;
    padding : 5px;
    margin-bottom : 10px;
    color : white;
`

const Title = styled.span`
    font-weight : bold;
    font-size : 24px;
`


function ShareLine({title}){

    return(
        <Container>
            <Title>
            {title}
            </Title>
        </Container>
    )
}

export default ShareLine