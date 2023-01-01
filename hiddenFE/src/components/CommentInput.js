import { useContext,useState, useEffect } from "react";
import { ThemeContext } from "../context/theme";
import { useParams } from "react-router-dom"

const CommentInput = ({onComment}) => {

  const [{ themeInput }] = useContext(ThemeContext);

  const {id} = useParams();
  
    const [disabled, setDisabled] = useState(true)
    const [newComment, setNewComment] = useState('')

    const onCommentType = (comment) => {
      setNewComment(comment)

      if (comment.length === 0 ) {
        setDisabled(true)
      } else {
        setDisabled(false)
      }
    }

    const submitComment = () => {

       const newCommentObject = {newComment}

        fetch(`https://hidden-app.up.railway.app/${id}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCommentObject)
          })
          
        onComment(newComment)
        setNewComment('')
        setDisabled(true)
    }

    return (
        <div className="comment-input">
            <input onChange={e => {onCommentType(e.target.value)}} value={newComment} style={{color: themeInput.color, background: themeInput.background, border: themeInput.border}} placeholder="Comment" type="text" />
          {disabled ?
              <button disabled style={{background: themeInput.btnBackground, border: themeInput.btnBorder}} >Go</button> 
              :
              <button onClick={submitComment} style={{background: themeInput.btnBackground, border: themeInput.btnBorder}} >Go</button> 
          }
        </div>
    )
}

export default CommentInput
