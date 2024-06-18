import { useState } from "react"
import styled from "styled-components";
import "../../Styles/intro.css"
import ModalPage from "../Modal/ModalPage";



const ButtonContainer = styled.div`
    display : flex;
    flex-direction : row;
    width : 250px;
    justify-content: space-between;
    font-family: WantedSans-Regular;

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




const Img = styled.img`
    witdh : 20rem;
    height : 20rem;
    object-fit: cover;
`

function Intro() {
    //Modal 영역
    const [openModal, setOpenModal] = useState(false);

    function showModal() {
        setOpenModal(true);
    }

    return (
        <div className="intro-body">
            <div className="intro-left-body">
                {/* 사진 들어갈 곳 */}
            </div>
            <div className="intro-right-body">
                <span id="name_text">Kunhwi Kim</span>
                <span id="name_domain">Developer</span>
                <hr />
                <br />
                <p id="name_introduce">안녕하세요. 취미가 공부인 개발자 김건휘 입니다.</p>
                <p id="name_introduce">주로 서버개발 및 인프라 구축, 운영 배포 쪽의 업무를 맡고 있습니다. </p>
                <p id="name_introduce">제 포트폴리오 재밌게 보시고 저에 대해 궁금하시다면 언제든 연락주세요 !</p>
                <ButtonContainer>
                    <Button onClick={showModal}>View More</Button>
                    {openModal && <ModalPage setOpenModal={setOpenModal} />}

                </ButtonContainer>
            </div>
        </div>
    )
}

export default Intro