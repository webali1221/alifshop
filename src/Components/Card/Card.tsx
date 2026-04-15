import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { useCart } from "../../context/CardContext";
import "./Card.css";

interface iCard {
  img: string;
  text: string;
  spamm: string;
  price: string;
}

function Card({ card }: { card: iCard }) {
  // likeCount bu yerda kerak emas, uni o'chirib tashladik
  const { addToCart, toggleLike } = useCart();
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    const nextState = !isLiked;
    setIsLiked(nextState);
    toggleLike(nextState);
  };

  return (
    <div className="card">
      <div className="like-box">
        {isLiked ? (
          <FaHeart className="heart active" onClick={handleLike} />
        ) : (
          <FaRegHeart className="heart" onClick={handleLike} />
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