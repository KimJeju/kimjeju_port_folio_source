import styled from "styled-components"
import CicleProgress from "./CicleProgress"
import ShareLine from "../../../Share/ShareLine"

//icons
import { SiCsharp, SiDotnet, SiNginx } from "react-icons/si";
import { FaPython, FaReact, FaAws,FaLinux } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandDjango } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";





const Container = styled.div`
    font-family: WantedSans-Regular;
    margin-top : 40px;
    font-size : 16px;
    padding : 5px;
   
    @media only screen and (max-width: 800px) {
        width: 22rem;
        flex-direction : column;
    }
   
`

const Range = styled.div`
display : flex;
flex-flow: row wrap;
justify-content : center;
line-height : 1;
`


const IconBox = styled.div`
    width : 100px;
    height : 75px;
    margin : 5px;
`

function Stack() {

    return (
        <Container>
            <ShareLine title="My Stacks" />
            <Range>
                <IconBox>
                    <FaPython size="72" color="white" />
                </IconBox>
                <IconBox>
                    <SiCsharp size="72" color="white" />
                </IconBox>
                <IconBox>
                    <IoLogoJavascript size="72" color="white" />
                </IconBox>
                <IconBox>
                    <SiDotnet size="72" color="white" />
                </IconBox>
                <IconBox>
                    <TbBrandDjango size="72" color="white" />
                </IconBox>
                <IconBox>
                    <FaReact size="72" color="white" />
                </IconBox>
                <IconBox>
                    <FaGithub size="72" color="white" />
                </IconBox>
                <IconBox>
                    <FaAws size="72" color="white" />
                </IconBox>
                <IconBox>
                    <FaLinux size="72" color="white" />
                </IconBox>
                <IconBox>
                    <SiNginx size="72" color="white" />
                </IconBox>
            </Range>

        </Container>
    )
}

export default Stack