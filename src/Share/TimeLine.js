
import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaAws, FaYoutube, FaDiscord } from 'react-icons/fa6'

const Container = styled.div`
    width : 40rem;
    height : 75rem;

    @media only screen and (max-width: 800px) {
        width: 24rem;
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

function TimeLine() {

    return (
        <Container>
            <VerticalTimeline
                layout='1-column-left'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(25, 0, 51)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(25, 0, 51)' }}
                    date="22-11-01 ~ ing"
                    iconStyle={{ background: 'rgb(25, 0, 51)', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Peppercon</h3>
                    <h4 className="vertical-timeline-element-subtitle">Server Developer</h4>
                    <p>
                        <Line />

                        &nbsp;■ 전국제패M <br />
                        &nbsp; &nbsp; &nbsp;- 프로젝트 투입 및 개발기간 : 2022-11-01 ~ 2023-10-05 <br />
                        &nbsp; &nbsp; &nbsp;- 라이브 기간 : 23-04-30 ~ 23-10-05 <br />
                        &nbsp; &nbsp; &nbsp;- 서버 사용 기술 : .Net Framework, nginx, aws, react, aws <br />
                        &nbsp; &nbsp; &nbsp;- 사용 언어 : C# , java script <br /><br />
                        &nbsp; &nbsp; &nbsp;- 담당업무 : <br />
                        &nbsp; &nbsp; &nbsp;- 전국제패M 서버 API 개발 및 게임 운영툴 개발 <br />
                        &nbsp; &nbsp; &nbsp;- 전국재패M 라이브 서비스 및 컨텐츠 API, 운영툴 업데이트 <br /><br />

                        &nbsp; ■ 프로젝트 기여내용 : <br />

                        &nbsp;&nbsp;■ 인게임 <br />
                        &nbsp; &nbsp; &nbsp;- 메타테이블 ( csv ) 파일 관리 및 패치 <br />
                        &nbsp; &nbsp; &nbsp;- 개발서버, QA 서버 패치 및 버전 관리 <br />
                        &nbsp; &nbsp; &nbsp;- 게임 내 컨텐츠 한계돌파 컨텐츠 서버 API 개발 < br />
                        &nbsp; &nbsp; &nbsp;- QA팀 요구사항 응대 < br />< br />

                        &nbsp;&nbsp;■ 운영툴 <br />
                        &nbsp; &nbsp; &nbsp;- 유저정보를 시각화 ( 테이블 ) 화 하여 제공 <br />
                        &nbsp; &nbsp; &nbsp;- 퍼블리셔 회사에 운영툴을 제공함으로서 라이브 서비스의 편의성제공 <br />
                        &nbsp; &nbsp; &nbsp;- 게임 내 보상 지급 및 누락보상 지급에 편의성 제공<br />
                        &nbsp; &nbsp; &nbsp;- 공지 시스템과 유저차단 시스템 구축으로 주 1회 정기점검에 편의성 제공  <br />
                        &nbsp; &nbsp; &nbsp;- 운영자 활동 로그 및 보상지급 로그를 테이블화하여 비정상 보상지급 방지   <br />
                        &nbsp; &nbsp; &nbsp;- 운영자 등급에 따른 Read, Write 등급 설정 <br />

                        <Line />
                        <br />
                        ■ 후앤비 <br />
                        - 프로젝트 투입 및 개발기간 : 2023-10-05 ~ ing <br />
                        - 사용 기술 : blazor <br />
                        - 사용언어 : C# <br />
                        - 담당업무 : 후앤비 게임 운영툴 탬플릿 제작 <br /><br />

                        &nbsp; ■ 프로젝트 기여내용 : <br />

                        &nbsp;&nbsp;■ 운영툴 <br />
                        &nbsp; &nbsp; &nbsp;- 후앤비 프로젝트 운영툴 디자인 <br />
                        &nbsp; &nbsp; &nbsp;- DB 정보 데이터 테이블화 ( 시각화 ) <br />
                        &nbsp; &nbsp; &nbsp;- 운영툴 로그인, 로그아웃, 회원가입 기능 제작 < br />
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>

        </Container>
    )
}

export default TimeLine