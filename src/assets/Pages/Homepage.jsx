import Home, { Banner, BestPrice, Categories, Features, HelpCenter, Hero, Logos, Newsletter, Sales, Sellings, TodaySpecial } from "../../Components/Home";


export default function Homepage(){

    return(
        <>
        <Hero/>
        <Features/>
        <Banner/>
        <Sellings/>
        <Categories/>
        <BestPrice/>
        <Sales/>
        <TodaySpecial/>
        <Logos/>
        <Newsletter/>
        <HelpCenter/>

        </>
    )
}