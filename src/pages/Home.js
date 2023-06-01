import Card from "../components/Card";
import { Link } from "react-router-dom";

import "../styles/home.css"
import heroImg from "../images/persian_cat_hd-wallpapers.jpeg"


const Home = ({
    cat,
    addToBasket
}) => {
    return ( 
        <div className="home-container">
            <div className="hero-content">
                <div className="hero-image-container">
                    <h1 className="hero-title">Welcome to Cats For Life</h1>
                    <img className="hero-image" src={heroImg} alt="main cat" />
                </div>
                <div className="hero-text-container">
                    <p className="hero-about-text">Minim enim aliquip labore officia dolore. Deserunt adipisicing est eiusmod ut cupidatat. Culpa excepteur anim amet officia sint elit incididunt aliquip aute excepteur excepteur pariatur. Sunt ipsum sint incididunt proident proident. <Link className="about-button" to="/about">About</Link></p>
                    
                </div>
            </div>
            <div className="cat-gallery">
                {cat.map((cat, i) => {
                    return (
                        <Card 
                            name={cat.name}
                            price={cat.price}
                            image={cat.image}
                            key={i}
                            id={cat.id}
                            addToBasket={addToBasket}
                        />
                    )
                })}
            </div>
        </div>
     );
}
 
export default Home;