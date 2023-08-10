import styled from 'styled-components';

export const ItemContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h3 {
        font-size: 32px;
        color: #fafafa;
    }

    p {
        font-size: 18px;
        color: #fafafa60;
        margin-bottom: 10px;
    }

    a {
        font-size: 16px;
        font-weight: bold;
        color: #fafafa80;
        text-decoration: none;
        margin-bottom: 8px;

        &: hover {
            color: #fafafa;
        }
    }

    button {
        font-size: 14px;
        font-weight: bold;
        color: #cc0000;
        margin-bottom: 5px;
        border: none;
        background: transparent;
        cursor: pointer;

        &: hover {
            color: #ee0000;
        }
    }

    hr {
        border: 1px solid #fafafa40;
        margin: 10px 0 20px 0;
        width: 100%;
    }
`;
