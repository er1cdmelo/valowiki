import styled from "styled-components";
import bgImg from '../../assets/bg.webp'

export const Container = styled.div`
    width: 100%;
    padding: 0 3em;
    display: flex;
    flex-direction: column;

    h1 {
        margin-top: 1em;
        color: #fff;
    }

    .title {
        width: 100%;
        margin: 1.5em 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
    }

    /* Create a media query for 460px decreasing lateral padding */
    @media (max-width: 460px) {
        padding: 0 1em;
    }
`;

export const Grid = styled.div`
    width: 100%;
    max-width: 1000px;
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(80px, 180px));
    gap: .2em;
    justify-content: space-between;

    .card_container {
        height: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
    }

    @media (max-width: 460px) {
        grid-template-columns: repeat(auto-fill, minmax(80px, 160px));
    }
`;

export const Card = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-image: ${props => props.img ? `url(${props.img})` : `url(${bgImg})`};
    background-position: center;
    background-size: cover;
    overflow: hidden;
    border-radius: 15px;
    border: 1px solid #fff;
    
    img {
        min-height: 100%;
        max-width: 200%;
    }
`;