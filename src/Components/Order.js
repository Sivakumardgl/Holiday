// import React from 'react'

// export default function Order() {
//   return (
//     <div className='book'>
//      <h1  id='booking'>Booking your Recidancy</h1>
//      <img src='https://lh3.googleusercontent.com/p/AF1QipMIx6igQGGWiRsJvYIcivm-CBgYf0h8XxjwuHLb=s680-w680-h510'></img>
//      <h1>Rent rs.1000</h1>
//      <button onClick={()=>alert('Thanks for your Booking')}>Booking</button>
//      <img src='https://www.booking.com/hotel/in/jc-residency.en-gb.html?aid=356980&label=gog235jc-1DCAsobEIMamMtcmVzaWRlbmN5SDNYA2hsiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuAL6veGxBsACAdICJDliOTdjYzFiLWJmZTYtNGQwZC1hODdhLTcxNjcxMTlkZDY1MtgCBOACAQ&sid=da204c171803028c2df46efbef5ca43a&dist=0&keep_landing=1&sb_price_type=total&type=total&#'></img><br></br>
//       <img src=''></img>
//       <img src=''></img>
//       <img src=''></img>
//     </div>
//   )
// }


import React from 'react'
import './Order.css'
export default function Order() {
  return (
    <div className='book'>
     <h1  id='booking'>Booking your Recidancy</h1>
     <img id='image1'src='https://lh3.googleusercontent.com/p/AF1QipMIx6igQGGWiRsJvYIcivm-CBgYf0h8XxjwuHLb=s680-w680-h510'></img>
     <h1>Rent rs.1000</h1>
     <button onClick={()=>alert('Thanks for your Booking')}>Booking</button>
     <img id='image1' src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/483216917.jpg?k=2d51dd6982cb695728b4049ced055cac8b7ee88ac08606026ca33aca4fb6cf57&o=&hp=1' width={330} height={500}></img><br></br>
     <h1>Rent rs.2000</h1>
     <button onClick={()=>alert('Thanks for your Booking')}>Booking</button>
     
     
    
    </div>
  )
}

