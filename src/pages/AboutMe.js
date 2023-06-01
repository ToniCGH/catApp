import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import "../styles/about-me.css"

const useQuery = () => {
    const { search } = useLocation()
    return useMemo(() => new URLSearchParams(search), [search])
}

const AboutMe = ({
    cat,
    addToBasket
}) => {
    const query = useQuery()
    const catName = query.get("id")
    const catAbout = cat.filter((c) => c.name === catName)[0]
    const { id, name, price, image } = catAbout
    const catInfo = () => {
        addToBasket({ id, name, price, image })
    }
    return ( 
        <div className="aboutMe-container">
            {
                <div className="about-me">  
                    <img className="about-me-image" src={catAbout.image} alt="cat"/>

                    <div className="about-me-info-about-me">
                        <h2>About Me</h2>
                        <h3>Name: {catAbout.name}</h3>
                        <h3>Breed: {catAbout.breed}</h3>
                        <h3>Age: {catAbout.age}</h3>
                        <h3>Location: {catAbout.city}</h3>
                        <h3>Sex: {catAbout.gender}</h3>
                        <h3>Price: {catAbout.price}</h3>
                        <button onClick={catInfo}>Add to Basket</button>
                    </div>
                </div>
            }
        </div>
    )
}
 
export default AboutMe;