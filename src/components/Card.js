import { Link } from "react-router-dom";

import "../styles/card.css"

const Card = ({
    name,
    price,
    image,
    id,
    addToBasket
}) => {
    const catInfo = () => {
        addToBasket({ id, name, price, image })
    }
  return (
    <div className="card">
      <img className="card-img" src={image} alt="random" />
      <p className="card-name">{name}</p>
      <p className="card-price">{price}</p>
      <Link to={`aboutMe/?id=${name}`}>About Me</Link>
      <button onClick={catInfo}>Add to Basket</button>
    </div>
  );
};

export default Card;
