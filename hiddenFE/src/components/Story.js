import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { ThemeContext } from "../context/theme";

const Story = ({story}) => {

  const [{ themeBody, themeInput, isDark }, toggleTheme] = useContext(ThemeContext);
  
  return (
            <div className="stories__story">
                <Link style={{ textDecoration: 'none', color: themeBody.color }} to={`/eachStory/${story._id}`} >
                    <h2 className='stories__story-h2'>{story.title}</h2>
                    <p> {story.story.substring(0, 200)} ... </p>
                 </Link>
            </div>
    )
}

export default Story