
import { Link } from "react-router-dom"
import {  FaBox, FaMedal, FaSearch, FaShoppingCart, FaTag } from "react-icons/fa"
import Products from '../assets/products.json'
import bg1 from '../assets/bg1.png'
export default function Home() {   
    const allcategories=['all','tablets','mobile','drones & cameras','wearable tech','headphones','speaker','sale','best seller','tv','computer']
    
    return (
        <>
            <header className="flex flex-col bg-white  w-full sticky top-0 z-10 shadow-md">
                <nav className="navbar flex   justify-between  bg-black shadow-xl  ">
                    <div className="flex items-center gap-4 px-4">
                        <FaBox  color="white"/>
                        <p className="text-white">Free Shipping for order over 50$ </p>
                    </div>
                    <ul className="hidden md:flex gap-8 underline text-white">
                        <li>About</li>
                        <li>Contact</li>
                        <li>Help Center</li>
                        <p>Call Us  112-44553</p>
                    </ul>
                </nav>
                <div className="flex justify-between items-center   p-4">
                    <Link to='/'><h1 className="font-bold text-black text-4xl">TechShed</h1></Link>
                    <div className="flex gap-4 items-center  ">
                        <FaSearch size={15} color="black" />
                        <img src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png" className="md:w-8 hidden md:block" alt="" />
                        <img src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png" className="w-5 hidden md:block" alt="" />
                        <Link to={`/checkout`}>
                        <FaShoppingCart size={20} color="black" />
                        </Link>
                    </div>
                </div>
                <div className="bg-gray-100 p-2 hidden md:block">
                    <ul className="flex gap-10  text-gray-800 capitalize">
                        {allcategories.map(category=>(
                            <Link key={category} to={`/shop/${category}`}> <li className="flex items-center gap-2 capitalize"> {category}</li></Link>
                            
                        ))}

                    </ul>
                </div>
            </header>
        </>
    )
}
export function Hero() {
  
    return (
        <section className={`flex flex-col md:flex-row h-[70vh] items-center  md:pl-24 py-5 bg-fixed   w-full bg-center bg-cover  `} style={{ backgroundImage: `url('${bg1}')` }} >
            <div className="flex flex-col md:w-1/3 md:items-start gap-6 items-center">
                <span className="bg-red-400  text-white font-bold text-lg p-1">Best Prices</span>
                <h1 className="font-bold md:text-6xl text-4xl text-center md:text-left">
                    Incredible Prices on All Your Favorite Items
                </h1>
                <p className="text-lg">Get more for less on selected brands</p>
                <Link to='shop/all' >
                <button className="btn btn-primary p-6 rounded-full w-[220px]">Shop Now</button>               
                </Link>
            </div>
        </section>
    )

}
export function Features() {
    return (
        <section className="flex flex-col md:flex-row p-2 gap-4  w-full bg-fixed ">
            <div className="flex px-5  p-30 gap-3 md:w-1/2  md:h-[468px] text-white flex-col  bg-[url('https://static.wixstatic.com/media/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg/v1/fill/w_868,h_468,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg')] bg-cover bg-center ">
                <p className="text-lg">Holiday Deal</p>
                <h1 className="text-5xl font-bold lg:w-1/3 ">Upto 30% off</h1>
                <p className="text-lg">Selected Smartphone Brand</p>
                 <Link to={'shop/all'}>
                <button className="btn btn-primary bg-white text-black  rounded-full w-[200px] border-0 mt-4">Shop Now</button>
                 </Link>
            </div>
            <div className="flex px-5  p-30 gap-3 md:w-1/2 md:h-[468px] text-white flex-col  bg-[url('https://static.wixstatic.com/media/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg/v1/fill/w_868,h_468,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg')] bg-cover bg-center ">
                <p className="text-lg">Just In </p>
                <h1 className="text-5xl font-bold lg:w-1/2">Take Your Sound Anywhere</h1>
                <p className="text-lg">Top Headphone Brands</p>
                 <Link to={'shop/all'}>
                <button className="btn btn-primary bg-white text-black  rounded-full w-[200px] border-0 mt-4">Shop Now</button>
                 </Link>
            </div>
        </section>
    )
}
export function Banner() {
    return (
        <div className="flex flex-col md:flex-row justify-around p-5 gap-5 m-5 md:h-[150px] bg-white ">
            <div className="flex items-center gap-3">
                <img src="https://cdn-icons-png.flaticon.com/128/15226/15226060.png" alt="" className="w-[50px]" />
                <h2 className="text-xl font-bold">Curb-side pickup</h2>
            </div>
            <div className="flex items-center gap-3">
                <img src="https://cdn-icons-png.flaticon.com/128/679/679720.png" alt="" className="w-[50px]" />
                <h2 className="font-bold text-lg">Free Shipping On Orders Over 50$</h2>
            </div>
            <div className="flex items-center gap-3">
                <img src="https://cdn-icons-png.flaticon.com/128/8713/8713372.png" alt="" className="w-[50px]" />
                <h2 className="font-bold text-lg">Low prices guaranteed</h2>
            </div>
            <div className="flex items-center gap-3">
                <img src="https://cdn-icons-png.flaticon.com/128/833/833602.png" alt="" className="w-[50px]" />
                <h2 className="font-bold text-lg">Available 24/7 </h2>
            </div>
        </div>
    )
}
const bestsellers = Products.filter(pr => pr.collection.includes('Best Sellers')).slice(0, 6);

