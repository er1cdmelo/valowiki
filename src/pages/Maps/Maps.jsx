import { useEffect, useState } from "react";
import { Container, Grid, Card } from "./styles";

const Maps = () => {
  const [maps, setMaps] = useState([]);

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
      <h1>Mapas</h1>
      <Grid>
        {maps.length
          ? (maps.map((m) =>
              (
                <div class="card_container">
                  <Card img={m.splash}>
                    
                  </Card>
                  <h3>{m.displayName}</h3>
                </div>
              )
          ))
          : null}
      </Grid>
    </Container>
  );
};

export default Maps;
