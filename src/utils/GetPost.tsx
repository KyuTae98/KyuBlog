import React from "react"

const markdownContext:string[] = require.context('../posts', false, /\.md$/).keys();

const getFrontMatter = (postArray:string[]):string[][] => {
    const new_post:string[][] =  postArray.map(element=>{
        return element.split("---")  
    })
    return new_post
}

export const getPosts = async ():Promise<string[][]> =>{
    const post: any =  await Promise.all(markdownContext.map((file:string) => fetch(file).then((res) => res.text())))
    .catch((err) => console.error(err));
    return getFrontMatter(post)
}
