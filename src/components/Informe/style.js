import styled from "styled-components";
export const Conteiner = styled.div`
    display: flex;
    width: 100%;
    height: 30vh;
    justify-content: center;
    align-items: center;

   
`;
export const Divinfor = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 28px;
    img{
        width: 60px;
        fill: #fff;
    }
    span{
        margin-bottom: 45px;
        color: #fff;
    }
`;
export const Line = styled.div`
    height: 10vh;
    width: 100%;
    background-color: yellow;
`;
export const Linhas = styled.div`
    width: 100%;
    height: 1vh;
    transform: translateY(0);
    background-image: linear-gradient(to right, blue, red, green);
`;