import { useState } from "react"
import styled from "styled-components";
import "../../Styles/intro.css"
import ModalPage from "../Modal/ModalPage";
import SendMail from "../Email/SendMail";


const ButtonContainer = styled.div`
    display : flex;
    flex-direction : row;
    width : 250px;
    justify-content: space-between;
`

const Button = styled.button`
    background-color : #3A00F5; 
    color : white;
    border : none;
    width : 10rem;
    height : 50px;
    font-size : 15px;
    transition : 0.5s;
    margin-top : 20px;
    border-radius : 5px;

    &:hover{
        background-color : white;
        border-radius : 25px;
        color : black;
    }
`


const MailButton = styled.button`
    background-color : white; 
    color : black;
    border : none;
    width : 50px;
    height : 50px;
    font-size : 15px;
    transition : 0.5s;
    margin-top : 20px;
    border-radius : 5px;
    margin-right : 20px;

    &:hover{
        background-color :  #3A00F5;
        border-radius : 25px;
        color : black;
    }
`

const Img = styled.img`
    witdh : 20rem;
    height : 20rem;
    object-fit: cover;
`

function Intro() {
    //Modal 영역
    const [openModal, setOpenModal] = useState(false);

    const [openMailModal, setOpenMailModal] = useState(false);


    function showModal() {
        setOpenModal(true);
    }

    function showMailModal() {
        setOpenMailModal(true);
    }


    return (
        <div className="intro-body">
            <div className="intro-left-body">
                {/* 사진 들어갈 곳 */}
                {/* <Img src="img/profile.png"/> */}
            </div>
            <div className="intro-right-body">
                <span id="name_text">Kim Jeju</span>
                <span id="name_domain">Developer BackEnd & Data Engine</span>
                <hr />
                <br />
                <p id="name_introduce">안녕하세요 스스로 답을 찾아나가는 과정을 즐기는 개발자 김제주 ( 김건휘 ) 입니다.</p>
                <p id="name_introduce">주로 서버개발 및 인프라 구축, 운영 배포 쪽의 업무를 맡고 있습니다. </p>
                <p id="name_introduce">저는 오늘 날 작성한 코드를 첨삭하는 과정에서 더 나은 가독성 및 생산성을 확보하는 작업을 즐기며 개발을 하고 있습니다!</p>
                <p id="name_introduce">저에 대해 궁금하시다면 언제든 연락주세요 ! </p>

                <ButtonContainer>
                    <Button onClick={showModal}>View More</Button>
                    {openModal && <ModalPage setOpenModal={setOpenModal} />}

                    <MailButton onClick={showMailModal}>Send Mail</MailButton>
                    {openMailModal && <SendMail setOpenMailModal={setOpenMailModal} />}

                </ButtonContainer>
            </div>
        </div>
    )
}

export default Intro