import { useState } from 'react';
export default function Admin(){
 const [coupons,setCoupons]=useState([]);
 const [products,setProducts]=useState([]);
 const [couponInput,setCouponInput]=useState('');
 const [productInput,setProductInput]=useState('');
 const addCoupon=()=>{ if(!couponInput.trim()) return; setCoupons([...coupons,couponInput]); setCouponInput(''); };
 const addProduct=()=>{ if(!productInput.trim()) return; setProducts([...products,productInput]); setProductInput(''); };
 return(<div className='p-6'>
   <h1 className='text-3xl font-bold mb-4'>Admin Panel</h1>
   <div className='bg-white p-4 rounded shadow max-w-md mb-6'>
     <h2>Create Coupon</h2>
     <input value={couponInput} onChange={e=>setCouponInput(e.target.value)} />
     <button onClick={addCoupon}>Add Coupon</button>
     <ul>{coupons.map((c,i)=>(<li key={i}>{c}</li>))}</ul>
   </div>
   <div className='bg-white p-4 rounded shadow max-w-md'>
     <h2>Create Product</h2>
     <input value={productInput} onChange={e=>setProductInput(e.target.value)} />
     <button onClick={addProduct}>Add Product</button>
     <ul>{products.map((p,i)=>(<li key={i}>{p}</li>))}</ul>
   </div>
 </div>);
}