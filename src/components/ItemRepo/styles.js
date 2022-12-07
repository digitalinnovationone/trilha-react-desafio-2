import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }

    a.remover {
        color: #FF0000;
        margin-top:20px;
    }

    hr {
        color: #FAFAFA60;
        margin: 15px 0;
    }

    button {
        background-color: #FAFAFA;
        border: 1px solid #FAFAFA;
        border-radius: 20px;

        height: 30px;
        width: 10%;

        margin-top: 10px;

        &: hover {
            background-color: #FAFAFA40;
            cursor: pointer;
        }
    }
`