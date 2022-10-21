import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, SkillIcon, Wrapper } from "./styles";

const AgentInfo = () => {
  const { id } = useParams();
  const [agent, setAgent] = useState({});

  useEffect(() => {
    console.log("ok");
    if (agent) {
      fetch(`https://valorant-api.com/v1/agents/${id}?language=pt-BR`)
        .then((res) => res.json())
        .then((data) => {
          data = data.data;
          console.log(data);
          const voice = new Audio(data.voiceLine.mediaList[0].wave);
          voice.play();
          setAgent(data);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  return (
    <Container>
      {agent.displayName ? (
        <Wrapper className="wrapper" zero={agent.backgroundGradientColors[0].substr(0, 6)} one={agent.backgroundGradientColors[3].substr(0,6)}>
          <div className="background">
            <img src={agent.background} alt="bg" className="bg" />
            <img src={agent.fullPortrait} alt="pt" className="pt" />
          </div>
          <div className="main-info">
            <div className="firstInfo">
              <img src={agent.displayIcon} alt="icon" />
              <div className="text">
                <h1>{agent.displayName}</h1>
                <span>
                  <h3>{agent.role.displayName}</h3>{" "}
                  <img src={agent.role.displayIcon} alt="roleIcon" />
                </span>
              </div>
            </div>
            <section className="description">
              <h1>DESCRIÇÃO</h1>
              <p>{agent.description}</p>
            </section>
            <section className="skills">
              <h1>HABILIDADES</h1>
              <div className="grid">
                {agent.abilities.map((ab) =>
                  ab.displayIcon ? (
                    <div className="skill_card">
                      <SkillIcon src={ab.displayIcon} alt="skillIcon" ult={ab.slot === 'Ultimate' ? true : false} />
                      <h2>{ab.displayName}</h2>
                      <p>{ab.description}</p>
                    </div>
                  ) : null
                )}
              </div>
            </section>
          </div>
        </Wrapper>
      ) : null}
    </Container>
  );
};

export default AgentInfo;
