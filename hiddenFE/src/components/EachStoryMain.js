import { useState, useEffect } from 'react'
import CommentInput from './CommentInput'
import Comments from './Comments'

const EachStoryMain = ({story}) => {

  const [comments, setComments] = useState()

  const onComment = comment => {
    setComments(prevComments => [...prevComments, comment]);
    console.log(comment);
  }

  useEffect(() => {
    if (story) {
      setComments(story.comments);
    }
  }, [story]);

    return (
        <div className="each-story__main">
        <h1>{story.title}</h1>
        <p>{story.story}</p>
        {story.isComments ?
        <div className="comments">
        <CommentInput onComment={onComment}/>
        <h2>Comments </h2>
        <ul className='comment-list'>
             {comments && comments.map(comment => {
               return <Comments key={Math.floor(Math.random()*100000)} comment={comment} /> 
             })}
        </ul>
        </div> : null}
        </div>
    )
}

export default EachStoryMain
