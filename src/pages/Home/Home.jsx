import { Container, Subcontainer, Card } from "./styles";
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Home = () => {

  const [agents, setAgents] = useState([])
  const [maps, setMaps] = useState([])
  const urlAgents = 'https://valorant-api.com/v1/agents?language=pt-BR'
  const urlMaps = 'https://valorant-api.com/v1/maps?language=pt-BR'

  // Agents fetch
  useEffect(() => {
    fetch(urlAgents)
    .then(res => res.json())
    .then(data => {
      if(!agents.length) {
        data = data.data
        console.log(data)
        setAgents(data)
      }
    })
    .catch(err => console.log(err))
  }, [])

  // Maps fetch
  useEffect(() => {
    fetch(urlMaps)
    .then(res => res.json())
    .then(data => {
      if(!maps.length) {
        data = data.data
        console.log(data)
        setMaps(data)
      }
    })
    .catch(err => console.log(err))
  }, [])
  

  return (
    <Container>
      <span><h2>Agentes</h2> <Link to='/agents'>Ver tudo</Link> </span>
      <Subcontainer>
        {agents.length ? (
          agents.map((a, index) => (
            index < 5 ? (
              <div class='card_container'>
                <Card type='agent'>
                  <img src={a.fullPortrait} alt="portrait" />
                </Card>
                <h3>{a.displayName}</h3>
              </div>
            ) : null
          ))
        ) : null}
      </Subcontainer>
      <span><h2>Mapas</h2> <Link to='/maps'>Ver tudo</Link> </span>
      <Subcontainer>
        {maps.length ? (
          maps.map((m, index) => (
            index < 5 ? (
              <div class='card_container'>
                <Card type='map'>
                  <img src={m.splash} alt="splash" className="splash"/>
                </Card>
                <h3>{m.displayName}</h3>
              </div>
            ) : null
          ))
        ) : null}
      </Subcontainer>
    </Container>
  );
};

export default Home;
