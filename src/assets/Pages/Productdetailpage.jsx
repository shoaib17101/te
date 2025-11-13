// import { useParams } from 'react-router-dom'
// import Products from '../products.json'
// import { createContext, useContext, useState } from 'react'
// import { Link } from 'react-router-dom'
// export default function ProductDetailPage(){
//     const [quantity,setquantity]=useState(1)
//     const[cart,setcart]=useState([])
    
//     var category=''
// const {handleId}=useParams()
// const product=Products.filter(pr=>pr.handleId===handleId).map((pr)=>(
//     <section className='flex md:flex-row flex-col justify-center gap-4 p-10 '>
//         <div className='md:w-1/3'>
//      <div key={pr.handleId} className="p-3 gap order-2 md:order-1 ">
//             <img src={"https://static.wixstatic.com/media/" + pr.productImageUrl} alt="" className="" />

//                         <p className="text-md py-5">{pr.description}</p>
//         </div>
//         </div>
//         <div className="md:w-1/2 flex flex-col w-full  gap-3">
//             <h2 className="font-bold text-3xl">{pr.name}</h2>
//             <p>SKU: {pr.sku}</p>
//             <h2 className="text-lg font-bold text-blue-500 " >{pr.price}$</h2>
//             <h2>Quantity</h2>
//             <span className="join flex bg-white items-center justify-between md:#w-1/6"><button onClick={()=>quantity!=0 && setquantity(q=>q-1)} className="btn btn-ghost">-</button > <p className='join-item'>{quantity}</p><button onClick={()=>setquantity(q=>q+1)} className="btn btn-ghost">+</button></span>
//             <button className="btn btn-primary px-10 p-5 md:w-1/3 rounded-full" >Add to Cart</button>
//             <button className="btn btn-primary px-10 p-5 md:w-1/3 rounded-full text-white bg-black">Buy Now</button>
//             <h2>Product Info</h2>
//             <details className='md:w-1/3'>{pr.additionalInfoDescription1}</details>
//             <h2>Refund  Policy</h2>
//             <details className='md:w-1/3'>{pr.additionalInfoDescription2}</details>
//             <h2>Shipping Info</h2>
//             <details className='md:w-1/3 w-1/2'>{pr.additionalInfoDescription3}</details>
//             {category=pr.collection}
//         </div>
//     </section>
// ))
//     return(
//         <>

//         {product}
//         <h1 className='text-4xl font-bold p-10'>Products You May Like</h1>
//         <div className="grid md:grid-cols-6 px-10 mx-auto">
//             {Products.filter(itm=>itm.collection==category && itm.handleId!=handleId).map((pr)=>(
//                  <Link to={`/prdetail/${pr.handleId}`}>

//                             <div key={pr.handleId} className="flex flex-col  items-start justify-between  p-3    ">
//                         <img src={"https://static.wixstatic.com/media/" + pr.productImageUrl} alt="" className="hover:scale-104 rounded-t-lg transition-all duration-300" />
//                         <h2 className="font-bold text-lg">{pr.name}</h2>
//                         <h2 className="text-lg font-bold text-blue-500 " >{pr.price}$</h2>
//                     </div>
//                     </Link>
//             )
                
//             )}
//         </div>
//         </>
//     )
// }
// ...existing code...
import { useParams, useNavigate, Link } from 'react-router-dom'
import Products from '../products.json'
import { useState, useEffect } from 'react'
// ...existing code...
export default function ProductDetailPage(){
    const [quantity,setquantity]=useState(1)
    const [cart,setcart]=useState(() => {
        try { return JSON.parse(localStorage.getItem('cart') || '[]') } 
        catch { return [] }
    })
    
    var category=''
    const {handleId}=useParams()
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const addToCart = (product, qty = 1) => {
        if (!product) return
        setcart(prev => {
            const idx = prev.findIndex(p => p.handleId === product.handleId)
            if (idx > -1) {
                const updated = [...prev]
                updated[idx] = { ...updated[idx], quantity: (updated[idx].quantity || 0) + qty }
                return updated
            }
            return [...prev, { ...product, quantity: qty }]
        })
    }

    const buyNow = (product, qty = 1) => {
        addToCart(product, qty)
        navigate('/checkout') // adjust route if your checkout page is different
    }

    const prObj = Products.find(pr => pr.handleId === handleId)

    const product = prObj ? (
        <section className='flex md:flex-row flex-col justify-center gap-4 p-10 '>
            <div className='md:w-1/3'>
                <div key={prObj.handleId} className="p-3 gap order-2 md:order-1 ">
                    <img src={"https://static.wixstatic.com/media/" + prObj.productImageUrl} alt={prObj.name} className="" />
                    <p className="text-md py-5">{prObj.description}</p>
                </div>
            </div>
            <div className="md:w-1/2 flex flex-col w-full  gap-3">
                <h2 className="font-bold text-3xl">{prObj.name}</h2>
                <p>SKU: {prObj.sku}</p>
                <h2 className="text-lg font-bold text-blue-500 " >{prObj.price}$</h2>
                <h2>Quantity</h2>
                <span className="join flex bg-white items-center justify-between md:#w-1/6">
                    <button onClick={() => setquantity(q => Math.max(1, q - 1))} className="btn btn-ghost">-</button>
                    <p className='join-item'>{quantity}</p>
                    <button onClick={() => setquantity(q => q + 1)} className="btn btn-ghost">+</button>
                </span>

                <button
                    className="btn btn-primary px-10 p-5 md:w-1/3 rounded-full"
                    onClick={() => addToCart(prObj, quantity)}
                >
                    Add to Cart
                </button>

                <button
                    className="btn btn-primary px-10 p-5 md:w-1/3 rounded-full text-white bg-black"
                    onClick={() => buyNow(prObj, quantity)}
                >
                    Buy Now
                </button>

                <h2>Product Info</h2>
                <details className='md:w-1/3'>{prObj.additionalInfoDescription1}</details>
                <h2>Refund  Policy</h2>
                <details className='md:w-1/3'>{prObj.additionalInfoDescription2}</details>
                <h2>Shipping Info</h2>
                <details className='md:w-1/3 w-1/2'>{prObj.additionalInfoDescription3}</details>
                {category = prObj.collection}
            </div>
        </section>
    ) : (
        <p className="p-10">Product not found.</p>
    )

    return(
        <>
            {product}
            <h1 className='text-4xl font-bold p-10'>Products You May Like</h1>
            <div className="grid md:grid-cols-6 px-10 mx-auto">
                {Products.filter(itm => itm.collection == category && itm.handleId != handleId).map((pr)=>(
                    <Link key={pr.handleId} to={`/prdetail/${pr.handleId}`}>
                        <div className="flex flex-col items-start justify-between p-3">
                            <img src={"https://static.wixstatic.com/media/" + pr.productImageUrl} alt={pr.name} className="hover:scale-104 rounded-t-lg transition-all duration-300" />
                            <h2 className="font-bold text-lg">{pr.name}</h2>
                            <h2 className="text-lg font-bold text-blue-500 " >{pr.price}$</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}
// ...existing code...