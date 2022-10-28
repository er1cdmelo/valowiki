import styled from "styled-components";

import bgImg from "../../../assets/bg.webp";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 3.5em 3em;

  button {
    top: 3%;
    
  }

  /* create a media query for mobile devices */
    @media (max-width: 650px) {
        padding: 2em 1em;
        justify-content: space-evenly;
        gap: 1em;

        button {
          left: 1em;
        }
    }
`;

export const FirstInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 50vw;
  color: #fff;

  h1 {
    margin: 0;
  }

  span {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      height: 30vw;
      width: 30vw;
      background-image: url(${bgImg});
      background-size: cover;
      background-position: center;
    }

    h3 {
        color: #B9B9B9;
    }
  }

    @media (max-width: 650px) {
        flex-direction: column;
        align-items: center;

        span {
            width: 100%;

            img {
                height: 70vw;
                width: 70vw;
            }
        }
    }

`;

export const SecondInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #fff;
    width: 100%;
    height: 50vw;
    color: #fff;
    margin-top: 1vw;
    gap: 2em;
    overflow: hidden;

    img {
        min-width: 100%;
        min-height: 100%;
        object-fit: cover;
    }
`;