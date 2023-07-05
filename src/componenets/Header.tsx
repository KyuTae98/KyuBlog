import React from "react";
import styled from "styled-components"

const StyledHeader = styled.header`
    width:80%;
    font-family: 'Noto Sans KR', sans-serif;
    color:#FFFFFF;
    padding:20px;
    font-size: 20px;
`

const Stylednav = styled.nav`
    max-width:200px;
    display:flex;
    justify-content:space-between;
`

const Header = () =>{
    return(
        <StyledHeader>
            <Stylednav>
                <span>Home</span>
                <span>Profile</span>
            </Stylednav>
        </StyledHeader>
    )
}

export default Header