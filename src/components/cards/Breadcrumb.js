import { Link } from "react-router-dom";
import "./pagination.css";
const Breadcrumb = () => {
  return (
    <div className = "breadcrumb" style={{ margin: "20px" }}>
      <span style={{ margin: "10px" }}>
        <Link to="/">Home </Link>
      </span>
      <span style={{ margin: "10px" }}>
        <Link to="/option">Product</Link>
      </span>
    </div>
  );
};
export default Breadcrumb;
