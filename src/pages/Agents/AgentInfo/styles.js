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

    .main-info {
      width: 100%;
      min-height: 100vh;
      z-index: 2;
      display: flex;
      flex-direction: column;

      .firstInfo {
        top: 0;
        position: relative;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        color: #fff;
        z-index: 2;

        img {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.47);
          margin-right: 1em;
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
        }
      }

      .skills {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;

        .grid {
          width: 100%;
          min-height: 450px;
          border: 1px solid #fff;
          display: flex;
          justify-content: center;
          gap: 1em;
          flex-wrap: wrap;

          .skill_card {
            min-height: 480px;
            max-width: 340px;
            min-width: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 0.5em;
            background: rgba(34, 34, 34, 0.71);
            border-radius: 15px;
            padding: 1em 0.5em;
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
