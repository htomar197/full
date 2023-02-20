import React, {useEffect, useState } from 'react'
import "./cart.css";
import { useSelector,useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';






const Cart = () => {
    
    const products = useSelector((state) => state.cart)

    const [price,setprice]=useState(0)
   

    const dispatch=useDispatch();

  const handleremove=(productId)=>{
        dispatch(remove(productId))
  }

  const total=()=>{
    let price=0;
    products.map((element,index)=>{
        price=element.price.cost+price
    })
    setprice(price);
  }
  useEffect(()=>{
    total()
  },[total])

    
    return (
        <>
        {products.map((e,index)=>{
            return(
            <>
            <div className="cart_section">
           
            <div className="cart_container">
                <div className="left_cart">
                    <img src={e.url} alt="cart" />
                    <div className="cart_btn">
                        
                        <button className="cart_btn2" onClick={()=>handleremove(e.id)}>Remove</button>
                    </div>
        
                </div>
                <div className="right_cart">
                    <h3></h3>
                    <h4></h4>
                    <p className="tagline">Tag line :{e.tagline} <span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}></span></p>
                    <p className="mrp">M.R.P. :{e.price.mrp} <del></del></p>
                    <p>Deal of the Day : <span style={{ color: "#B12704" }}>₹{e.price.cost}.00</span></p>
                    <p>You save : <span style={{ color: "#B12704" }}> ₹ {e.price.mrp - e.price.cost} </span></p>
        
                    <div className="discount_box">
                        <h5 >Discount :{e.price.discount} <span style={{ color: "#111" }}></span></h5>
                        <h4>FREE Delivery : <span style={{ color: "#111", fontWeight: "600" }}>Oct 8 - 21</span> Details</h4>
                        <p style={{ color: "#111" }}>Fastest delivery: <span style={{ color: "#111", fontWeight: "600" }}> Tomorrow 11AM</span></p>
                    </div>
                    <p className="description">About the Iteam :{e.description} <span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}></span></p>
                </div>
                
            </div>
            
            
        </div>
        
        </>
           
        )
        
        })
        }
        <div className="sub_item">
            <h3>Subtotal :<strong style={{ fontWeight: "700", color: "#111" }}> ₹:{price}.00</strong></h3>
        </div>
        <div className="cart_btn"><br></br>
                        
                        <button className="cart_btn2" >Process to checkout</button>
                    </div>
        
        
</>
)}

export default Cart;



 

