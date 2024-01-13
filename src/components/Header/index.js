import React from 'react';
import   {Conteiner,Logo,Lista,Items,Ligacoes} from "./style"
import imgOne from "../../asset/logo.svg"
function Header() {
  return (
    <>
        <Conteiner>
                <Logo>
                         <img src={imgOne}/>
                </Logo>
                <Lista>
                        <Items>
                        <Ligacoes>
                        Zap fibra
                        </Ligacoes>
                        </Items>
                        <Items>
                        <Ligacoes>
                            Zap satélite
                        </Ligacoes>
                        </Items>
                        <Items>
                        <Ligacoes>
                             Zap on
                        </Ligacoes>
                        </Items>
                        <Items>
                        <Ligacoes>
                            Zap cinema
                        </Ligacoes>
                        </Items>
                        <Items>
                        <Ligacoes>
                            TV
                        </Ligacoes>
                        </Items>
                        <Items>
                        <Ligacoes>
                            Ajuda
                        </Ligacoes>
                        </Items>

                </Lista>
        </Conteiner>
    
    </>
  );
}

export default Header;