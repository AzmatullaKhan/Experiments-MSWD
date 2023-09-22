import React from 'react'
import iphone from './images/mobiles/Iphone.jpg'
import oneplus from './images/mobiles/Oneplus.jpg'
import redmi from './images/mobiles/Redmi.jpg'
import samsung from './images/mobiles/Samsung.jpg'
import MobileCards from './MobileCards'

const Mobiles = () => {
    
        const mobiles = [
        {
            "brand":"Iphone",
            "img" : iphone,
            "model" :"Iphone 14",
            "price" : "75000",
            "available":false
        },
        {
            "brand":"Samsung",
            "img" :  samsung,
            "model" :"Samsung A52",
            "price" : "85000",
            "available":true
        },
        {
            "brand":"OnePlus",
            "img" : oneplus,
            "model" :"OnePlus nord CE-2",
            "price" : "65000",
            "available":true
        },
        {
            "brand":"RedMi",
            "img" : redmi,
            "model" :"RedMi A20",
            "price" : "45000",
            "available":true
        }
    ]
  return (
    <div style={{display:'flex'}}> 
        {mobiles.map(
            (mobile) => <h6 key={mobile.brand} >
                 <MobileCards mobile={mobile}/>
            </h6>
        )}
    </div>
  )
}
 
export default Mobiles;