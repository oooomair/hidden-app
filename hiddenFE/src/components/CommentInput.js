import { useContext,useState, useEffect } from "react";
import { ThemeContext } from "../context/theme";
import { useParams } from "react-router-dom"
import useFetch from "./useFetch"

const CommentInput = () => {

  const [{ themeBody, themeInput, isDark }, toggleTheme] = useContext(ThemeContext);

  const {id} = useParams();

  const {data: story, isPending, error, fetchData} = useFetch(`http://localhost:8000/${id}`)
  
    const [disabled, setDisabled] = useState(true)
    const [newComment, setNewComment] = useState('')
    const [comments, setComments] = useState([])

    const onComment = (comment) => {
      setNewComment(comment)

      if (comment.length === 0 ) {
        setDisabled(true)
      } else {
        setDisabled(false)
      }
    }

    const submitComment = () => {

       const newCommentObject = {newComment}
       console.log(newCommentObject);

        fetch(`http://localhost:8000/${id}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCommentObject)
          }).then(() => {
            fetchData()
          })
          
        // setComments(comments)
        setNewComment('')
        setDisabled(true)
    }

    useEffect(() => {
      if (story) {
        setComments(story.comments)
      }
    }, [story])

    return (
        <div className="comment-input">
            <input onChange={e => {onComment(e.target.value)}} value={newComment} style={{color: themeInput.color, background: themeInput.background, border: themeInput.border}} placeholder="Comment" type="text" />
          {disabled ?
              <button disabled style={{background: themeInput.btnBackground, border: themeInput.btnBorder}} >Go</button> 
              :
              <button onClick={submitComment} style={{background: themeInput.btnBackground, border: themeInput.btnBorder}} >Go</button> 
          }
        </div>
    )
}

export default CommentInput
