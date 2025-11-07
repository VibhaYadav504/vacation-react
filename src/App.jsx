import './App.css'
import CustomCarousel from './components/Carousel'
import CustomNavbar from './components/CustomNavbar'
import DestinationComponent from './components/DestinationComponent'
import Footer from './components/Footer'
import InternationalDestinations from './components/InternationalDestinations'
import Features from './components/Features'
import ServicesComponent from './components/ServicesComponent'

function App() {

  return (
    <>
     {/*<CustomNavbar/>*/}
      <CustomCarousel/>
      <ServicesComponent/>
      <DestinationComponent/>
      <InternationalDestinations/>
      <Features/>
      <Footer/>
      
    </>
  )
}

export default App
