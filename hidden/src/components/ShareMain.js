import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/theme";

const ShareMain = () => {

    const [title, setTitle] = useState('')
    const [story, setStory] = useState('')
    const comments = []
    const [isComment, setIsComment] = useState(true)
    const [btnStyle, setBtnStyle] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [pStyle, setPStyle] = useState()
    const [titleLength, setTitleLength] = useState(0)

  const [{ themeBody, themeInput, isDark }, toggleTheme] = useContext(ThemeContext);

  useEffect(() => {
    setBtnStyle({
        background: themeInput.btnBackground,
        color: themeInput.btnDisabledColor,
        border: themeInput.btnDisabledBorder
    })
  }, [themeInput])

  const onToggleComment = (checked) => {
      if (checked === true ) {
          setIsComment(false)
      } else {
        setIsComment(true)
      }
  }

    const limit = textLength => {
        setTitleLength(textLength)
        if (textLength <= 10 && textLength !== 0 ) {
            setBtnStyle({
                background: themeInput.btnBackground,
                border: themeInput.btnBorder,
                color: '#548cff'
            })
            setPStyle({
                color: themeInput.color
            })
            setDisabled(false)
        } else {
            setBtnStyle({
                background: themeInput.btnBackground,
                color: themeInput.btnDisabledColor,
                border: themeInput.btnDisabledBorder
            })
            setPStyle({
                color: 'red'
            })
            setDisabled(true)
        }
    }

    const submitStory = () => {
        
        const newStory = { title, story, comments, isComment };

        fetch('https://my-json-server.typicode.com/oooomair/hiddendb/stories/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newStory)
          })

        setTitle('')
        setStory('')
        setTitleLength(0)
    }

    return (
            <div className="share__main">
                <h1>SHARE</h1>
                <label htmlFor="title">Title</label>
                <input style={{color: themeInput.color, background: themeInput.background, border: themeInput.border}} type="text" name='title' value={title} onChange={(e) => {
                    limit(e.target.value.length)
                    setTitle(e.target.value)
                }} />
                <p style={pStyle} >{titleLength}/10</p>
                <label htmlFor="secret">Story</label>
                <textarea style={{color: themeInput.color, background: themeInput.background, border: themeInput.border}} name="secret"cols="30" rows="8" value={story} onChange={(e) => setStory(e.target.value)} ></textarea>
                <div className="share__submit-cont">
               
               <div className="share__comments-turn">
                <p>Turn off comments</p>
               <label className="switch">
                <input onClick={(e) => onToggleComment(e.target.checked)} className='input' type="checkbox"></input>
                <span style={{backgroundColor: themeInput.sliderbg}} className="slider round"></span>
                </label>
               </div>


                {disabled ?
                 <button disabled className="share__btn" style={btnStyle} onClick={submitStory}>
                 <span>Share it</span>
                </button> :
                <button style={btnStyle} onClick={submitStory}>
                    <span>Share it</span>
                </button>}
                </div>
            </div>
    )
}

export default ShareMain
