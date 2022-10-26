import styled from "styled-components";

export const Container = styled.section`
    width: 100vh;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
`;

export const Loader = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 5px solid #fff;
    border-top-color: #000;
    animation: spin 1s linear infinite;

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;