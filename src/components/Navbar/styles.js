import styled from "styled-components";

export const Nav = styled.header`
    background-color: #F73648;
    width: 100%;
    padding: 1em 2em;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 100px;
        cursor: pointer;
        transition: .4s;

        &:hover {
            transform: scale(1.05)
        }
    }
`;