export function Sellings() {
    const productdetail = bestsellers.map((pr) => (
        <Link to={`/prdetail/${pr.handleId}`}>
        <div key={pr.handleId} className="flex flex-col  items-start justify-between  p-3   border border-gray-300 rounded-lg ">
            <img src={"https://static.wixstatic.com/media/" + pr.productImageUrl} alt="" className="hover:scale-104 transition-all duration-300" />
            <h2 className="font-bold text-lg">{pr.name}</h2>
            <h2 className="text-lg font-bold text-blue-500 " >{pr.price}$</h2>
        </div>
        </Link>
    ))

    return (
        <section className="flex flex-col items-center p-10  m-5 gap-5 bg-white my-5 bg-fixed">
            <h1 className="text-4xl font-bold">Best Sellers</h1>
            <div className="grid  md:grid-cols-6 gap-4 w-full py-10 ">
                {productdetail}
            </div>
             <Link to={'shop/best seller'}>
            <button className="btn btn-primary text-lg p-5 w-[250px] rounded-full bg-blue-500 text-white">View All</button>
             </Link>
        </section>
    )

}

export function Categories() {
    const cats = Products.filter(pr => pr.collection === 'Tablets').slice(0, 1);
    const speakers = Products.filter(pr => pr.collection === 'Speakers').slice(0, 1);
    const phone = Products.filter(pr => pr.collection === 'Mobile').slice(0, 1);
    const headphone = Products.filter(pr => pr.collection === 'Headphones').slice(0, 1);
    const drone = Products.filter(pr => pr.collection.includes('Drones & Cameras')).slice(6, 7);
    const TV = Products.filter(pr => pr.collection.includes('TV')).slice(0, 1);
    const computers = Products.filter(pr => pr.collection === 'Computers').slice(3, 4);
    const watches = Products.filter(pr => pr.collection === 'Wearable Tech').slice(0, 1);
    const sale = Products.filter(pr => pr.ribbon === 'SALE').slice(0, 1);
    const bestsellers = Products.filter(pr => pr.collection.includes('Best Sellers')).slice(3, 4);



    return (
        <section className="flex flex-col items-center p-7  py-10 m-5  gap-5 bg-white">
            <h1 className="text-4xl font-bold">Shop By Category</h1>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 py-10 gap-5">
                {cats.map((cat) => (
                    <Link to={`shop/tablets`}>
                    <div key={cat.handleId} className="flex flex-col items-center    rounded-full p-5  ">
                        <img src={"https://static.wixstatic.com/media/" + cat.productImageUrl} alt="" className="hover:scale-104 shadow-sm shadow-black rounded-full transition-all duration-300" />
                        <h2 className="font-bold text-lg mt-4">{cat.collection}</h2>
                    </div>

                    </Link>
                ))}
                {speakers.map((cat) => (
                    <Link to={'shop/speaker'}>
                    <div key={cat.handleId} className="flex flex-col items-center    rounded-full p-5  ">
                        <img src={"https://static.wixstatic.com/media/" + cat.productImageUrl} alt="" className="hover:scale-104 shadow-sm shadow-black rounded-full transition-all duration-300" />
                        <h2 className="font-bold text-lg mt-4">{cat.collection}</h2>
                    </div>
                    </Link>
                ))}
                {phone.map((cat) => (
                     <Link to={'shop/mobile'}>

                    <div key={cat.handleId} className="flex flex-col items-center    rounded-full p-5  ">
                        <img src={"https://static.wixstatic.com/media/" + cat.productImageUrl} alt="" className="hover:scale-104 shadow-sm shadow-black rounded-full transition-all duration-300" />
                        <h2 className="font-bold text-lg mt-4">{cat.collection}</h2>
                    </div>
                     </Link>
                ))}
                {TV.map((cat) => (
                     <Link to={'shop/tv'}>

                    <div key={cat.handleId} className="flex flex-col items-center    rounded-full p-5  ">
                        <img src={"https://static.wixstatic.com/media/" + cat.productImageUrl} alt="" className="hover:scale-104 shadow-sm shadow-black rounded-full transition-all duration-300" />
                        <h2 className="font-bold text-lg mt-4">TV</h2>
                    </div>
                     </Link>
                ))}
                {computers.map((cat) => (
                     <Link to={'shop/computer'}>

                    <div key={cat.handleId} className="flex flex-col items-center    rounded-full p-5  ">
                        <img src={"https://static.wixstatic.com/media/" + cat.productImageUrl} alt="" className="hover:scale-104 shadow-sm shadow-black rounded-full transition-all duration-300" />
                        <h2 className="font-bold text-lg mt-4">{cat.collection}</h2>
                    </div>
                     </Link>
                ))}
                {headphone.map((cat) => (
                     <Link to={'shop/headphones'}>

                    <div key={cat.handleId} className="flex flex-col items-center    rounded-full p-5  ">
                        <img src={"https://static.wixstatic.com/media/" + cat.productImageUrl} alt="" className="hover:scale-104 shadow-sm shadow-black rounded-full transition-all duration-300" />
                        <h2 className="font-bold text-lg mt-4">{cat.collection}</h2>
                    </div>
                     </Link>
                ))}
                {drone.map((cat) => (
                     <Link to={'shop/drones & cameras'}>

                    <div key={cat.handleId} className="flex flex-col items-center    rounded-full p-5  ">
                        <img src={"https://static.wixstatic.com/media/" + cat.productImageUrl} alt="" className="hover:scale-104 shadow-sm shadow-black rounded-full transition-all duration-300" />
                        <h2 className="font-bold text-lg mt-4">{cat.collection}</h2>
                    </div>
                     </Link>
                ))}
                {watches.map((cat) => (
                     <Link to={'shop/wearable tech'}>

                    <div key={cat.handleId} className="flex flex-col items-center    rounded-full p-5  ">
                        <img src={"https://static.wixstatic.com/media/" + cat.productImageUrl} alt="" className="hover:scale-104 shadow-sm shadow-black rounded-full transition-all duration-300" />
                        <h2 className="font-bold text-lg mt-4">{cat.collection}</h2>
                    </div>
                     </Link>
                ))}
                {sale.map((cat) => (
                    <Link to={'shop/sale'}>
                    <div key={cat.handleId} className="flex flex-col items-center    rounded-full p-5  ">
                        <img src={"https://static.wixstatic.com/media/" + cat.productImageUrl} alt="" className="hover:scale-104 shadow-sm shadow-black rounded-full transition-all duration-300" />
                        <h2 className="font-bold text-lg mt-4">{cat.collection.split(';')[0]}</h2>
                    </div>

                    </Link>
                ))}
                {bestsellers.map((cat) => (
                    <Link to={'shop/best seller'}>

                    <div key={cat.handleId} className="flex flex-col items-center    rounded-full p-5  ">
                        <img src={"https://static.wixstatic.com/media/" + cat.productImageUrl} alt="" className="hover:scale-104 shadow-sm shadow-black rounded-full transition-all duration-300" />
                        <h2 className="font-bold text-lg mt-4">{cat.collection.split(';')[2]}</h2>
                    </div>
                    </Link>
                ))}
              
                

            </div>


        </section>
    )
}

