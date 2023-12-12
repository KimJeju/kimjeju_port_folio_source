import styled from "styled-components"
import About from "./Career/About"
import Position from "./Career/Position"
import Stack from "./Career/Stack"
import "../../Styles/App.css"
import { useEffect, useState } from "react"


const CareerContainer = styled.div`
    width : 45rem;
    padding : 20px;
    font-family: WantedSans-Regular;
    overflow : auto;

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

    console.log("innerWidth", innerWidth);

    if (innerWidth < 800) {
        return (
            <CareerContainerMaxWidth800 className="openContainer">
                <About />
                <Position />
                <Stack />
            </CareerContainerMaxWidth800>
        )
    } else {
        return (
            <CareerContainer className="openContainer">
                <About />
                <Position />
                <Stack />
            </CareerContainer>
        )
    }


}

export default MyCareer