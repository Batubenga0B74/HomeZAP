import React from 'react';
import {Conteiner,Divinfor,Linhas} from "./style";
import img1 from "../../asset/oculos-3d.png"
import img2 from "../../asset/movies (1).png"
import img3 from "../../asset/popcorn.png"
import img4 from "../../asset/movies.png"

function Informe() {
  return (
    <>
        <Conteiner>
            <Divinfor>
                <img src={img1}/>
                <span>Em cartaz</span>
            </Divinfor>
            <Divinfor>
                <img src={img2}/>
                <span>cinema</span>
            </Divinfor>
            <Divinfor>
                <img src={img3}/>
                <span>Estreias</span>
            </Divinfor>
            <Divinfor>
                    <img src={img4}/>
                <span>Bilhete</span>
            </Divinfor>

           

        </Conteiner>
        <Linhas>
        <div></div>
        </Linhas>
       
    </>
  );
}

export default Informe;