import React from 'react'
import Image from 'next/image';
import styles from '@/styles/sedap.css';


function sedap() {
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
            <a href='http://localhost:3001/sedap' style={{paddingLeft:"22px"}}>Dashboard</a>
          </li>
          <li style={{display:"flex", alignItems:"center", marginTop:"25px"}}>
            <img src='Order List.png'/> 
            <a href='http://localhost:3000/orderLest' style={{paddingLeft:"22px"}}>Order List</a>
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
        

      </div>
    </div>
  )
}

export default sedap