export function BestPrice() {

    return (
        <section className="flex md:flex-row flex-col overflow-hidden gap-10  md:h-[500px] bg-white m-5">
            <img className="md:w-2/3 md:transform  md:-translate-x-10 origin-right md:skew-x-10" src="https://static.wixstatic.com/media/c837a6_42dd66a436e846648736f4bc9546bf14~mv2.png/v1/fill/w_1775,h_600,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_42dd66a436e846648736f4bc9546bf14~mv2.png" alt="" />
            <div className="flex flex-col justify-center items-center py-1.5 md:items-start md:w-1/3  gap-5">
                <h1 className="text-3xl font-bold">
                    Save up to
                </h1>
                <h1 className="text-5xl font-bold">150$ </h1>
                <h1 className="text-3xl font-bold">
                    on selected laptop <br />
                    & tablets brands
                </h1>
                <p>Terms and conditions apply</p>
                 <Link to={'shop/computer'} className="w-full">
                <button className="btn btn-primary rounded-full p-5 bg-purple-500 w-1/2 px-10  text-white">Shop</button>
                 </Link>
            </div>
        </section>
    )
}
export function Sales() {
    const bestsales = Products.filter(pr => pr.ribbon === 'SALE').slice(0, 6);
    const saleproducts = bestsales.map((pr) => (

        <div key={pr.handleId} className="flex flex-col  items-start justify-between  p-3 border-gray-300 border rounded-lg ">
            <span className="bg-red-600  text-white px-3 font-light rounded-full">{pr.ribbon}</span>
            <img src={"https://static.wixstatic.com/media/" + pr.productImageUrl} alt="" className="hover:scale-104 transition-all duration-300" />
            <h2 className="font-bold text-lg">{pr.name}</h2>
            <h2 className="text-lg font-bold text-blue-500 " ><strike>{pr.price}</strike> {pr.price-pr.discountValue}$</h2>
        </div>
    ))

    return (
        <section className="flex flex-col items-center p-5  py-10 m-5 gap-5 bg-white my-5">
            <h1 className="text-4xl font-bold">On Sale</h1>
            <div className="grid md:grid-cols-3 lg:grid-cols-6  gap-4 px-10 w-full py-10 ">
                {saleproducts}
            </div>
             <Link to={'shop/sale'}>
            <button className="btn btn-primary text-lg p-5 w-[250px] rounded-full bg-blue-500 text-white">View All</button>
             </Link>
        </section>
    )

}
export function TodaySpecial() {

    return (
        <section className="flex md:flex-row flex-col overflow-hidden  md:h-[500px] bg-white m-5 md:pl-10 p-3">
            <img className="md:w-2/3 transform md:translate-x-12 origin-right md:skew-x-8 order-2 object-center" src="https://static.wixstatic.com/media/c837a6_ecf32c7284d4430582fcc90f60a1b4e6~mv2.png/v1/fill/w_1775,h_600,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_ecf32c7284d4430582fcc90f60a1b4e6~mv2.png" alt="" />
            <div className="flex flex-col justify-center py-2  md:items-start md:w-1/3 items-center gap-5">
                <span className="font-bold text-white  bg-red-400">  Today's Special  </span>
                <h1 className="text-3xl font-bold">
                    Best Arial View in Town                </h1>
                <h1 className="text-6xl font-bold">30% OFF </h1>
                <h1 className="text-3xl font-bold">
                    on professional camera drones
                </h1>
                <p>Terms and conditions apply</p>
                 <Link to={'shop/drones & cameras'} className="w-full">
                <button className="btn btn-primary rounded-full p-5 bg-purple-500 w-2/5 text-white">Shop</button>
                 </Link>
            </div>
        </section>
    )
}
export function Logos(){
    return(
        <section className="py-20 px-10 bg-white m-5 flex flex-col">
            <h1 className="text-3xl font-bold text-center py-4">brands</h1>
            <div className="grid md:grid-cols-5 items-center justify-center w-full">
                <div className="border border-gray-300 p-5 lg:p-20">
                    <h1 className="lg:text-5xl text-3xl uppercase italic font-bold text-gray-500">Zodiac</h1>
                </div>
                 <div className="border  border-gray-300 p-5  lg:p-20">
                    <h1 className="lg:text-5xl text-3xl uppercase italic font-bold text-gray-500">zoro</h1>
                </div>
                 <div className="border  border-gray-300 p-5  lg:p-20">
                    <h1 className="lg:text-5xl text-3xl uppercase italic font-bold text-gray-500">pjx</h1>
                </div>
                 <div className="border  border-gray-300 p-5  lg:p-20">
                    <h1 className="lg:text-5xl text-3xl uppercase italic font-bold text-gray-500">horizon</h1>
                </div>
                 <div className="border  border-gray-300  p-5 lg:p-20">
                    <h1 className="lg:text-5xl text-3xl uppercase italic font-bold text-gray-500">gxl</h1>
                </div>
            </div>

        </section>
    )

}

