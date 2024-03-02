import { Link } from "react-router-dom";


function Navbar() {
  return <div>
   <div className="sitenav">
   <h1>News</h1>
   <p> news10 </p>
   <ul className="sitenav__list">
    <li className="">
        <a href="" className="sitenav__link">Home</a>
        <a href="" className="sitenav__link">About</a>
        <Link to='/create' className="sitenav__link">Create</Link>
    </li>
   </ul>
   </div>
  </div>;
}

export default Navbar;
