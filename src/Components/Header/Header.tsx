import "./Header.css";
import logo from "../../assets/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { useCart } from "../../context/CardContext";

interface HeaderProps {
  onToggleMenu: () => void;
}

function Header({ onToggleMenu }: HeaderProps) {
  const { cartCount, likeCount } = useCart();

  return (
    <div className="container">
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <nav>
          <button className="catalog" onClick={onToggleMenu}>
            <IoMenu className="menu" />
            Tovarlar katalogi
          </button>

          <div className="inp">
            <input type="search" placeholder="Tovarlarni izlash" />
            <button className="inp-btn"><FaSearch /></button>
          </div>

          <div className="cart">
            <AiOutlineShoppingCart className="cart-logo" />
            Savat
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </div>

          <div className="fav">
            <FaRegHeart className="fav-logo" />
            Saralanganlar
            {likeCount > 0 && <span className="badge">{likeCount}</span>}
          </div>

          <button className="sign">Kirish</button>
          <button className="lan">RUS/UZB</button>
        </nav>
      </header>
    </div>
  );
}

export default Header;