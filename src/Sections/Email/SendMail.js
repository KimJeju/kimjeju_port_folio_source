import emailjs from 'emailjs-com';
import { useState } from 'react';
import styled from "styled-components";
import Swal from "sweetalert2";


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
    width: 20rem;
    height : 25rem;
    background-color : #222428;


    //최상단 위치
    z-index : 999;

    //가운데 위치 시키기
    position : absolute;
    top : 25%;
    left : 25%;
    transform : translate(-25%, -25%);

    border : 1px solid white;
    transition : 0.5s;
    border-radius : 2px;

    display : flex;
    flex-direction : column;

    &:hover{
        box-shadow: 10px 10px white;
    }
`
const InputContainer = styled.div`
      display : flex;
      flex-direction : column;
      padding : 5px;
`
const Label = styled.label`
      color : white;
      margin-top : 20px;
`

//닫기 버튼
const Close = styled.button`
    // 버튼 오른쪽 최상단에 위치하도록 만들어주기
    position : absolute;
    top : 10px;
    right : 10px;
    
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

const Textarea = styled.textarea`
    height : 100px;
`

const SendButton = styled.button`
    witdh : 50px;
    height : 45px;
    border : none;
    background-color : #01A488;
    color : black;
    transition : 0.7s;
    padding : 10px;
    margin-top : 30px;

    &:hover{
        background-color : #005C53;
        color : white;
    }
`

function SendMail({ setOpenMailModal }) {
    const [isEmailSent, setIsEmailSent] = useState(false);

    const [fromName, setFromName] = useState("");
    const [fromEmail, setFromEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const onChangeFromName = (e) => {
        setFromName(e.target.value);
    };

    const onChangeFromEmail = (e) => {
        setFromEmail(e.target.value);
    };
    const onChangePhone = (e) => {
        setPhone(e.target.value);
    };
    const onChangeMessage = (e) => {
        setMessage(e.target.value);
    };

    const onClose = (e) => {
        setOpenMailModal(false);
    };

    const sendVerificationEmail = () => {
        // 이메일 보내기
        // 여기서 정의해야하는 것은 위에서 만든 메일 템플릿에 지정한 변수({{ }})에 대한 값을 담아줘야한다.
        const templateParams = {
            to_name: "김건휘",
            from_name: fromName,
            from_email: fromEmail,
            phone: phone,
            message: message
        };

        emailjs
            .send(
                'service_sy1xtvp', // 서비스 ID
                'template_kddvesk', // 템플릿 ID
                templateParams,
                'LOg6PzOiGcWr3UC6-' // public-key
            )
            .then((response) => {
                Swal.fire({
                    text: "메일이 성공적으로 보내졌습니다.",
                    icon: "success",
                    title: "메일 보내기",
                })
                setIsEmailSent(true);
                setOpenMailModal(false);
                // 이메일 전송 성공 처리 로직 추가
            })
            .catch((error) => {
                alert('이메일 보내기 실패:', error);
                // 이메일 전송 실패 처리 로직 추가
            });
    };

    const handleVerification = () => {
        sendVerificationEmail();
    };

    return (
        <Background>
            <OpenContainer>
                <Close onClick={onClose}>X</Close>

                <InputContainer>
                    <Label>성함</Label>
                    <input type='text' onChange={onChangeFromName} value={fromName} />

                    <Label>이메일</Label>
                    <input type='email' onChange={onChangeFromEmail} value={fromEmail} />

                    <Label>전화번호</Label>
                    <input type='tel' onChange={onChangePhone} value={phone} />

                    <Label>내용</Label>
                    <Textarea type='text' onChange={onChangeMessage} value={message} />

                </InputContainer>

                <h2></h2>
                {isEmailSent ? (
                    <p>
                        인증 이메일이 성공적으로 발송되었습니다. 이메일을
                        확인해주세요!
                    </p>
                ) : (
                    <SendButton onClick={handleVerification}>Send Mail</SendButton>
                )}
            </OpenContainer>
        </Background>
    );
}

export default SendMail;