import React, {useState} from 'react'
import Select from 'react-select'
import './Dropdown.css';



  

function Dropdown(props) {
    /* if option is platform, then use platform 
    as default value */
    /* if option is form, then use form 
    as default value */
    var platform=[
        {
            value: 'switch', 
            label: "Switch"
        },
        {
            value: 'ps4', 
            label: "PS4"
        },
        {
            value: 'ps5', 
            label: "PS5"
        },
        {
            value: 'xboxxs', 
            label: "Xbox X|S"
        },
        {
            value: 'xboxone', 
            label: "Xbox One"
        },
    ];


    return (
        <div>
            <Select className='react-select-container' classNamePrefix="react-select"
                isMulti 
                options={platform} 
                defaultValue={[platform[0]]}
            />

        </div>
    )
}

export default Dropdown
