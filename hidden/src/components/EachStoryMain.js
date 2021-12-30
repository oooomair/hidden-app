import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import CommentInput from './CommentInput'
import Comments from './Comments'

const EachStoryMain = ({story}) => {

    return (
        <div className="each-story__main">
        <h1>{story.title}</h1>
        <p>{story.story}</p>
        {story.isComment ?
        <div className="comments">
        <CommentInput/>
        <h2>Comments </h2>
        <ul className='comment-list'>
             { story.comments.map(comment => {
               return <Comments key={Math.floor(Math.random()*100000)} comment={comment} /> 
             })}
        </ul>
        </div> : null}
        </div>
    )
}

export default EachStoryMain
