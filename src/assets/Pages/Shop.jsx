
import { useState } from 'react'
import Products from '../products.json'
import { useParams } from 'react-router-dom'
export default function Shop(){

    const {category}=useParams()
    const speakers = Products.filter(pr => pr.collection === 'Speakers')
    const mobile = Products.filter(pr => pr.collection === 'Mobile')
    const headphone = Products.filter(pr => pr.collection === 'Headphones')
     const tablet = Products.filter(pr => pr.collection === 'Tablets')
    const drone = Products.filter(pr => pr.collection.includes('Drones & Cameras'))
    const TV = Products.filter(pr => pr.collection.includes('TV'))
    const computers = Products.filter(pr => pr.collection === 'Computers')
    const watches = Products.filter(pr => pr.collection === 'Wearable Tech')
    const sale = Products.filter(pr => pr.ribbon === 'SALE')
    const bestsellers = Products.filter(pr => pr.collection.includes('Best Sellers'))



return (

    <section className="flex flex-col items-center p-10  py-10 m-5 gap-5 my-5">
        <h1 className="text-4xl font-bold capitalize">{category}</h1>
        <div className="grid md:grid-cols-6 gap-4 w-full py-10 ">
            {category=='all' && Products.map((pr)=>(
                <div key={pr.handleId} className="flex flex-col  items-start justify-between  p-3    rounded-lg ">
            <img src={"https://static.wixstatic.com/media/" + pr.productImageUrl} alt="" className="hover:scale-104 transition-all duration-300" />
            <h2 className="font-bold text-lg">{pr.name}</h2>
            <h2 className="text-lg font-bold text-blue-500 " >{pr.price}$</h2>
        </div>
            ))
            }
            
            {category=='mobile' && mobile.map((pr)=>(
                <div key={pr.handleId} className="flex flex-col  items-start justify-between  p-3    rounded-lg ">
            <img src={"https://static.wixstatic.com/media/" + pr.productImageUrl} alt="" className="hover:scale-104 transition-all duration-300" />
            <h2 className="font-bold text-lg">{pr.name}</h2>
            <h2 className="text-lg font-bold text-blue-500 " >{pr.price}$</h2>
        </div>
            ))
            }
            {category=='tablets' && tablet.map((pr)=>(
                <div key={pr.handleId} className="flex flex-col  items-start justify-between  p-3    rounded-lg ">
            <img src={"https://static.wixstatic.com/media/" + pr.productImageUrl} alt="" className="hover:scale-104 transition-all duration-300" />
            <h2 className="font-bold text-lg">{pr.name}</h2>
            <h2 className="text-lg font-bold text-blue-500 " >{pr.price}$</h2>
        </div>
            ))
            }
            {category=='headphones' && headphone.map((pr)=>(
                <div key={pr.handleId} className="flex flex-col  items-start justify-between  p-3    rounded-lg ">
            <img src={"https://static.wixstatic.com/media/" + pr.productImageUrl} alt="" className="hover:scale-104 transition-all duration-300" />
            <h2 className="font-bold text-lg">{pr.name}</h2>
            <h2 className="text-lg font-bold text-blue-500 " >{pr.price}$</h2>
        </div>
            ))
            }
            {category=='wearable tech' && watches.map((pr)=>(
                <div key={pr.handleId} className="flex flex-col  items-start justify-between  p-3    rounded-lg ">
            <img src={"https://static.wixstatic.com/media/" + pr.productImageUrl} alt="" className="hover:scale-104 transition-all duration-300" />
            <h2 className="font-bold text-lg">{pr.name}</h2>
            <h2 className="text-lg font-bold text-blue-500 " >{pr.price}$</h2>
        </div>
            ))
            }
            {category=='drones & cameras' && drone.map((pr)=>(
                <div key={pr.handleId} className="flex flex-col  items-start justify-between  p-3   rounded-lg ">
            <img src={"https://static.wixstatic.com/media/" + pr.productImageUrl} alt="" className="hover:scale-104 transition-all duration-300" />
            <h2 className="font-bold text-lg">{pr.name}</h2>
            <h2 className="text-lg font-bold text-blue-500 " >{pr.price}$</h2>
        </div>
            ))
            }
            {category=='computer' && computers.map((pr)=>(
                <div key={pr.handleId} className="flex flex-col  items-start justify-between  p-3   rounded-lg ">
            <img src={"https://static.wixstatic.com/media/" + pr.productImageUrl} alt="" className="hover:scale-104 transition-all duration-300" />
            <h2 className="font-bold text-lg">{pr.name}</h2>
            <h2 className="text-lg font-bold text-blue-500 " >{pr.price}$</h2>
        </div>
            ))
            }
            {category=='best seller' && bestsellers.map((pr)=>(
                <div key={pr.handleId} className="flex flex-col  items-start justify-between  p-3    rounded-lg ">
            <img src={"https://static.wixstatic.com/media/" + pr.productImageUrl} alt="" className="hover:scale-104 transition-all duration-300" />
            <h2 className="font-bold text-lg">{pr.name}</h2>
            <h2 className="text-lg font-bold text-blue-500 " >{pr.price}$</h2>
        </div>
            ))
            }
            {category=='sale' && sale.map((pr)=>(
                <div key={pr.handleId} className="flex flex-col  items-start justify-between  p-3   rounded-lg ">
            <img src={"https://static.wixstatic.com/media/" + pr.productImageUrl} alt="" className="hover:scale-104 transition-all duration-300" />
            <h2 className="font-bold text-lg">{pr.name}</h2>
            <h2 className="text-lg font-bold text-blue-500 " >{pr.price}$</h2>
        </div>
            ))
            }
            {category=='speaker' && speakers.map((pr)=>(
                <div key={pr.handleId} className="flex flex-col  items-start justify-between  p-3    rounded-lg ">
            <img src={"https://static.wixstatic.com/media/" + pr.productImageUrl} alt="" className="hover:scale-104 transition-all duration-300" />
            <h2 className="font-bold text-lg">{pr.name}</h2>
            <h2 className="text-lg font-bold text-blue-500 " >{pr.price}$</h2>
        </div>
            ))
            }
            {category=='tv' && TV.map((pr)=>(
                <div key={pr.handleId} className="flex flex-col  items-start justify-between  p-3    rounded-lg ">
            <img src={"https://static.wixstatic.com/media/" + pr.productImageUrl} alt="" className="hover:scale-104 transition-all duration-300" />
            <h2 className="font-bold text-lg">{pr.name}</h2>
            <h2 className="text-lg font-bold text-blue-500 " >{pr.price}$</h2>
        </div>
            ))
            }
        </div>
        <button className="btn btn-primary text-lg p-5 w-[250px] rounded-full bg-blue-500 text-white">All Products</button>
    </section>
)
}


    
