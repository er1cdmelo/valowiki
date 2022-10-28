import styled from "styled-components";

// style the language select component with styled components
export const LangWrapper = styled.select`
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #000;
    font-size: 1rem;
    padding: .5rem;
    width: 100px;
    height: 40px;
    /* make this component absolute and position it to not fully the right */
    position: absolute;
    right: 5px;
`;


// export the styled component
export default LangWrapper;