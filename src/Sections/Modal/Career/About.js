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
                <Text >안녕하세요 문제해결을 즐기는 개발자 김제주 ( 김건휘 ) 입니다.</Text>
                <Text >주로 서버개발 및 인프라 구축, 웹 프론트엔드, 운영 배포 쪽의 업무를 맡고 있습니다. </Text>
                <br/>
                <Text >
                    개발 프로젝트를 진행하며 요구사항분석, 문제정의, 기능개발, 기술 블로깅 등 다양한 업무를 수행하였고
                    이 과정들을 통해서 프로그래밍 사고 역량과 요구사항파악 및 문제정의, 해결 능력을 발전시킬 수 있었습니다. <br /> 
                </Text>
                <br/>
                <Text >
                이 강점으로 react와 .net framework를 통해 게임운영툴 API 및 웹페이지 작업을 하여 퍼블리싱 협업사에
                보다 편리한 게임 운영 서비스를 제공하여  협업사의 요구사항을 충족 및 문제해결한 경험를 만들었습니다.
                </Text>
            </TextContainer>
        </Container>
    )
}

export default About