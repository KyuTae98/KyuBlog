import React from "react"




const Posts = () =>{
    const markdownContext:string[] = require.context('../posts', false, /\.md$/).keys();
    const getPosts = async () =>{
        const post:any =  await Promise.all(markdownContext.map((file:string) => fetch(file).then((res) => res.text())))
        .catch((err) => console.error(err));
        console.log(post)
    }
    getPosts()
    return (
        <div>asdsad</div>
    )
}

export default Posts