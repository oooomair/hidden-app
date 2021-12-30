import StoriesNavbar from './StoriesNavbar'
import StoriesMain from './StoriesMain'
import useFetch from './useFetch'
import { ThemeContext } from "../context/theme";
import { useState, useContext } from 'react';
import Loader from './Loader';

const Stories = () => {

    const [search, setSearch] = useState('')
    const [{ themeBody, themeInput, isDark }, toggleTheme] = useContext(ThemeContext);
    
    const {data: stories, isPending, error} = useFetch(`https://my-json-server.typicode.com/oooomair/hiddendb/stories?q=${search}`)

    const changeSearch = (searchValue) => {
        setSearch(searchValue)
    }

    return (
        <div className='stories'>
            <StoriesNavbar/>
            <div className="stories__main">
            <h1>Stories</h1>
            <input onChange={(e) => changeSearch(e.target.value) } value={search} style={{color: themeInput.color, background: themeInput.background, border: themeInput.border}} placeholder='Search for a term' type="text" />
            { error && <div>{error}</div> }
            { isPending && <Loader/> }
            { stories && <StoriesMain stories={stories}/>}
            </div>
        </div>
    )
}

export default Stories
