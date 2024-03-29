import React, { useState } from "react";
import PostItem from "./PostItem";
import descarga from "../Administrador/imagenes/descarga.jfif"



const DUMMY_POST =[
    {
        id: '1',
        imagen: descarga,
        titulo: "Primer post",
        desc: "juan se la come"
    },
    {
        id: "2",
        imagen: descarga,
        titulo: "segundo post",
        desc: "juan se la come y elihu tambien"
    },
    {
        id: "3",
        imagen: descarga,
        titulo: "tercer post",
        desc: "juan se la come con todo "
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
