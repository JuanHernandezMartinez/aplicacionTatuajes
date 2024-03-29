import React, { useState } from "react";
import PostItem from "./PostItem";
import imagen1 from "../Administrador/imagenes/descarga.jfif"



const DUMMY_POST =[
    {
        id: "1",
        imagen1: descarga.jfif,
        titulo: "Primer post",
        desc: "juan se la come"
    },
    {
        id: "2",
        imagen: descarga.jfif,
        titulo: "Primer post",
        desc: "juan se la come"
    },
    {
        id: "3",
        imagen: descarga.jfif,
        titulo: "Primer post",
        desc: "juan se la come"
    }
]

const Post =()=>{
    const [post, setPost] = useState (DUMMY_POST)
    return (
        <section className="Posts">
            {
                post.map(({id, imagen, titulo, desc}) => <PostItem key={id} PostID={id} imagen = {imagen} titulo= {titulo} desc={desc}   /> )
            }
        </section>
      
    )

} 
export default Post
