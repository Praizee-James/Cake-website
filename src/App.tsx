import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TopCards from './components/TopCards'
import Cakes from './components/Cakes'
import Category from './components/Category'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <TopCards/>
      <Cakes/>
      <Category/>
    </div>
  )
}

export default App


