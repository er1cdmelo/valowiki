import { useEffect, useState } from "react";
import { Container, Grid, Card } from "./styles";
import BackButton from "../../components/BackButton/BackButton";
import { useLocation, Link } from "react-router-dom";

const Maps = () => {
  const [maps, setMaps] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (!maps.length) {
      fetch("https://valorant-api.com/v1/maps?language=pt-BR")
        .then((res) => res.json())
        .then((data) => {
          data = data.data;
          console.log(data);
          setMaps(data);
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
        <h2>Mapas</h2>
      </div>
      <Grid>
        {maps.length
          ? maps.map((m) => (
              <Link to={`/map/${m.uuid}`}>
                <div class="card_container">
                  <Card img={m.splash}></Card>
                  <h3>{m.displayName}</h3>
                </div>
              </Link>
            ))
          : null}
      </Grid>
    </Container>
  );
};

export default Maps;
