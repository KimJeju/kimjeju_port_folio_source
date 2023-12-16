import styled from "styled-components";
import "../../Styles/App.css"
import MyCareer from "./MyCareer";
import MyInfo from "./MyInfo";

//뒷배경 어둡게 해주기
const Background = styled.div`
    position : fixed;
    top : 0;
    left : 0;
    width : 100vw;
    height : 100vh;
    background-color : rgba(0,0,0,0.8);
    z-index : 100;
`

//모달 최상단 위치 시켜주기
const OpenContainer = styled.div`
    width: 1000px;
    height : 800px;
    background-color : #1E1D24;
    font-family: WantedSans-Regular;

    //최상단 위치
    z-index : 999;

    //가운데 위치 시키기
    position : absolute;
    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);

    //내부 콘텐츠 정렬
    display : flex;


    transition : 0.5s;

    &:hover{
        box-shadow: 10px 10px white;
    }

    @media only screen and (max-width: 800px) {
        width: 25rem;
        height : 40rem;
        flex-direction : column;
        overflow: scroll;
        overflow-x : hidden;
    }

`


//닫기 버튼
const Close = styled.button`
    // 버튼 오른쪽 최상단에 위치하도록 만들어주기
    position : absolute;
    top : 15px;
    right : 20px;
    
    //디자인 영역
    transition : 0.5s;
    width : 25px;
    height : 25px;
    transition : 0.5s;
    background-color : #F23D3D;
    color : white;
    border : none;

    &:hover{
        background-color : white;
        color : black;
    }
`

function ModalPage({ setOpenModal }) {

    function closeModal() {
        setOpenModal(false);
    }

    return (
        <Background>
            <OpenContainer className="openContainer">
                <Close onClick={closeModal}> X </Close>
            
                <MyInfo />
                <MyCareer />

            </OpenContainer>
        </Background>
    )
}

export default ModalPage;