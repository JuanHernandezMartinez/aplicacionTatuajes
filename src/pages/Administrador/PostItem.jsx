import React from 'react'
import { Link } from 'react-router-dom'
import '../Administrador/Styles_post/Stpost.css'


const PostItem = ({ PostID, titulo, desc, imagen }) => {
    return (
        <article className="post">
            <div className="post_imagen">
                <img src={imagen} class="rounded " alt={titulo} />
            </div>
            <div className="post_content">
                <Link to={`/PostHome/${PostID}`}>
                    <h3 className='titulo'>{titulo}</h3>
                </Link>
                <p className='Desc'> {desc} </p>

            </div>
        </article>
    )
}

export default PostItem
