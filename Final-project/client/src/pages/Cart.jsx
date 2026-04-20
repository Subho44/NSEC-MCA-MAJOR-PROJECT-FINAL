import React,{useState,useEffect} from 'react'
import axios from "axios";

const Cart = () => {
    const [cart,setCart] = useState(null);

    useEffect(()=>{
        axios.get("http://localhost:5500/api/cart/user1")
        .then(res=>setCart(res.data));
    },[]);

    const buy = async()=> {
        await axios.post("http://localhost:5500/api/orders/place",{
            userId:"user1"
        });
        alert("order placed");
    };
    if(!cart) return <h2>cart empty</h2>

  return <>
  <h2>cart</h2>
  {cart.courses.map((x,i)=>(
    <div key={i}>
    {x.title} - ₹{x.price}
    </div>
  ))}
  <button onClick={buy}>Buy(cod)</button>
  
  </>
}

export default Cart