import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Errorpage from './Errorpage'
import Homepage from './Homepage'
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import GlobalStyle from './GlobalStyle';

const lightTheme ={
  baseColor: "#0f75f2",
  textColor1: "#4F5B6A",
  textColor: "#808993",
  bgColor: "rgb(250, 250, 250)",
  bgColor1: "rgb(255,255,255)",
  shadowColor: "rgba(6, 23, 44,.1)",
  shadowColor1: "rgb(6, 23, 44,.05)",
  pSize: "14px"
};

const darkTheme ={
  baseColor: "#0f75f2",
  textColor: "#8892b0",
  textColor1: "#ccd6f6",
  bgColor: "#0a192f",
  bgColor1: "#112240",
  shadowColor: "rgba(6, 23, 44,.2)",
  shadowColor1: "rgb(6, 23, 44,.1)",
  pSize: "14px"
};


export default function App() {
  
  const [theme, setTheme] = useState("light");

  function toggleTheme(){
    if(theme === "dark"){
      setTheme("light");
    }else{
      setTheme("dark");
    }
  }
  
  return (
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
          <GlobalStyle/>
          
          <>
            <Header toggleTheme={toggleTheme} />
            <Router>
              <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/*' element={<Errorpage/>}/>
              </Routes>
            </Router>
          </>

      </ThemeProvider>
  )
}
