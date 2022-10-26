import { useEffect, useState } from "react";
import { Container, Grid, Card } from "./styles";
import { Link, useLocation } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import BackButton from "../../components/BackButton/BackButton";

const Agents = () => {
  const [agents, setAgents] = useState([]);

  const location = useLocation();

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
      <div className="title">
        {
          // if the location is not home, show the back button
          location.pathname !== "/" ? <BackButton /> : null
        }
        <h2>Agentes</h2>
      </div>
      <Grid>
        {agents.length ? (
          agents.map((a) =>
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
        ) : (
          <Loading />
        )}
      </Grid>
    </Container>
  );
};

export default Agents;
