import { Header } from './common/Header.jsx'
import Footer from './common/Footer.jsx'
import CallUs from './components/CallUs.jsx'
import ProductsCategory from './components/ProductsCategory.jsx'
import ChooseUsReasons from './components/ChooseUsReasons.jsx'
import PopularProducts from './components/PopularProducts.jsx'
import RollShtory from './components/RollShtory.jsx'
import Office from './components/Office.jsx'
import DayNight from './components/DayNight.jsx'
import Vertical from './components/Vertical.jsx'
import JaluziPrint from './components/JaluziPrint.jsx'


function App() {

    return (
        <>
            <Header />
            <main className="mx-auto space-y-5 md:space-y-16">
                <CallUs />
                <ProductsCategory />
                <ChooseUsReasons/>
                <PopularProducts/>
                <RollShtory/>
                <Office/>
                <DayNight/>
                <Vertical/>
                <JaluziPrint/>
            </main>
            <Footer />
        </>
    )
}

export default App
