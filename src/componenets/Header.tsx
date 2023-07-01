import React from "react";
import styled from "styled-components"
import HomeImage from "../images/Home.png"

const StyledHeader = styled.header`
    width:80%;
    display:flex;
    justify-content: space-between;
    font-family: 'Noto Sans KR', sans-serif;
    color:#FFFFFF;
    font-size: 20px;
`

const StyledImg = styled.img`

`

const Header = () =>{
    return(
        <StyledHeader>
            <span>Kyutae</span>
            <span>Profile</span>
        </StyledHeader>
    )
}

export default Header