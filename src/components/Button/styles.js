import styled from 'styled-components';

export const ButtonContainer = styled.button`
    background-color: #fafafa;
    border: 1px solid #fafafa;
    border-radius: 20px;
    padding: 20px;
    width: 80%;
    font-size: 20px;
    transition: all 0.2s linear;

    &: hover {
        background-color: #fafafa40;
        cursor: pointer;
    }
`;
