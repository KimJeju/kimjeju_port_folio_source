import styled from "styled-components"


const InfoContainer = styled.div`
    width : 20rem;
`


///프로필 이미지 영역

const Profile = styled.div`
     display : flex;
     justify-content : center;
     padding : 10px;

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


function MyInfo() {

    return (
        <InfoContainer>
            <Profile>
                <ProfileImg />
            </Profile>

            <DomainContainer>
                <Name>Kim Jeju</Name>
                <Domain>Developer Server & DevOps </Domain>
            </DomainContainer>

        </InfoContainer>
    )

}

export default MyInfo