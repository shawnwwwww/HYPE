import React from 'react'
import './PurchaseButton.css';


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
                {props.retailer == 'amazon' ? <img 
                        className='retailerLogo'
                        id='amazonLogo' 
                        src='https://images.squarespace-cdn.com/content/v1/5e6bfe1cfc951858acc082e4/1590541944862-72QRJVWGZWYM8BX05QP7/ke17ZwdGBToddI8pDm48kPp6cz6ToV5R3LXjWYv_7-lZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIYhmyYS6DBLLjMcMD2Sw-51HQbqq5xI_dN1EXgg61A0I/white-amazon-logo-png-6.png'>
                    </img> : null}
                {props.retailer == 'bestbuy' ? <img 
                    className='retailerLogo'
                    id='bestbuyLogo' 
                    src='https://ucc3289d85a6b135b9da6b345cee.previews.dropboxusercontent.com/p/thumb/ABLFjhW--BH11iovfpnbYKOIfzr7Ahmj_EMdIFckjRokEBvO_T-zY1T4LV-JVhCpSzcFD3OePVFZP_D9-HHITQ3dhM7FHZ4I-iKXfskYfhtgpnuY0dUCeQNhTFSjkd058d5qHQUGtIyhzzn5P-o2TOiTkA-YE0Geo7k4PalNWNkPvGGTHrZFllDr0Hp0JdKUXWcB_paiolq_REIAuYGOLa-s-49gUWOUWCA-zmpzdL5tsb6YyuYORF7_h4Fe2gG4cbrO6d7GaEePXEeVMK--UG2K9BPSMfwwDewS_xH5RPZ0wZO7jHqOkkl_LELNLgX2Iu9cKCCCiBZLuWLr99yne5GUFx99_GVaeMxF5qjZvl8mNGf9oqo-Ynskfd5PNo-du5ZdZ0Es1XLnhRZUNKkwNty5/p.png?fv_content=true&size_mode=5'>
                </img> : null}
                {props.retailer == 'eshop' ? <img 
                    className='retailerLogo'
                    id='eshopLogo' 
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Nintendo_eShop_Switch_logo.svg/1024px-Nintendo_eShop_Switch_logo.svg.png'>
                </img> : null}
                {props.retailer == 'target' ? <img 
                    className='retailerLogo'
                    id='targetLogo' 
                    src='https://www.freepnglogos.com/uploads/target-png/target-icon-logo-png-transparent-pngpix-26.png'>
                </img> : null}
                {/* {props.retailer == 'gamestop' ? <img 
                    className='retailerLogo'
                    id='gamestopLogo' 
                    src='https://images.squarespace-cdn.com/content/v1/5e6bfe1cfc951858acc082e4/1590541944862-72QRJVWGZWYM8BX05QP7/ke17ZwdGBToddI8pDm48kPp6cz6ToV5R3LXjWYv_7-lZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIYhmyYS6DBLLjMcMD2Sw-51HQbqq5xI_dN1EXgg61A0I/white-amazon-logo-png-6.png'>
                </img> : null} */}

                <p id='arrowIcon'>></p>
            </div>
            

            {props.preorderBonus? <p id='preorderBonus'>Pre-order Bonus</p> : null}
                
        </div>
    )


}

export default PurchaseButton
