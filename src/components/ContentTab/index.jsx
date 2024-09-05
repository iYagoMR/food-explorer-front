import { Container } from './styles';

import { IoIosArrowForward } from "react-icons/io";

import { useState } from 'react';

export function ContentTab({tabNames, tabContents, initialActiveIndex = 0}){
    // State to manage the active tab index
    const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

    // Function to handle tab switching
    const handleTabClick = (index) => {
        setActiveIndex(index); // Set the active index to the clicked tab
    };

    return(
        <Container>
            <div className='tab-header'>
                {
                    tabNames.map((item, index) => 
                        <button 
                            key={item.key}
                            className={index === activeIndex ? 'active-tab' : ''}
                            onClick={() => handleTabClick(index)}
                        >
                            {item.name}
                        </button>
                    )
                }
            </div>
            <div className='tab-wrapper'>
                {/* render according to the active tab */}
                {tabContents[activeIndex]}
            </div>
        </Container>
    )
}