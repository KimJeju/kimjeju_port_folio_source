import styled from "styled-components";
import ShareLine from "../../../Share/ShareLine";


const Container = styled.div`
    font-family: WantedSans-Regular;
    margin-top : 40px;
    font-size : 16px;
    font-weight : 100;
    padding : 5px;

    @media only screen and (max-width: 800px) {
        width: 22rem;
        flex-direction : column;
    }

`

const TextContainer = styled.div`
    color : white;
`

const Text = styled.p`
    line-height : 1.5;
`



function About() {

    return (
        <Container>
            <ShareLine title= {"About Me"}/>
            <TextContainer>
                <Text >안녕하세요 코드 첨삭을 즐기는 개발자 김제주 ( 김건휘 ) 입니다.</Text>
                <Text >주로 서버개발 및 인프라 구축, 웹 프론트엔드, 운영 배포 쪽의 업무를 맡고 있습니다. </Text>
                <Text >저는 작성한 코드를 첨삭하는 과정에서 더 나은 가독성 및  생산성을 확보하는 작업을 즐기며 <br />개발을 하고 있습니다!</Text>
                <Text >저에 대해 궁금하시다면 언제든 연락주세요 ! </Text>
            </TextContainer>
        </Container>
    )
}

export default About