import "./Card.css";
import useIsMobile from "../hooks/resize";

export default function Card(src, description) {
  const isMobile = useIsMobile();

  return (
    <div className="card">
      <div className="img_wrapper"></div>
      <div className="content">
        <h3 className="title">Mixer HM0293</h3>
        <ul className="description">
          <li>Color:</li>
          <li>Number of gear:</li>
          <li>Power:</li>
          <li>Warranty:</li>
        </ul>
        <p className="model_number">Model:Number</p>
        <h6 className="price">Price:</h6>
        <button className="add_to_cart">Add to cart</button>
      </div>
      
    </div>
  );
}