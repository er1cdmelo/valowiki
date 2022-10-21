import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Agents from './pages/Agents/Agents'
import Maps from './pages/Maps/Maps'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AgentInfo from "./pages/Agents/AgentInfo/AgentInfo";
import styled from "styled-components";

function App() {

  const AppStyled = styled.div`
    background: linear-gradient(180deg, #F73648 -15.19%, #040D1D 105.86%);
  `;

  return (
    <Router>
        <Navbar />
        <AppStyled>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/agents' element={<Agents />} />
          <Route path='/maps' element={<Maps />} />
          <Route path='/agent/:id' element={<AgentInfo />} />
        </Routes>
        </AppStyled>
      </Router>
  );
}

export default App;
