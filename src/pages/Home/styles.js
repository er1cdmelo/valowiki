import styled from "styled-components";
import bgImg from '../../assets/bg.webp'

export const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    padding: 0 3em;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;

    @media (max-width: 650px) {
        padding: 0 .5em;
    }

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
    height: 260px;
    border-radius: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: .5em;
    margin: 1.5em 0;
    overflow-x: scroll;
    overflow: hidden;
    padding: 0 2px 0;

    /* Customize scroll bar */
    ::-webkit-scrollbar {
        width: 1px;
        height: 5px;
        background-color: #888;
    }

    /* Thumb */
    ::-webkit-scrollbar-thumb {
        background: #f73648;
    }
    

    .wrapper {
        display: flex;
        gap: 1em;
        height: 100%;
    }

    a {
        max-height: 100%;
        text-align: center;
        text-decoration: none;
        color: #fff;
    }

    .card_container {
        height: 100%;
        max-height: 100%;
        width: 180px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;

        h3 {
            transition: .3s;
        }

        &:hover {
            .card {
                border: 1px solid #222fff
            }

            h3 {
                color: #222fff;
            }
        }
    }

    @media (max-width: 650px) {
        max-width: 100%;
        

        .card_container {
            height: 250px;
            width: 180px;

            h3 {
                font-size: 1em;
            }
        }
    }

    @media (max-width: 1030px) {
        overflow-x: scroll;
    }

    #mapCard {
        
        height: 100%;

        img {
            height: 100%;
        }
    }
`;

export const Card = styled.div`
    height: 90%;
    max-width: 100%;
    border-radius: 15px;
    border: 2px solid #fff;
    background-image: url(${bgImg});
    background-size: cover;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: ${props => props.type === 'map' ? 'center' : 'flex-start'};
    transition: .3s;

    img {
        min-height: 100%;
        max-width: 180%;
        object-fit: cover;
    }
`;
