import React from "react"
import ReactMarkdown from 'react-markdown';

const markdownContext:string[] = require.context('../posts', false, /\.md$/).keys();

const getFrontMatter = (postArray:string[]):void => {
    postArray.map(element=>{
        element.split("---")
        console.log(element)
    })   
}

const getPosts = async () =>{
    const post: any =  await Promise.all(markdownContext.map((file:string) => fetch(file).then((res) => res.text())))
    .catch((err) => console.error(err));
    getFrontMatter(post)
}




export default getPosts