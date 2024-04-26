import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import React from 'react'
import { Link } from 'react-router-dom'
import '../Administrador/Styles_post/Stpost.css'



const PostItem = ({ PostID, titulo, desc, imagen }) => {
    return (
        <article >
            <div className="post_imagen">
                <img src={imagen} class="rounded" alt={titulo} />
            </div>
            <div className="Post_content">
                <Link to={`/PostHome/${PostID}`}>
                    <h href="#" class="text-decoration-none">{titulo}</h>
                </Link>
                <p> {desc} </p>

            </div>
        </article>
    )
}

export default PostItem
