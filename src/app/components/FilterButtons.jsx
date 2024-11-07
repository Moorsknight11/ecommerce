import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { FaArrowsAltV } from 'react-icons/fa';
import { FaFilter } from 'react-icons/fa';

const FilterButtons = () => {
    const items = [
        { name: 'Suggestions', chevrons: true },
        { name: 'Filter', chevrons: false }

    ];
    return (
        <div style={{display:"flex",width:"100%",justifyContent:"center",alignItems:"center"}}>
            {items.map((item, index) => (<div key={item.index} style={{border:"grey solid 2px",display:"flex",width:"100%",justifyContent:"center",alignItems:"center"}}>
                <div style={{display:"flex",width:"100%",justifyContent:"center",alignItems:"center"}}>{item.chevrons ? (
               <div style={{ display: 'inline-block', transform: 'rotate(90deg)', transformOrigin: 'center' }}>
               <FontAwesomeIcon color="orange" icon={faArrowRightArrowLeft}/>
             </div>
                ) : (
                    <FaFilter color="orange" />
                )}<span style={{marginLeft:"10px"}}>{item.name}</span></div>
            </div>))}
        </div>
    )
}

export default FilterButtons