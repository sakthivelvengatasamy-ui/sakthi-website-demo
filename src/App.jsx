import { useState } from 'react'
import HeroContainer from './components/HeroContainer';
import Services from './components/Services';
import Destinations from './components/Destinations';
import Packages from './components/Packages';
import RecommendedHotels from './components/RecommendedHotels';
import HappyTravellers from './components/HappyTravellers';
import './App.scss'
import
import Subscribe from './components/Subscribe';
import StickyFooter from './components/footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HeroContainer/>      
      <Services/>      
      <Destinations/>
      <Packages/>
      <RecommendedHotels />
      <HappyTravellers/>
      <Subscribe/>
      <StickyFooter/>
    </div>
  )
}

export default App
