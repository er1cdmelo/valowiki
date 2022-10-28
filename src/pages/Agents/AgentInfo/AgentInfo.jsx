import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import BackButton from "../../../components/BackButton/BackButton";
import { Container, SkillIcon, Wrapper } from "./styles";
import { selectLanguage } from "../../../redux/langSlice";
import { useSelector } from "react-redux";
// import a play icon svg from react-icons
import { AiOutlinePlayCircle } from "react-icons/ai";

const AgentInfo = () => {
  const { id } = useParams();
  const [agent, setAgent] = useState({});
  const location = useLocation();
  const language = useSelector(selectLanguage); // get the language from the redux store

  window.scrollTo(0, 0)

  useEffect(() => {
    console.log("ok");
    if (agent) {
      fetch(`https://valorant-api.com/v1/agents/${id}?language=${language}`) // add the language to the fetch url
        .then((res) => res.json())
        .then((data) => {
          data = data.data;
          console.log(data);
          const voice =data.voiceLine.mediaList[0].wave ? new Audio(data.voiceLine.mediaList[0].wave) : null; // create a new Audio object with the voice line url
          voice && voice.play(); // if the voice line exists, play it
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
          {
          // if the location is not home, show the back button
          location.pathname !== "/" ? <BackButton /> : null
          }
            <div className="firstInfo">
              <img src={agent.displayIcon} alt="icon" />
              <div className="text">
                <h1>{agent.displayName}</h1>
                <span>
                  <h3>{agent.role.displayName}</h3>{" "}
                  <img src={agent.role.displayIcon} alt="roleIcon" />
                <button onClick={() => {
                  const voice = new Audio(agent.voiceLine.mediaList[0].wave);
                  voice.play();
                }} className="play">
                  <AiOutlinePlayCircle />
                </button>
                </span>
              </div>
            </div>
            <section className="description">
              <h1>DESCRIPTION</h1>
              <p>{agent.description}</p>
            </section>
            <section className="skills">
              <h1>ABILITIES</h1>
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
