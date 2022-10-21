import styled from "styled-components";
import bgImg from '../../assets/bg.webp'

export const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    padding: 0 3em;
    display: flex;
    flex-direction: column;

    span {
        margin-top: 1.5em;
        display: flex;
        align-items: center;

        a {
            color: #fff;
            text-decoration: none;
            margin-left: .5em;
        }

        h2 {
            color: #fff;
        }
    }

`;

export const Subcontainer = styled.div`
    width: 100%;
    min-width: 400px;
    height: 250px;
    border-radius: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: .5em;

    .card_container {
        height: 100%;
        width: 180px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
    }
`;

export const Card = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 15px;
    border: 1px solid #fff;
    background-image: url(${bgImg});
    background-size: cover;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: ${props => props.type === 'map' ? 'center' : 'flex-start'};



    img {
        min-height: 100%;
        max-width: 200%;
    }
`;