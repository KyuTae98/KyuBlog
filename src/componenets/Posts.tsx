import styled from "styled-components"
import React,{useState,useEffect} from "react"
import ReactMarkdown from 'react-markdown';
import { getPosts } from "../utils/GetPost";

const StylePost = styled.div`
color: white;
`


const Posts = () =>{
    const [posts,setPosts] = useState<string[][]>()
    useEffect(()=>{
        getPosts().then(element=>{
            setPosts(element)
        })
    },[])
    console.log(posts)
    return (
        <StylePost>
            {posts?.map((element,index)=>(
                <ReactMarkdown children={element[2]} key={index}/>
            ))}
        </StylePost>
    )
}

export default Posts