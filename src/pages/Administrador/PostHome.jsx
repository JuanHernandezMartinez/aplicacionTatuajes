import React, { useState } from "react";
import tatuaje from "/Users/Jesus/Desktop/aplicacionTatuajes/src/assets/tatuaje.png"
import PostItem from "./PostItem";



const DUMMY_POST =[
    {
        id: "1",
        imagen: tatuaje.png,
        titulo: "Primer post",
        desc: "juan se la come"
    },
    {
        id: "2",
        imagen: tatuaje.png,
        titulo: "Primer post",
        desc: "juan se la come"
    },
    {
        id: "3",
        imagen: tatuaje.png,
        titulo: "Primer post",
        desc: "juan se la come"
    }
]

const Post =()=>{
    const [post, setPost] = useState (DUMMY_POST)
    return (
        <section className="Posts">
            {
                post.map(({id,imagen,titulo,desc}) => <PostItem key={id} PostID={id} imagen = {imagen} titulo= {titulo} desc={desc}   /> )
            }
        </section>
      
    )

} 
export default Post
