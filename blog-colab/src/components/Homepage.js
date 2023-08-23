
import React, {useEffect, useState} from 'react'
export default function Homepage(){
    const [blogdata, setBlogdata] = useState({
        title: "",
        author:"",
        date:"",
        content:"",
        tags: []
    })
    useEffect(()=>{

        fetch('http://localhost:3000/blogs/1')
        .then(res=>res.json())
        .then(data => setBlogdata(data))



    },[])
    console.log(blogdata)
    
    return (
        <>
        <div>
            <div>
                <h1>Latest Blog</h1>

            </div>
            <div>
                <h2>{blogdata.title}</h2>
                <h3>{blogdata.author}</h3>
                <h2>{blogdata.date}</h2> 
                <p>{blogdata.content}</p>
                <p>{blogdata.tags.map((tag)=>(
                    <li key={tag}>{tag}</li>
                ))}</p>

            </div>

        </div>

        
        </>
    )
}