import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Agents from './pages/Agents/Agents'
import Maps from './pages/Maps/Maps'
import AgentInfo from "./pages/Agents/AgentInfo/AgentInfo";
import MapInfo from "./pages/Maps/MapInfo/MapInfo";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { selectLanguage } from "./redux/langSlice";


function App() {

  const AppStyled = styled.div`
    background: linear-gradient(180deg, #F73648 -15.19%, #040D1D 105.86%);
  `;

  const lang = useSelector(selectLanguage); // get the language from the store
  // create a useEffect that when the language changes, it reenders the app with the new language
  useEffect(() => {
    console.log(lang);
  }, [lang]); // add the lang variable to the dependency array so that the useEffect runs when the language changes


  return (
    <Router>
        <Navbar />
        <AppStyled>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/agents' element={<Agents />} />
          <Route path='/maps' element={<Maps />} />
          <Route path='/agent/:id' element={<AgentInfo />} />
          <Route path='/map/:id' element={<MapInfo />} />
        </Routes>
        </AppStyled>
      </Router>
  );
}

export default App;
