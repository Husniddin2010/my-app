import React from 'react'
import OrderLest from '@/component/OrderLest'

function orderLest() {
  return (
    <div style={{display:'flex'}}>
    <div style={{marginRight:"40px",paddingLeft:"50px",paddingTop:"30px", width:"300px", border: "2px rgb(118, 115, 118) solid", background: "rgb(250, 239, 239)"}}>
      <div className="modern">
        <img src='/Sedap..png'/>
        <p style={{color:' #B9BBBD',marginTop: '10px'}} >Modern Admin Dashboard</p>
      </div>
      <ul>
        <li style={{display:"flex", alignItems:"center", marginTop:"40px"}}>
          <img src='Dashboard.png'/> 
          <a href='http://localhost:3000/sedap' style={{paddingLeft:"22px"}}>Dashboard</a>
        </li>
        <li style={{display:"flex", alignItems:"center", marginTop:"25px"}}>
          <img src='Order List.png'/> 
          <a href='http://localhost:3001/orderLest' style={{paddingLeft:"22px"}}>Order List</a>
        </li>
        <li style={{display:"flex", alignItems:"center", marginTop:"25px"}}>
          <img src='Order Detail.png'/> 
          <a style={{paddingLeft:"22px"}}>Order Detail</a>
        </li>
        <li style={{display:"flex", alignItems:"center", marginTop:"25px"}}>
          <img src='Customer.png'/> 
          <a style={{paddingLeft:"22px"}}>Customer</a>
        </li>
        <li style={{display:"flex", alignItems:"center", marginTop:"25px"}}>
          <img src='Analytics.png'/> 
          <a style={{paddingLeft:"22px"}}>Analytics</a>
        </li>
        <li style={{display:"flex", alignItems:"center", marginTop:"25px"}}>
          <img src='Reviews.png'/> 
          <a style={{paddingLeft:"22px"}}>Reviews</a>
        </li>
        <li style={{display:"flex", alignItems:"center", marginTop:"25px"}}>
          <img src='Foods.png'/> 
          <a style={{paddingLeft:"22px"}}>Foods</a>
        </li>
        <li style={{display:"flex", alignItems:"center", marginTop:"25px"}}>
          <img src='Food Detail.png'/> 
          <a style={{paddingLeft:"22px"}}>Food Detail</a>
        </li>
        <li style={{display:"flex", alignItems:"center", marginTop:"25px"}}>
          <img src='Customer Detail.png'/> 
          <a style={{paddingLeft:"22px"}}>Customer Detail</a>
        </li>
        <li style={{display:"flex", alignItems:"center", marginTop:"25px"}}>
          <img src='Calendar (2).png'/> 
          <a style={{paddingLeft:"22px"}}>Calendar</a>
        </li>
        <li style={{display:"flex", alignItems:"center", marginTop:"25px"}}>
          <img src='Chat (2).png'/> 
          <a style={{paddingLeft:"22px"}}>Chat</a>
        </li>
        <li style={{display:"flex", alignItems:"center", marginTop:"25px"}}>
          <img src='Wallet.png'/> 
          <a style={{paddingLeft:"22px"}}>Wallet</a>
        </li>
      </ul>
    </div>
    <div style={{marginTop:"20px",   }}>
      <input style={{height:"40px",width:"600px"}}></input>
      <img style={{marginBottom:"-8px" ,paddingLeft:" 30px"}} src='Icon_Dashboard.png'/>
      <img style={{marginBottom:"-8px" ,paddingLeft:" 30px"}} src='Icon_Dashboard (1).png'/>
      <img style={{marginBottom:"-8px" ,paddingLeft:" 30px"}} src='Icon_Dashboard (2).png'/>
      <img style={{marginBottom:"-8px" ,paddingLeft:" 30px"}} src='Icon_Dashboard (3).png'/>
      <img style={{marginBottom:"-13px",  paddingLeft:" 30px"}} src='separator.png'/>
      <a  style={{color:"black" , fontSize:"20px", marginLeft:"15px"}}>Hello,Ben</a>
      <img style={{marginBottom:"-20px", marginLeft:"10px"}} src='avatar.png'/>
      
       <div style={{width:"1030.58px"}}>
        <div>
            <h1>Your Orders</h1>
            <p style={{color:' #B9BBBD',marginTop: '10px'}}>This is your order list data</p>
        </div>
        <div style={{display:"flex", justifyContent:"space-between",marginBottom:"30px", marginTop:"20px",borderRadius: "5px", paddingTop:"10px",  height:"40px", textAlign: "center",  border:"1px  #00B074 solid", background: "#00B074"}}>
            <p>Order ID</p>
            <p>Date</p>
            <p>Customer Name</p>
            <p>Location</p>
            <p>Amount</p>
            <p>Status Order</p>
        </div>
        <OrderLest id="#555231" sana="26 March 2020, 12:42 AM" tavarNomi="Mikasa Ackerman" Location="Corner Street 5th London"  Amount="164.52" StatusOrder="New Order"/>
        <OrderLest id="#555231" sana="26 March 2020, 12:42 AM" tavarNomi="Mikasa Ackerman" Location="Corner Street 5th London"  Amount="164.52" StatusOrder="New Order"/>
        <OrderLest id="#555231" sana="26 March 2020, 12:42 AM" tavarNomi="Mikasa Ackerman" Location="Corner Street 5th London"  Amount="164.52" StatusOrder="New Order"/>
        <OrderLest id="#555231" sana="26 March 2020, 12:42 AM" tavarNomi="Mikasa Ackerman" Location="Corner Street 5th London"  Amount="164.52" StatusOrder="New Order"/>
        <OrderLest id="#555231" sana="26 March 2020, 12:42 AM" tavarNomi="Mikasa Ackerman" Location="Corner Street 5th London"  Amount="164.52" StatusOrder="New Order"/>
        <OrderLest id="#555231" sana="26 March 2020, 12:42 AM" tavarNomi="Mikasa Ackerman" Location="Corner Street 5th London"  Amount="164.52" StatusOrder="New Order"/>
        <OrderLest id="#555231" sana="26 March 2020, 12:42 AM" tavarNomi="Mikasa Ackerman" Location="Corner Street 5th London"  Amount="164.52" StatusOrder="New Order"/>
        <OrderLest id="#555231" sana="26 March 2020, 12:42 AM" tavarNomi="Mikasa Ackerman" Location="Corner Street 5th London"  Amount="164.52" StatusOrder="New Order"/>
        <OrderLest id="#555231" sana="26 March 2020, 12:42 AM" tavarNomi="Mikasa Ackerman" Location="Corner Street 5th London"  Amount="164.52" StatusOrder="New Order"/>
        <OrderLest id="#555231" sana="26 March 2020, 12:42 AM" tavarNomi="Mikasa Ackerman" Location="Corner Street 5th London"  Amount="164.52" StatusOrder="New Order"/>
        <OrderLest id="#555231" sana="26 March 2020, 12:42 AM" tavarNomi="Mikasa Ackerman" Location="Corner Street 5th London"  Amount="164.52" StatusOrder="New Order"/>
        <OrderLest id="#555231" sana="26 March 2020, 12:42 AM" tavarNomi="Mikasa Ackerman" Location="Corner Street 5th London"  Amount="164.52" StatusOrder="New Order"/>
    </div> 
    </div>
    </div>
         
     

  )
}
//id="#555231" sana="26 March 2020, 12:42 AM" tavarNomi="Mikasa Ackerman" Location="Corner Street 5th London"  Amount="164.52" StatusOrder="New Order"
export default orderLest