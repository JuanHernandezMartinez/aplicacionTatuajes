import React, { useState } from "react";
import PostItem from "./PostItem";
import descarga from "../Administrador/imagenes/descarga.jfif"
import "../Administrador/Styles_post/Post_styles.css"



const DUMMY_POST = [
    {
        id: '1',
        imagen: descarga,
        titulo: "Primer tatuaje del dia",
        desc: "juan se la come "
    },
    {
        id: "2",
        imagen: descarga,
        titulo: "Segundo post",
        desc: "juan se la come y elihu tambien"
    },
    {
        id: "3",
        imagen: descarga,
        titulo: "Tercer post",
        desc: "juan se la come con todo "
    },
    {
        id: '4',
        imagen: descarga,
        titulo: "Primer post",
        desc: "juan se la come "
    },
    {
        id: "5",
        imagen: descarga,
        titulo: "Segundo post",
        desc: "juan se la come y elihu tambien"
    },
    {
        id: "6",
        imagen: descarga,
        titulo: "Tercer post",
        desc: "juan se la come con todo "
    },
    {
        id: "7",
        imagen: descarga,
        titulo: "Tercer post",
        desc: "juan se la come con todo "
    }
]

const Post = () => {
    const [post, setPost] = useState(DUMMY_POST)
    return (
        <section className="Posts">
            <div className="container post_container">
                {post.map(({ id, imagen, titulo, desc }) => <PostItem key={id} PostID={id} imagen={imagen} titulo={titulo} desc={desc} />)}
            </div>
        </section>

    )

}
export default Post
//{post.map(({id, imagen, titulo, desc}) => <PostItem key={id} PostID={id} imagen = {imagen} titulo= {titulo} desc={desc}   /> )}