export function Newsletter(){
    return(
        <section className="flex flex-col items-center justify-center bg-linear-to-r from-[rgb(98,64,200)] to-[rgb(76,52,148)] gap-4 py-20 m-5 text-white">
            <h1 className="text-2xl font-bold">Newsletter</h1>
            <p className="text-center">Sign up to receive updates on new arrivals and special offers</p>
            <div className="flex flex-col md:flex-row gap-3  md:w-1/2">
                <input type="email" name="email" id="" placeholder="Email" className="input w-full p-2 input-ghost border border-white rounded-full" />
                <button className="btn btn-primary-px-5 p-2 bg-black text-white w-[140px] border-0  rounded-full">Subscribe</button>
            </div>
        </section>
    )
}

export function HelpCenter() {

    return (
        <section className="flex flex-col md:flex-row overflow-hidden  md:h-[500px] bg-white m-5">
            <img className="md:w-1/2  order-2 object-center h-[300px] md:h-full" src="https://static.wixstatic.com/media/c22c23_de5cbbefa9104fc1a1604ea146ea523a~mv2.jpg/v1/fill/w_1020,h_445,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_de5cbbefa9104fc1a1604ea146ea523a~mv2.jpg"/>
            <div className="flex text-white flex-col justify-center  md:w-1/2 md:pl-40 p-5  items-start  bg-black gap-5">
                <span className="font-bold text-white px-2 bg-red-400">  Today's Special  </span>
                <h1 className="text-3xl font-bold lg:w-1/2">
                    Need Help? Check Out Our Help Center             </h1>
                <h1 className="text-6xl font-bold">30% OFF </h1>
                <h1 className="text-3xl font-bold">
                    on professional camera drones
                </h1>
                <p>Terms and conditions apply</p>
                <button className="btn btn-primary rounded-full p-5 bg-purple-500 w-1/2 text-white">Shop</button>
            </div>
        </section>
    )
}
