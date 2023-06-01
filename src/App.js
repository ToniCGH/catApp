import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GetCatImage from './http/GetCatImage';
import GetData from './http/GetData';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Modal from './components/Modal';
import useModal from './components/useModal';
import './App.css';
import AboutMe from './pages/AboutMe';
import Footer from './components/Footer';

function App() {
  const [cat, setCat] = useState([])
  const [basketItems, setBasketItems] = useState([])
  const {isShowing, toggle} = useModal();

  console.log(basketItems)
      
  useEffect(() => {
    (async () => {
      const images = await GetCatImage()
      let data = GetData()
      data = data.map((cat, i) => {
        cat.image = images[i].url
        cat.id = i
        return cat
      })
      setCat(data)
    })()
  }, [])

  const addToBasket = (item) => {
    setBasketItems([...basketItems, item])
  }

  const removeItemFromBasket = (item) => {
    const remainingBasketItems = basketItems.filter(cat => cat.id !== item.id)
    setBasketItems(remainingBasketItems)
  }

  return (
    <div className="App">
      {/* <button className="button-default" onClick={toggle}>Modal test</button> */}
      <Modal
        isShowing={isShowing}
        hide={toggle}
        basketItems={basketItems}
        removeItemFromBasket={removeItemFromBasket}
      />
      <Router>
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav> */}

        <Navbar toggle={toggle} />
      
        <Routes>
          <Route path="/" element={<Home cat={cat} addToBasket={addToBasket} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutMe" element={<AboutMe cat={cat} addToBasket={addToBasket} />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
