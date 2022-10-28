import styled from "styled-components";
import bgImg from '../../assets/bg.webp'

export const Container = styled.div`
    width: 100%;
    padding: 0 3em;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    a {
        text-decoration: none;
    }

    /* Create a media query for 457px */
    @media (max-width: 457px) {
        padding: 0 1em;
    }

    .title {
        width: 100%;
        margin: 1.5em 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
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

    /* create a media query for 460px decreasing minmax grid repeat */
    @media (max-width: 460px) {
        grid-template-columns: repeat(auto-fill, minmax(80px, 160px));
    }

    .card_container {
        height: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
    }
`;

export const Card = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-image: url(${bgImg});
    background-size: cover;
    overflow: hidden;
    border-radius: 15px;
    border: 1px solid #fff;
    
    img {
        min-height: 100%;
        max-width: 200%;
    }
`;