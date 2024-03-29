import React from 'react'
import { Link } from 'react-router-dom'
import Posts_styles from "/Users/Jesus/Desktop/aplicacionTatuajes/src/styles/Posts_style.css"

const PostItem = ({ PostID, titulo, desc, imagen }) => {
    return (
        <article className="post">
            <div className="post_imagen">
                <img src={imagen} alt={titulo} />
            </div>
            <div className="post_content">
                <Link to={`/PostHome/${PostID}`}>
                    <h3>{titulo}</h3>
                </Link>
                <p className='Desc'> {desc} </p>
                
            </div>
        </article>
    )
}

export default PostItem
