import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    display: flex;
    border: 1px solid #fff;
    border-radius: 20px;
    margin: 20px;
    padding: 10px;
    align-items: center;
    justify-content: space-between;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
    }

    .buttonRepo {
    }

    .infoRepo {
        padding: 5px 10px;
    }

    .seeRepo {
        text-align: center;
        margin: 5px 0;
        display: block;
        width: 130px;
        padding: 3px 10px;
        background-color: #495276;
        border: 2px solid #b8b8b8;
        border-radius: 10px;
        color: #fff;
    }

    .remover {
        text-align: center;
        margin: 5px 0;
        display: block;
        width: 130px;
        padding: 3px 10px;
        background-color: #c27a53;
        border: 2px solid #b8b8b8;
        border-radius: 10px;
        color: #fff;
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`