import { useParams } from 'react-router-dom'
import Products from '../products.json'

export default function ProductDetailPage(){
const {handleId}=useParams()
const product=Products.filter(pr=>pr.handleId===handleId).map((pr)=>(
    <section className='flex justify-center gap-4 p-10 '>
        <div className='w-1/3'>
     <div key={pr.handleId} className="p-3   border border-gray-300 rounded-lg ">
            <img src={"https://static.wixstatic.com/media/" + pr.productImageUrl} alt="" className="" />
                        <p className="text-xl">{pr.additionalInfoDescription1}</p>

        </div>
        </div>
        <div className="w-1/2 flex flex-col gap-3">
            <h2 className="font-bold text-3xl">{pr.name}</h2>
            <h2 className="text-lg font-bold text-blue-500 " >{pr.price}$</h2>
        </div>
    </section>
))
    return(
        <>
        {product}
        </>
    )
}