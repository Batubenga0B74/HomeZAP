import React from 'react';
import angola from "../../asset/ao_flag.svg"
import mz from "../../asset/mz_flag.svg"
import { ConTeiner,Entrada,LanguaGe} from "./style"
function TopHeader() {
  return <>
            <ConTeiner>

            <select name='select' className='selec'>
                <option value="valor1" selected>particular</option>
                <option value="valor1">comum</option>
            </select>

            <select name='select' className='selec'>
                 <img src={angola} />
                <option value="valor1" className='V1'> Angola</option>
                <img src={mz} />
                <option value="valor2" selected>Mozambique</option>
            </select>
        
            </ConTeiner>

        </>;
}

export default TopHeader;