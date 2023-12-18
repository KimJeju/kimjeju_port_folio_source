
import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaAws, FaYoutube, FaDiscord } from 'react-icons/fa6'

const Container = styled.div`
    width : 40rem;
    height : 40rem;

    @media only screen and (max-width: 800px) {
        width: 24rem;
        height : 33rem;
        flex-direction : column;
    }
`

const Line = styled.hr`
    width :32rem;
    margin-bottom : 5px;
    @media only screen and (max-width: 800px) {
        width: 17rem;
    }

`

function EducationTimeLine() {

    return (
        <Container>
            <VerticalTimeline
                layout='1-column-left'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(25, 0, 51)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(25, 0, 51)' }}
                    date="2022. 04.01 ~ 202. 10.01"
                    iconStyle={{ background: 'rgb(25, 0, 51)', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">코드스테이츠</h3>
                    <h4 className="vertical-timeline-element-subtitle">백엔드 5기</h4>
                    <p>
                    웹 백엔드 업무수행을 위한 Java, Spring Boot 및 프로젝트 관리 역량, 문제 해결 능력, 커뮤니케이션 역량, Cs 지식 등 습득
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(25, 0, 51)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(25, 0, 51)' }}
                    date="2021. 11.01 ~ 2023. 10. 01"
                    iconStyle={{ background: 'rgb(25, 0, 51)', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">제주 더큰내일센터 ( 수료 )</h3>
                    <h4 className="vertical-timeline-element-subtitle">제주 취업청년 프로그램</h4>
                    <p>
                    자기주도성, 협업, 문제해결능력 등등 향 후 사회인으로서 필요한 역량을 프로젝트 단위로 수행하며 습득 
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(25, 0, 51)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(25, 0, 51)' }}
                    date="2020. 09.30 ~ 2021. 04.30"
                    iconStyle={{ background: 'rgb(25, 0, 51)', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">대구 경북산업직업전문 학교 ( 수료 )</h3>
                    <h4 className="vertical-timeline-element-subtitle">Ui / Ux 디자인반</h4>
                    <p>
                    웹 Ui/Ux 디자인을 위한 디자인 학계론 및 자바스크립트, Html , 디자인툴 학습
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(25, 0, 51)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(25, 0, 51)' }}
                    date="2016. 03 ~ 2018. 02"
                    iconStyle={{ background: 'rgb(25, 0, 51)', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">제주관광대학교 ( 졸업 )</h3>
                    <h4 className="vertical-timeline-element-subtitle">해군기술부사관학과</h4>
                    <p>
                    군리더쉽, 해전사, 언어논리, 자료해석, 기계공학실무 등 해군 장교 또는 부사관 임관에 필요한 지식 습득
                    </p>
                </VerticalTimelineElement>

            </VerticalTimeline>

        </Container>
    )
}

export default EducationTimeLine
