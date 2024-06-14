import "./Card.css";
import useIsMobile from "../hooks/resize";
import cond from "../img/cond.jpg"

export default function Card(src, description) {
  const isMobile = useIsMobile();

  return (
    <div className="card">
      <div className="img_wrapper"><div className="img_container"></div></div>
      <div className="content">
        <p className="price">3000₾</p>
        <p className="product_name"> Sumo 75 XL Powerful Desert Air Cooler 75-litres</p>
        <p className="stat1">სიმძლავრე: <span style={{fontWeight: '600'}}>200W</span></p>
        <p className="stat2">გაგრილების დიაპაზონი: <span style={{fontWeight: '600'}}>18°C - 24°C</span></p>
      </div>
      <button className="add_to_cart">სრულად ნახვა</button>
    </div>
  );
}