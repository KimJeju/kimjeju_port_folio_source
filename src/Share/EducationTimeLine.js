
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
                    date="2016. 03 ~ 2018. 02"
                    iconStyle={{ background: 'rgb(25, 0, 51)', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">제주관광대학교</h3>
                    <h4 className="vertical-timeline-element-subtitle">해군기술부사관학과</h4>
                    <p>

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
                    <h3 className="vertical-timeline-element-title">제주관광대학교</h3>
                    <h4 className="vertical-timeline-element-subtitle">해군기술부사관학과</h4>
                    <p>

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
                    <h3 className="vertical-timeline-element-title">제주관광대학교</h3>
                    <h4 className="vertical-timeline-element-subtitle">해군기술부사관학과</h4>
                    <p>

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
                    <h3 className="vertical-timeline-element-title">제주관광대학교</h3>
                    <h4 className="vertical-timeline-element-subtitle">해군기술부사관학과</h4>
                    <p>

                    </p>
                </VerticalTimelineElement>

            </VerticalTimeline>

        </Container>
    )
}

export default EducationTimeLine
