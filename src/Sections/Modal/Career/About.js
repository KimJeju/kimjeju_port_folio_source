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
            <ShareLine title={"About Me"} />
            <TextContainer>
                <Text >안녕하세요 문제해결을 즐기는 개발자  김건휘  입니다.</Text>
                <Text >주로 서버개발 및 인프라 구축, 웹 프론트엔드, 운영 배포 쪽의 업무를 맡고 있습니다. </Text>
                <br />
                <Text >
                    개발 프로젝트를 진행하며 요구사항분석, 문제정의, 기능개발, 기술 블로깅 등 다양한 업무를 수행하였고
                    이 과정들을 통해서 프로그래밍 사고 역량과 요구사항파악 및 문제정의, 해결 능력을 발전시킬 수 있었습니다. <br />
                </Text>
                <br />
                <Text >
                    이 강점으로 React와 .Net 6.0를 통해 게임운영툴 API 및 운영 대시보드 제작 작업을 담당 하여
                    퍼블리싱 협업사에 보다 편리한 게임 운영 서비스를 제공하여 협업사의 요구사항을 충족 및 문제해결한 경험을 만들었습니다.
                    이는 향 후 저에게 남들이 미리 적어놓은 코드를 그저 저에 입맛에 맞게 따라치는 것이 아닌 상황과 때에 따라
                    스스로 생각하고 마치 글쓰기를 하듯이 저만의 로직을 개발 할 수 있는 힘을 길러주었으며 실제 고객사와 협업하여 커뮤니케이션을 하는 방법을 터득하게 해 주었습니다.
                </Text>
                <br />
                <Text >
                    현재는 Python ( FastApi ), react ( TypeScript ) 를 사용하여 국내 범죄통계 대시보드를 구축 및 배포하여 개발 지식 및 실력을 늘리고 있습니다.
                    해당 프로젝트를 진행해오면서 저의 부족한 부분, 향 후 제가 짠 프로그램 개선점에 대해서 다시금 고민해 볼 수 있었으며 위 에서 말씀드린 국내 범죄통계
                    대시보드 에 대해서는 지속적으로 개발 및 발전 시키고 있습니다.
                </Text>

                <br />
                <Text >
                    저는 특정 포지션에 상관없이 늘 개발에 대해 학습하는 것을 즐기며 기존에 이미 알았던 지식들 이라도 늘 배우려는 자세로 제 개발에 대한 가치관을 확립하고 있습니다.
                    누군가에게는 그저 업무일지 모르나 저에게 개발은 저에게 취미이자 저를 나아가게 만들어 주는 수단입니다.

                </Text>
                <br />
                <Text >
                    향 후 개발에 대한 열정이 있는 회사에서 다양한 개발지식 및 도메인 지식들을 익혀나가며 좋은 개발자로 성장하고싶습니다.
                </Text>
            </TextContainer>
        </Container>
    )
}

export default About