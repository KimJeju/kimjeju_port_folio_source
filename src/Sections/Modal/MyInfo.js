import { useState } from "react"
import styled from "styled-components"
import { IoMdPerson } from "react-icons/io";
import { FaMapLocationDot, FaPhone, FaGithub, FaBook } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import SendMail from "../Email/SendMail";





const InfoContainer = styled.div`
    width : 25rem;
    border-right: 1px dashed white;
    font-family: WantedSans-Regular;

    
`


///프로필 이미지 영역

const Profile = styled.div`
     display : flex;
     justify-content : center;
     padding : 10px;
     margin-top : 35px;

`

const ProfileImg = styled.div`
    width : 150px;
    height : 200px;
    background-color : red;
`

//이름과 직업

const DomainContainer = styled.div`
   text-align : center;
   display : flex;
   flex-direction: column;

`

const Name = styled.span`
    color : white;
    font-weight : bold;
    font-size : 25px;

`

const Domain = styled.span`
    color : grey;
    font-weight : bold;
    font-size : 15px;
    margin-top : 2px;
`

//내 정보
const Content = styled.div`
    display : flex;
    flex-direction : column;
    padding : 20px;

`

const ContextBox = styled.div`
    border-bottom : 1px dashed grey;;
    display : flex;
    flex-direction : row;
    padding-bottom: 5px;
    margin-top : 20px;
`

const ContextText = styled.div`
    color : white;
    font-weight: 500;
    margin-left : 15px;


`

const Link = styled.a`
    color : white;
    transition : 0.5s;

    &:hover{
        color : #F23D3D;
    }
`

//메일

const MailButton = styled.button`
    background-color : #F23D3D; 
    color : white;
    border : none;
    height : 50px;
    font-size : 15px;
    transition : 0.5s;
    margin-top : 20px;
    border-radius : 5px;
    margin-right : 20px;

    &:hover{
        border-radius : 25px;
        color : black;
    }
`




function MyInfo() {

    const [openMailModal, setOpenMailModal] = useState(false);


    function showMailModal() {
        setOpenMailModal(true);
    }

    return (
        <InfoContainer>
            <Profile>
                <ProfileImg />
            </Profile>

            <DomainContainer>
                <Name>Kim Jeju</Name>
                <Domain>Developer Server & DevOps </Domain>
            </DomainContainer>

            <Content>
                <ContextBox>
                    <IoMdPerson size="20" color="#F23D3D" />
                    <ContextText>Kim Jeju ( Kunhwi, Kim )</ContextText>
                </ContextBox>

                <ContextBox>
                    <FaMapLocationDot size="20" color="#F23D3D" />
                    <ContextText>Seongnam-si, Republic of Korea</ContextText>
                </ContextBox>

                <ContextBox>
                    <FaPhone size="20" color="#F23D3D" />
                    <ContextText>82+ 10 8*** ****</ContextText>
                </ContextBox>

                <ContextBox>
                    <IoMail size="20" color="#F23D3D" />
                    <ContextText>overrainbow0315@gmail.com</ContextText>
                </ContextBox>

                <ContextBox>
                    <FaBook size="20" color="#F23D3D" />
                    <ContextText><Link href="https://176cm-developer.tistory.com/" target='_blank'>Tstory Blog</Link></ContextText>
                </ContextBox>

                <ContextBox>
                    <FaBook size="20" color="#F23D3D" />
                    <ContextText><Link href="https://kimjeju.github.io/" target='_blank'>Git Hub Blog</Link></ContextText>
                </ContextBox>

                <ContextBox>
                    <FaGithub size="20" color="#F23D3D" />
                    <ContextText><Link href="https://github.com/KimJeju" target='_blank'>Git Hub</Link></ContextText>
                </ContextBox>


                <MailButton onClick={showMailModal}>Send Mail</MailButton>
                {openMailModal && <SendMail setOpenMailModal={setOpenMailModal} />}
            </Content>

        </InfoContainer>
    )

}

export default MyInfo