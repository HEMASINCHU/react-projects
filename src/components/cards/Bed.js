import { useState } from "react";
import "./bed.css";
import Breadcrumb from "./Breadcrumb";
import Pagination from "./Pagination";
const Bed = () => {
  const [numbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  return (
    <>
      <Breadcrumb />
      <div className="comfybed-container">
        <img
          style={{ borderRadius: "10%" }}
          src="https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="bed"
          max-width="600px"
          height="400px"
        />
        <div className="comfybed-content">
          <h1>Comfy Bed</h1>
          <h4>Homestead</h4>
          <h3>$129.99</h3>
          <p>
            Cloud bread VHS hell of banjo bicycle rights jianbing umami
            mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher
            waistcoat, authentic chillwave trust fund. Viral typewriter
            fingerstache pinterest pork belly narwhal. Schlitz venmo everyday
            carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag
            kinfolk microdosing gochujang live-edge
          </p>
          <p>Colors</p>
          <input
            type="radio"
            name="circle"
            style={{ width: "20px", height: "20px" }}
          />
          <div>
            <label for="Amount">Amount</label>
            <br />
            <select className="comfybed-select">
              {numbers.map((num) => (
                <option key={num}>{num}</option>
              ))}
            </select>
          </div>
          <button className="comfybed-btn">Add to Cart</button>
        </div>
      </div>
      <Pagination />
    </>
  );
};
export default Bed;
