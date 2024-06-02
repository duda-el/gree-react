import "./Card.css";
import useIsMobile from "../hooks/resize";
import cond from "../img/cond.jpg"

export default function Card(src, description) {
  const isMobile = useIsMobile();

  return (
    <div className="card">
      <div className="img_wrapper"></div>
      <div className="content">
        <h3 className="title">Mixer HM0293</h3>
        <ul className="description">
          <li>ტიპი:</li>
          <li>ფერი:</li>
          <li>სიმძლავრე:</li>
          <li>მასალა:</li>
        </ul>
        <p className="model_number">Model:Number</p>
        <h6 className="price">ფასი:</h6>
        <button className="add_to_cart">სრულად ნახვა</button>
      </div>
      
    </div>
  );
}