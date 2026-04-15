import "./Page1.css";
import bg_img from "../../assets/bg-img-sec-p1.svg";
import { FaFireAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Card from "../../Components/Card/Card";

import product1 from "../../assets/product1.webp";
import product2 from "../../assets/product2.webp";
import product3 from "../../assets/product3.jpg";
import product4 from "../../assets/product4.jpg";
import product5 from "../../assets/product5.webp";
import product6 from "../../assets/product6.webp";
import product7 from "../../assets/product7.webp";
import product8 from "../../assets/product8.webp";
import product9 from "../../assets/product9.webp";
import product10 from "../../assets/product10.webp";

interface iProduct {
  id: number;
  text: string;
  img: string;
  spamm: string;
  price: string;
}

function Page1() {
  const products: iProduct[] = [
    { id: 1, img: product1, text: "Alpha Wireless", spamm: "dan 1 085 729 so'm/oyga", price: "14 890 000 so'm" },
    { id: 2, img: product2, text: "Intel Core i9-14900K", spamm: "dan 875 350 so'm/oyga", price: "7 503 000 so'm" },
    { id: 3, img: product3, text: "RTX 5080", spamm: "dan 2 932 440 so'm/oyga", price: "24 437 000 so'm" },
    { id: 4, img: product4, text: "ASUS motherboard", spamm: "dan 805 322 so'm/oyga", price: "6 902 760 so'm" },
    { id: 5, img: product5, text: "DDR5 RAM", spamm: "dan 1 295 518 so'm/oyga", price: "11 104 440 so'm" },
    { id: 6, img: product6, text: "SSD NVMe", spamm: "dan 542 717 so'm/oyga", price: "4 651 860 so'm" },
    { id: 7, img: product7, text: "PSU 850W", spamm: "dan 163 333 so'm/oyga", price: "1 400 000 so'm" },
    { id: 8, img: product8, text: "OLED monitor", spamm: "dan 20 699 000 so'm/oyga", price: "2 414 883 so'm" },
    { id: 9, img: product9, text: "Keyboard", spamm: "dan 71 165 so'm/oyga", price: "609 990 so'm" },
    { id: 10, img: product10, text: "Mouse", spamm: "dan 197 283 so'm/oyga", price: "1 691 000 so'm" },
  ];

  return (
    <div className="container">
      
      <section className="sec-p1">
        <img src={bg_img} alt="Promo Banner" />
      </section>

      <section>
        <div className="sec-top">
          <h1 className="top-text">
            Chegirmalar <FaFireAlt className="fire" />
          </h1>

          <h2 className="top-text2">
            Hammasini ko'rish <IoIosArrowForward />
          </h2>
        </div>

        <div className="cards">
          {products.map((product) => (
            <Card
              key={product.id}
              card={product}   
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Page1;