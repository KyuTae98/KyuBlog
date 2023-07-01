import React from "react";
import styled from "styled-components"
import Header from "../componenets/Header";
import Posts from "../componenets/Posts";

const StyledMainPage = styled.div`
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items:center;
`



const MainPage = () => {
    return (
        <StyledMainPage>
            <Header/>
            <Posts/>
        </StyledMainPage>
    )

}

export default MainPage