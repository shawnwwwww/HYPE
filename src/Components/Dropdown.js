import React, {useState} from 'react'
import Select from 'react-select'
import './Dropdown.css';
import ReactDOM from "react-dom";



function Dropdown(props) {

    const isPlatform = props.isPlatform;

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

    var form=[
        {
            value: 'physical', 
            label: "Physical"
        },
        {
            value: 'digital', 
            label: "Digital"
        },
        {
            value: 'dlc', 
            label: "DLC"
        },
    ];


    if (isPlatform){
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
    return (
        <div>
            <Select className='react-select-container' classNamePrefix="react-select"
                isMulti 
                options={form} 
                defaultValue={[form[0],form[1],form[2]]}
            />

        </div>
    )

    
}

export default Dropdown
