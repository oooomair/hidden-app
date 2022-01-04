import './styles/styles.css';
import Home from './components/Home';
import Share from './components/Share';
import Stories from './components/Stories';
import { Routes, Route } from 'react-router-dom'
import EachStory from './components/EachStory';
import { useContext } from "react";
import { ThemeContext } from "./context/theme";
import { useState } from 'react/cjs/react.development';

function App() {

  const [{ themeBody, themeInput, isDark }, toggleTheme] = useContext(ThemeContext);

  return (
    <div className="App" style={{backgroundColor: themeBody.backgroundColor, color: themeBody.color}}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/share' element={<Share/>}/>
        <Route path='/stories' element={<Stories />}/>
        <Route path='/eachStory/:id' element={<EachStory/>}/>
      </Routes>
    </div>
  );
}

export default App;
