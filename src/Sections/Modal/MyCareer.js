import styled from "styled-components"
import About from "./Career/About"
import Position from "./Career/Position"
import Stack from "./Career/Stack"
import "../../Styles/App.css"
import { useEffect, useState } from "react"
import WorkHistory from "./Career/WorkHistory"
import EducationHistory from "./Career/EducationHistory"


const CareerContainer = styled.div`
    width : 45rem;
    padding : 20px;
    font-family: WantedSans-Regular;
    overflow-x : hidden;
    overflow-y : scroll;

    @media only screen and (max-width: 800px) {
        width: 22rem;
        flex-direction : column;
    }
   

`

const CareerContainerMaxWidth800 = styled.div`
    width : 45rem;
    padding : 20px;
    font-family: WantedSans-Regular;
`


function MyCareer() {

    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const resizeListener = () => {
            setInnerWidth(window.innerWidth);
        };
        window.addEventListener("resize", resizeListener);
    });

    if (innerWidth < 800) {
        return (
            <CareerContainerMaxWidth800 className="openContainer">
                <About />
                <Position />
                <Stack />
                <WorkHistory />
                <EducationHistory />
            </CareerContainerMaxWidth800>
        )
    } else {
        return (
            <CareerContainer className="openContainer">
                <About />
                <Position />
                <Stack />
                <WorkHistory />

                <EducationHistory />
            </CareerContainer>
        )
    }


}

export default MyCareer