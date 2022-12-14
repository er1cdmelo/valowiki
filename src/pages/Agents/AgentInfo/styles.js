import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

  .wrapper {
    padding: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;

    /* create a media query for mobile devices */
    @media (max-width: 768px) {
      padding: 2em 1em;
    }

    .main-info {
      width: 100%;
      min-height: 100vh;
      z-index: 2;
      display: flex;
      flex-direction: column;
      position: relative;

        button {
          top: -1%;
          left: 0
        }

      .firstInfo {

        top: 35px;
        position: relative;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        color: #fff;
        z-index: 2;

        .play {
          padding: .2em;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #fff;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          font-size: 1.3em;

          &:hover {
            background: #f5f5f5;
          }
        }

        img {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.47);
          margin-right: 1em;

          @media (max-width: 450px) {
            width: 84px;
            height: 84px;
          }
        }

        .text {
          width: 60%;

          span {
            display: flex;
            align-items: center;

            h3 {
              margin-right: 0.5em;
              color: #fff;
            }

            img {
              height: 20px;
              width: 20px;
            }
          }
        }
      }

      .description {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        color: #fff;
        margin: 5em 0 2em;

        h1 {
          font-size: 1.5em;
          margin: 0.5em;
        }

        p {
          background: rgba(34, 34, 34, 0.71);
          border-radius: 15px;
          padding: 2.5em;
          font-size: 1.2em;

          @media (max-width: 450px) {
            font-size: 1em;
          }
        }
      }

      .skills {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;

        h1 {
          margin: 0.5em;
        }

        .grid {
          width: 100%;
          min-height: 450px;
          display: flex;
          justify-content: center;
          gap: 1em;
          flex-wrap: wrap;

          .skill_card {
            
            max-width: 340px;
            min-width: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 0.5em;
            background: rgba(34, 34, 34, 0.71);
            border-radius: 15px;
            padding: 1em .5em 2em;
            animation: card 0.5s ease-in-out;
            
            /* create a animation for the card */
            /* create a keyframe for the animation */
            @keyframes card {
              0% {
                opacity: 0;
                transform: translateY(100px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @media (max-width: 700px) {
              min-height: 350px;
              max-width: 280px;
              min-width: 200px;

              font-size: 0.8em;
            }


            @media (max-width: 550px) {
              max-width: 100%;
              min-height: 300px;
              justify-content: space-evenly;
            }
          }
        }
      }
    }

    .background {
      position: absolute;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      overflow-x: hidden;
      min-height: 100vh;
      width: 100%;
      top: 20%;

      .bg {
        z-index: 1;
        opacity: 0.4;
        max-height: 90vh;
        margin: 4em 0;
        position: absolute;
        right: 0;
        left: 0;
        margin-left: auto;
        margin-right: auto;
      }

      .pt {
        max-width: 80%;
        z-index: 2;
        transform: translateX(20%);

        @media (max-width: 550px) {
          max-width: 130%;
        }
      }
      @media (max-width: 400px) {

        .bg {
          max-height: 65vh;
        }

        .pt {
          max-width: 200%;
          transform: translateX(40%)
        }
      }
    }
  }
`;

export const SkillIcon = styled.img`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  border: ${(props) => (props.ult ? "4px solid #ffae35" : "4px solid #fff")};
  object-fit: cover;
`;

export const Wrapper = styled.div`
  background: ${(props) =>
    `linear-gradient(to bottom, #${props.zero}, #${props.one})`};
`;
