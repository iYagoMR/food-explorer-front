import { Container, Receipt, HambMenu } from './styles';

import { IoMenuSharp } from "react-icons/io5";
import { PiReceipt } from "react-icons/pi";
import { IoIosClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

import { Input } from '../../components/Input'
import { Brand } from '../Brand';

import { useState } from 'react';

export function Header(){
    const [ menu, setMenu ] = useState(false);

    const toggleMenu = () => {
        setMenu((open) => !open);
    };

    return(
        <Container>

            <div className="header">
                <HambMenu type="button" onClick={toggleMenu}>
                    <IoMenuSharp/> 
                </HambMenu>

                <Brand width={24} height={24} fontSize={21} pColor={"#065E7C"}/>

                <Receipt type="button">
                    <span>0</span>
                    <PiReceipt />
                </Receipt>
            </div>

            <div className={`menu ${menu ? "open" : "closed"}`}>
                <div className='top'>
                    <button>
                        <IoIosClose onClick={toggleMenu}/>
                    </button>
                    <h1> Menu</h1>
                </div>
                <div className='bottom'>
                    <Input 
                        placeholder="Search for dishes or ingredients"
                        icon={CiSearch}
                    />
                    <ul>
                        <li>Sign out</li>
                    </ul>
                </div>

            </div>
            
        </Container>
    )
}
