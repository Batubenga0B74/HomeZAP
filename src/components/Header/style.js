import styled from "styled-components";
export const Conteiner = styled.header`
    display: flex;
    width: 100%;
    height: 10vh;
    justify-content: space-around;
    align-items: center;
    background-color: #000;
`;
export const Logo = styled.div`
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    img{
        width: 195px;

    }
`;
export const Lista = styled.ul`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    
`;
export const Items = styled.li`
    list-style: none;
     cursor: pointer;
`;
export const Ligacoes = styled.a`
    margin-right: 20px;
    color: #ffff;
    text-decoration: none;
`;