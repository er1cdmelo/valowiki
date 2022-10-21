import { useEffect, useState } from "react";
import { Container, Grid, Card } from "./styles";
import { Link } from 'react-router-dom'

const Agents = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    if (!agents.length) {
      fetch("https://valorant-api.com/v1/agents?language=pt-BR")
        .then((res) => res.json())
        .then((data) => {
          data = data.data;
          console.log(data);
          setAgents(data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <Container>
      <h1>Agentes</h1>
      <Grid>
        {agents.length
          ? agents.map((a) =>
              a.isPlayableCharacter ? (
                <Link to={`/agent/${a.uuid}`}>
                  <div class="card_container">
                  <Card>
                    <img src={a.fullPortrait} alt="portrait" />
                  </Card>
                  <h3>{a.displayName}</h3>
                </div>
                </Link>
              ) : null
            )
          : null}
      </Grid>
    </Container>
  );
};

export default Agents;
