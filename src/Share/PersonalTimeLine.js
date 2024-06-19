
import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Container = styled.div`
    width : 40rem;
    height : 35rem;

    @media only screen and (max-width: 800px) {
        width: 23rem;

        flex-direction : column;
    }
`

const Line = styled.hr`
    width :32rem;
    margin-bottom : 5px;
    margin-right : 5px;

    @media only screen and (max-width: 800px) {
        width: 10rem;
    }

`

const Link = styled.a`
    color : white;
    transition : 0.5s;

    &:hover{
        color : #F23D3D;
    }
`

function PersonalTimeLine() {

    return (
        <Container>
            <VerticalTimeline
                layout='1-column-left'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(25, 0, 51)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(25, 0, 51)' }}
                    date="24-05-01 ~ ing "
                    iconStyle={{ background: 'rgb(25, 0, 51)', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <Link href="https://www.crimedash.kr/" target='_blank'>국내 범죄통계 대시보드 ( 클릭 시 이동합니다. )</Link>
                    <br />
                    <h4 className="vertical-timeline-element-subtitle">■ 풀스택 개발</h4>
                    <p>
                        <Line />
                        &nbsp; &nbsp; &nbsp;- 프로젝트 투입 및 개발기간 : 2024-05-01 ~ ing<br />
                        &nbsp; &nbsp; &nbsp;- 라이브 기간 : 23-06-15 ~ ing <br />
                        &nbsp; &nbsp; &nbsp;- 사용 기술 : fastapi, react, jupyter notebook<br />
                        &nbsp; &nbsp; &nbsp;- 사용 언어 : python, typescript <br />
                        &nbsp; &nbsp; &nbsp;- 배포 : nginx, docker cloudtype, 가비아 ( DNS )<br />
                        &nbsp; &nbsp; &nbsp;- 버전관리 : git, svn<br /><br />


                        &nbsp; ■ 프로젝트 내용 : <br />
                        &nbsp; &nbsp; &nbsp;- 경찰청 제공 분기별 범죄 발생 통계 데이터 전처리 <br />
                        &nbsp; &nbsp; &nbsp;- FastApi를 사용하여 api 제작 및 서버구축  <br />
                        &nbsp; &nbsp; &nbsp;- Typescript React 를 사용하여 데이터 시각화 웹 애플리케이션 제작 < br />
                        &nbsp; &nbsp; &nbsp;- 도커 및 cloudtype 을 사용한 배포 < br />
                        &nbsp; &nbsp; &nbsp;- DNS 작업 < br />
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </Container>
    )
}

export default PersonalTimeLine
