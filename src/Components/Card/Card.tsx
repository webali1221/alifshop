import "./Card.css";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart, FaHeart} from "react-icons/fa6";
import { useCart } from "../../context/CardContext";
import { useState } from "react";

interface iCard {
  img: string;
  text: string;
  spamm: string;
  price: string;
}

function Card({ card }: { card: iCard }) {
  // toggleLike va likeCount ni context'dan olamiz
  const { addToCart, toggleLike, likeCount } = useCart();
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      toggleLike(false); // Like qaytarib olinsa -1
    } else {
      toggleLike(true);  // Like bosilsa +1
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="card">
      <div className="like-box">
        {isLiked ? (
          <FaHeart
            className="heart active"
            onClick={handleLike}
          />
        ) : (
          <FaRegHeart
            className="heart"
            onClick={handleLike}
          />
        )}
      </div>
      <img className="card-img" src={card.img} alt={card.text} />
      <p>{card.text}</p>
      <span className="spamm">{card.spamm}</span>
      <h3 className="price">{card.price}</h3>
      <button className="card-btn" onClick={() => addToCart(card)}>
        <FiShoppingCart className="card-btn-ic" />
        Savatga
      </button>
    </div>
  );
}

export default Card;