import React from 'react'
import './PurchaseButton.css';
import { ReactComponent as Chevron } from './icons/chevron-right.svg';




function PurchaseButton(props) {

    // if (props.retailer == "amazon") {
    //     return (
    //         <div className='purchaseButtonConatiner'>
    //                 <img 
    //                     id='amazonLogo' 
    //                     src='https://images.squarespace-cdn.com/content/v1/5e6bfe1cfc951858acc082e4/1590541944862-72QRJVWGZWYM8BX05QP7/ke17ZwdGBToddI8pDm48kPp6cz6ToV5R3LXjWYv_7-lZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIYhmyYS6DBLLjMcMD2Sw-51HQbqq5xI_dN1EXgg61A0I/white-amazon-logo-png-6.png'>
    //                 </img>
    //         </div>
    //     )
    // }else{
    //     return (
    //         <div>

    //         </div>
    //     )
    // }

    return (
        <div className='purchaseButtonConatiner'>
            <div className='purchaseButton'>
                {props.retailer === 'amazon' ? <img 
                        className='retailerLogo'
                        id='amazonLogo' 
                        src='/Resources/logo/amazon.png'
                        alt="Amazon Logo">
                    </img> : null}
                {props.retailer === 'bestbuy' ? <img 
                    className='retailerLogo'
                    id='bestbuyLogo' 
                    src='/Resources/logo/bestbuy.png'
                    alt="Best Buy Logo">
                </img> : null}
                {props.retailer === 'eshop' ? <img 
                    className='retailerLogo'
                    id='eshopLogo' 
                    src='/Resources/logo/eshop.png'
                    alt="Nintendo eShop Logo">
                </img> : null}
                {props.retailer === 'target' ? <img 
                    className='retailerLogo'
                    id='targetLogo' 
                    src='/Resources/logo/target.png'
                    alt="Target Logo">
                </img> : null}
                {props.retailer === 'gamestop' ? <img 
                    className='retailerLogo'
                    id='gamestopLogo' 
                    src='/Resources/logo/gamestop.png'
                    alt="GameStop Logo">
                </img> : null}

                {/* <p id='arrowIcon'>></p> */}
                {/* <i class="bx chevron-right"></i> */}
                {/* <img className='chevron' src={chevron} alt='chevron right' /> */}
                <Chevron stroke="#FFFFFF"/>
            </div>
            

            {props.preorderBonus? <p id='preorderBonus'>Pre-order Bonus</p> : null}
                
        </div>
    )


}

export default PurchaseButton
